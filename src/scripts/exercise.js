document.addEventListener("DOMContentLoaded", () => {
  const svg = d3
    .select(".d3-exercise")
    .append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", 100)
    .attr("height", 100)
    .attr("fill", "blue")
  // const margin = { top: 50, bottom: 150, left: 0, right: 25 }
  // const width = 300
  // const height = 650

  // const xScale = d3.scaleBand().range([0, width]).padding(0.1)
  // const yScale = d3.scaleLinear().range([height, 0])

  // const g = svg.append("g").attr("transform", `translate(100, 100)`)

  // d3.csv("../../assets/exercise.csv", function (error, data) {
  //   if (error) {
  //     throw error
  //   }

  //   data.forEach(function (d) {
  //     d.exercise = d.exercise
  //     d.low = +d["Calories burned / min (low)"]
  //     d.high = +d["Calories burned / min (high)"]
  //   })

  //   xScale.domain(data.map((d) => d.exercise))
  //   yScale.domain([0, d3.max(data, (d) => d.high)])

  //   g.append("g")
  //     .attr("transform", `translate(0, ${height})`)
  //     .call(d3.axisBottom(xScale))

  //   g.append("g")
  //     .call(d3.axisLeft(yScale))
  //     .tickFormat(d.high)
  //     .append("text")
  //     .attr("y", 6)
  //     .attr("dy", "0.71em")
  //     .attr("text-anchor", "end")
  //     .text("value")
  // })
})

// const width = 300
// const height = 650
// const margin = { top: 50, bottom: 150, left: 50, right: 50 }

// const svg = d3
//   .select(".d3-exercise")
//   .append("svg")
//   .attr("viewBox", [0, 0, width, height])
//   .attr("preserveAspectRatio", "xMidYMid meet")
//   .attr("height", height - margin.top - margin.bottom)
//   .attr("width", width - margin.left - margin.right)
//   .append("g")
//   .attr("transform", `translate(${margin.left}, ${margin.top})`)

// export default d3.csv("../assets/exercise.csv", (data) => {
//   data.forEach(function (d) {
//     d.exercise = d.exercise
//     d.low = +d["Calories burned / min (low)"]
//     d.high = +d["Calories burned / min (high)"]
//   })

//   const x = d3
//     .scaleBand()
//     .range([0, width])
//     .padding(0.2)
//     .domain(data.map((d) => d.exercise))
//   const y = d3
//     .scaleLinear()
//     .range([height, 0])
//     .domain([0, d3.max(data, (d) => d.high)])

//   svg
//     .append("g")
//     .attr("transform", `translate(0, ${height})`)
//     .call(d3.axisBottom(x))
//     .selectAll("text")
//     .attr("transform", "translate(-10, 0)rotate(-45)")
//     .style("text-anchor", "end")

//   svg.append("g").call(d3.axisLeft(y))

//   svg
//     .selectAll("mybar")
//     .data(data)
//     .enter()
//     .append("rect")
//     .attr("x", (d) => d.exercise)
//     .attr("y", (d) => d.high)
//     .attr("width", x.bandwidth())
//     .attr("height", (d) => y(0) - y(d.high))
// })

////////////////////////
/////////////////////
///////////////////////

// // set the dimensions and margins of the graph
// var margin = { top: 20, right: 20, bottom: 30, left: 40 },
//   width = 960 - margin.left - margin.right,
//   height = 500 - margin.top - margin.bottom

// // set the ranges
// var x = d3.scaleBand().range([0, width]).padding(0.1)
// var y = d3.scaleLinear().range([height, 0])

// // append the svg object to the body of the page
// // append a 'group' element to 'svg'
// // moves the 'group' element to the top left margin
// var svg = d3
//   .select(".d3-exercise")
//   .append("svg")
//   .attr("width", width + margin.left + margin.right)
//   .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//   .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

// // get the data
// d3.csv("../assets/exercise.csv", function (error, data) {
//   if (error) throw error

//   // format the data
//   data.forEach(function (d) {
//     d.exercise = d.exercise
//     d.low = +d["Calories burned / min (low)"]
//     d.high = +d["Calories burned / min (high)"]
//   })

//   // Scale the range of the data in the domains
//   x.domain(
//     data.map(function (d) {
//       return d.exercise
//     }),
//   )
//   y.domain([
//     0,
//     d3.max(data, function (d) {
//       return d.high
//     }),
//   ])

//   // append the rectangles for the bar chart
//   svg
//     .selectAll(".bar")
//     .data(data)
//     .enter()
//     .append("rect")
//     .attr("class", "bar")
//     .attr("x", function (d) {
//       return x(d.exercise)
//     })
//     .attr("width", x.bandwidth())
//     .attr("y", function (d) {
//       return y(d.high)
//     })
//     .attr("height", function (d) {
//       return height - y(d.high)
//     })

//   // add the x Axis
//   svg
//     .append("g")
//     .attr("transform", "translate(0," + height + ")")
//     .call(d3.axisBottom(x))

//   // add the y Axis
//   svg.append("g").call(d3.axisLeft(y))
// })
