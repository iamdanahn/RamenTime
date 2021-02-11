// Baseline Nutrition Facts
// Baseline 100%,2000,75,20,0,300,2300,275,28,0,0

document.addEventListener("DOMContentLoaded", () => {
  d3.csv("../assets/nutrition_facts.csv", (d) => {
    return {
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
  }).then((data) => {
    render(data)
    console.log(data)
  })

  // data xfer from d4.csv promise
  const render = (data) => {
    const width = 800
    const height = 650
    const margin = { top: 50, bottom: 150, left: 50, right: 25 }

    // creates svg element
    const svg = d3
      .select(".d3-ramen")
      .append("svg") // adds svg ele as child to d3-div
      .attr("viewBox", [0, 0, width, height]) // creates the SVG box
      .attr("preserveAspectRatio", "xMidYMid meet") // preserves aspect ratio
      .attr("height", height - margin.top - margin.bottom) // chart height
      .attr("width", width - margin.left - margin.right) // chart width

    // creates x scale
    const x = d3
      .scaleBand() // creates "bands"/columns
      .range([margin.left / 2, width - margin.right]) // x axis range
      .padding(0.1) // reg css padding
      .domain(data.map((d) => d.type)) //d3.range(data.length)) // dynamic range of elements

    // create y scale
    const y = d3
      .scaleLinear() // scales your data to range size
      .range([height - margin.bottom, margin.top]) // y axis range
      .domain([0, d3.max(data, (d) => d.calories)]) // y axis scaling

    // creates the bars
    const bars = svg
      .append("g") // adds group ele to svg ele

      .selectAll("rect") // selects all rectangles, if none found, creates empty selection
      .data(data) //.sort((a, b) => d3.descending(a.calories, b.calories)))
      .join("rect") // similar to .join((enter) => enter.append('rect'))
      .attr("class", "bar ramen") // adds classname, now can be modified in scss
      .attr("mix-blend-mode", "multiply")
      .attr("x", (d) => x(d.type)) //, i) => x(i)) // places elements in order on x axis, d=data, i=index
      .attr("y", (d) => y(d.calories))
      .attr("height", (d) => y(0) - y(d.calories))
      .attr("width", x.bandwidth()) // calcs thickness of bars

      .append("text")
      .attr("class", "values")
      .attr("x", (d) => x.bandwidth() / 2)
      .attr("y", (d) => y(d.calories) + 30)
      .attr("text-anchor", "middle")
      .text((d) => d.calories)

      .attr("value", (d, i) => d.type)
      .on("click", (d) => console.log(d.toElement.__data__.type))

    // label on bottom
    function xAxis(g) {
      debugger
      g.call(d3.axisBottom(x))
        .attr("class", "xText")
        .attr("font-size", "20px") // original font was too small
        .attr("transform", `translate(0, ${height - margin.bottom})`) // x-axis line was showing on top
        .selectAll("text")
        .attr("transform", "rotate(-25)")
        .attr("text-anchor", "end")
    }
    svg.append("g").call(xAxis)

    // label on left
    function yAxis(g) {
      g.call(d3.axisLeft(y)) //.ticks(null, data.format))
        .attr("font-size", "15px")
        .append("text")
        .attr("class", "yText")
    }
    svg.append("g").call(yAxis)

    svg
      .append("text")
      .attr("class", "label")
      .attr("x", -height / 2 + 40)
      .attr("y", -width * 0.05)
      .attr("transform", "rotate(-90)")
      .attr("text-anchor", "middle")

      .text("Calories")
      .attr("font-size", "25px")

    d3.select("input").on("change", sort)

    // const sortTimeout = setTimeout(() => {
    //   debugger
    //   d3.select("input").property("checked", true).each(sort)
    // }, 500)

    function sort() {
      // clearTimeout(sortTimeout)

      debugger
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

    // svg.append("g").call(xAxis)
    // svg.append("g").call(yAxis)
    svg.node()
  }
})
