// Baseline Nutrition Facts
// Baseline 100%,2000,75,20,0,300,2300,275,28,0,0

// d3.csv("../assets/NutritionFacts.csv").then((d) => {
// data.forEach((d) => {
//   d.Calories = +d.Calories;
//   d["Total Fat (g)"] = +d["Total Fat (g)"];
//   d["Saturated Fat (g)"] = +d["Saturated Fat (g)"];
//   d["Trans Fat (g)"] = +d["Trans Fat (g)"];
//   d["Cholesterol (mg)"] = +d["Cholesterol (mg)"];
//   d["Sodium (mg)"] = +d["Sodium (mg)"];
//   d["Total Carbohydrates (g)"] = +d["Total Carbohydrates (g)"];
//   d["Dietary Fiber (g)"] = +d["Dietary Fiber (g)"];
//   d.Sugars = +d.Sugars;
//   d.Protein = +d.Protein;
// });
// }

d3.csv("../assets/NutritionFacts.csv", (d) => {
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

const width = 800
const height = 500
const margin = { top: 50, bottom: 50, left: 50, right: 50 }

// creates svg element
const svg = d3
  .select(".d3-ramen")
  .append("svg") // adds svg ele as child to d3-div
  .attr("viewBox", [0, 0, width, height]) // creates the SVG box
  .attr("height", height - margin.top - margin.bottom) // chart height
  .attr("width", width - margin.left - margin.right) // chart width

const render = (data) => {
  // const tip = d3
  //   .tip()
  //   .attr("class", "d3-tip")
  //   .html(function (d) {
  //     return d.type
  //   })

  // creates x axis boundaries
  const x = d3
    .scaleBand()
    .domain(d3.range(data.length)) // dynamic range of elements
    .range([margin.left, width - margin.right]) // x axis range
    .padding(0.1) // reg css padding

  // create y axis boundaries
  const y = d3
    .scaleLinear() // scales your data to range size
    .domain([0, d3.max(data, (d) => d.calories)]) // y axis scaling
    .range([height - margin.bottom, margin.top]) // y axis range

  // creates the bars
  svg
    .append("g") // adds g ele to svg ele
    .attr("fill", "lightgreen")
    .selectAll("rect") // selects all rectangles, if none found, creates empty selection
    .data(data) //.sort((a, b) => d3.descending(a.calories, b.calories)))
    .join("rect")
    .attr("class", "rectangle") // adds classname, now can be modified in scss
    .attr("mix-blend-mode", "multiply")
    .attr("x", (d, i) => x(i)) // places elements in order on x axis, d=data, i=index
    .attr("y", (d) => y(d.calories))
    .attr("height", (d) => y(0) - y(d.calories))
    .attr("width", x.bandwidth()) // calcs thickness of bars

  // shows label on bottom
  function xAxis(g) {
    debugger
    g.call(d3.axisBottom(x).tickFormat((i) => data[i].type)) //
      .attr("class", "xText")
      .attr("font-size", "20px") // original font was too small
      .attr("transform", `translate(0, ${height - margin.bottom})`) // x-axis line was showing on top
      .selectAll("text")
      .attr("transform", "rotate(-45)")
  }

  function yAxis(g) {
    g.call(d3.axisLeft(y).ticks(null, data.format))
      .attr("font-size", "15px")
      .append("text")
      .attr("class", "yText")
  }

  d3.select(".sorter").on("change", sort)

  // const sortTimeout = setTimeout(() => {
  //   debugger
  //   d3.select("input").property("checked", true).each(sort)
  // }, 500)

  function sort() {
    clearTimeout(sortTimeout)

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

    svg.selectAll("rect").sort((a, b) => d3.descending(a.calories, b.calories))

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

  svg.append("g").call(xAxis)
  svg.append("g").call(yAxis)
  svg.node()
}
