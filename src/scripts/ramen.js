// Baseline Nutrition Facts
// Baseline 100%,2000,75,20,0,300,2300,275,28,0,0

document.addEventListener("DOMContentLoaded", () => {
  d3.csv(
    "https://raw.githubusercontent.com/iamdanahn/RamenTime/main/assets/nutrition_facts.csv",
    (d) => {
      return {
        brand: d.Brand,
        type: d.Ramen,
        calories: +d.Calories,
        totalFat: +d["Total Fat (g)"],
        sFat: +d["Saturated Fat (g)"],
        tFat: +d["Trans Fat (g)"],
        cholesterol: +d["Cholesterol (mg)"],
        sodium: +d["Sodium (mg)"],
        carbs: +d["Total Carbohydrates (g)"],
        fiber: +d["Dietary Fiber (g)"],
        sugars: +d.Sugars,
        protein: +d.Protein,
      }
    },
  ).then((data) => {
    render(data)
    console.log(data)
  })

  // data xfer from d4.csv promise
  const render = (data) => {
    const width = 700
    const height = 650
    const margin = { top: 50, bottom: 150, left: 20, right: -100 }

    // creates svg element
    const svg = d3
      .select(".d3-ramen")
      .append("svg") // adds svg ele as child to d3-div
      .attr("viewBox", [0, 0, width, height]) // creates the SVG box
      .attr("preserveAspectRatio", "xMidYMid meet") // preserves aspect ratio
      .attr("height", height - margin.top - margin.bottom) // chart height
      .attr("width", width) // chart width

    // creates x scale
    const x = d3
      .scaleBand() // creates "bands"/columns
      .range([margin.left / 2, width - margin.right]) // x axis range
      .padding(0.1) // reg css padding
      .domain(data.map((d) => d.type)) //d3.range(data.length)) // dynamic range of elements

    // label on bottom
    function xAxis(g) {
      // debugger
      g.call(d3.axisBottom(x))
        .attr("class", "xText")
        .attr("font-size", "20px") // original font was too small
        .attr("transform", `translate(0, ${height - margin.bottom})`) // x-axis line was showing on top
        .selectAll("text")
        .transition()
        .duration(1000)
        .attr("transform", "rotate(-25)")
        .attr("text-anchor", "end")
    }
    svg.append("g").call(xAxis)

    // create y scale
    const y = d3
      .scaleLinear() // scales your data to range size
      .range([height - margin.bottom, margin.top]) // y axis range
      .domain([0, d3.max(data, (d) => d.calories)]) // y axis scaling
      .nice() // adds remaining top tick if left out

    // label on left
    function yAxis(g) {
      g.call(d3.axisLeft(y)) //.ticks(null, data.format))
        .attr("font-size", "15px")
        .append("text")
        .attr("class", "yText")
    }
    svg.append("g").call(yAxis)

    // tooltip above bar
    const tip = d3
      .select("body")
      .append("div")
      .style("opacity", 0)
      .attr("class", "d3-tip ramen")

    // creates the bars
    const bars = svg
      .append("g") // adds group ele to svg ele

      .selectAll("rect") // selects all rectangles, if none found, creates empty selection
      .data(data) //.sort((a, b) => d3.descending(a.calories, b.calories)))
      .join("rect") // similar to .join((enter) => enter.append('rect'))
      .attr("class", "bar ramen") // adds classname, now can be modified in scss
      .attr("x", (d) => x(d.type)) //, i) => x(i)) // places elements in order on x axis, d=data, i=index
      .attr("width", x.bandwidth()) // calcs thickness of bars
      .attr("y", (d) => y(0))
      .attr("height", (d) => 0)

    svg
      .selectAll("rect")
      .transition()
      .duration(800)
      .attr("y", (d) => y(d.calories))
      .attr("height", (d) => y(0) - y(d.calories))
      .delay(function (d, i) {
        return i * 100
      })

    svg
      .selectAll("rect")
      .on("mouseover", (e, d) => {
        // e == mouse event
        tip.transition().duration(300).style("opacity", 0.8)
        // console.log(e)
        // console.log(d)
        tip
          .html(
            `Brand: ${d.brand} <br/>
           Total fat(g): ${d.totalFat} <br/>
           Saturated fat(g): ${d.sFat} <br/>
           Trans fat(g): ${d.tFat} <br/>
           Cholesterol (mg): ${d.cholesterol} <br/>
           Sodium (mg): ${d.sodium} <br/>
           Dietary Fiber (g): ${d.fiber} <br/>
           Sugar (g): ${d.sugars} <br/>
           Protein (g): ${d.protein} <br/>
         `,
          )
          .style("left", `${e.clientX}px`)
          .style("top", `${e.clientY}px`)
      })
      .on("mousemove", (e, d) => {
        // console.log(e)
        // console.log(d)
        tip.style("left", `${e.clientX}px`).style("top", `${e.clientY - 50}px`)
      })
      .on("mouseout", (e, d) => {
        // console.log(e)
        // console.log(d)
        tip.transition().duration(100).style("opacity", 0)
      })
      // used for testing
      .attr("value", (d, i) => d.type)
      .on("click", (d) => console.log(d.toElement.__data__.type))

    // Calories label on left side
    svg
      .append("text")
      .attr("class", "label ramenY")
      .attr("x", -height / 2 + 40)
      .attr("y", -width * 0.1)
      .attr("transform", "rotate(-90)")
      .attr("text-anchor", "middle")
      .text("Calories")
      .attr("font-size", "25px")

    d3.select("input").on("change", sort)

    // const sortTimeout = setTimeout(() => {
    //   // debugger
    //   d3.select("input").property("checked", true).each(sort)
    // }, 500)

    function sort() {
      // clearTimeout(sortTimeout)

      // debugger
      const newX = x
        .domain(
          data
            .sort(
              this.checked
                ? (a, b) => {
                    return b.calories - a.calories
                  }
                : (a, b) => {
                    return d3.ascending(a.type, b.type)
                  },
            )
            .map((d) => {
              return d.type
            }),
        )
        .copy()

      svg
        .selectAll("rect")
        .sort((a, b) => d3.descending(a.calories, b.calories))

      const transition = svg.transition().duration(500),
        delay = (d, i) => {
          return i * 25
        }

      transition
        .selectAll("rect")
        .delay(delay)
        .attr("x", (d) => {
          return newX(d.type)
        })

      transition.select(".xText").call(xAxis).selectAll("g").delay(delay)
    }

    svg.node()
  }
})
