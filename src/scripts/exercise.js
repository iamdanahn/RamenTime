document.addEventListener("DOMContentLoaded", () => {
  d3.csv("../../assets/exercise.csv", (d) => {
    debugger
    return {
      exercise: d.Exercise,
      calories: +d.Calories,
    }
  }).then((data) => {
    console.log(data)
    const margin = { top: 50, bottom: 150, left: -50, right: 0 }
    const width = 400
    const height = 650

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.exercise))
      .range([0, width - margin.right])
      .padding(0.1)

    const y = d3
      .scaleLinear()
      .domain([0, 15])
      .nice()
      .range([height - margin.bottom, margin.top])

    function xAxis(g) {
      g.call(d3.axisBottom(x))
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .attr("class", "xAxis exercise")
        .selectAll("text")
        .attr("transform", "rotate(-25)")
    }

    function yAxis(g) {
      g.call(d3.axisRight(y))
        .attr("class", "yAxis exercise")
        .attr("transform", `translate(${width} ,0)`) // puts axis on right side
    }

    // tooltip popup
    // d3-tip event handlers rcv "event" as 1st arg
    //
    const tip = d3
      .tip()
      .attr("class", "d3-tip exercise")
      .html((event, d) => {
        return d.calories
      })

    const svg = d3
      .select(".d3-exercise")
      .append("svg")
      .attr("viewBox", [0, 0, width, height])
      .attr("preserveAspectRatio", "xMidYMid meet")
      .attr("height", height - margin.top - margin.bottom) // chart height
      .attr("width", width - margin.left - margin.right) // chart width

    const bars = svg
      .append("g")

      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("class", "bar exercise")
      .attr("x", (d) => x(d.exercise)) // spreads bars over x axis
      .attr("y", (d) => y(d.calories))
      .attr("height", (d) => y(0) - y(d.calories))
      .attr("width", x.bandwidth())
      .on("mouseover", tip.show)
      .on("mouseout", tip.hide)

    // call area to render features
    svg.call(tip)
    svg.append("g").call(xAxis)
    svg.append("g").call(yAxis)
    return svg.node()
  })
})
//   const xScale = d3
//     .scaleBand()
//     .range([0, width])
//     .padding(0.1)
//     .domain(data.map((d) => d.exercise))
//   const yScale = d3
//     .scaleLinear()
//     .range([height, 0])
//     .domain([0, d3.max(data, (d) => d.calories)])

//   const svg = d3
//     .select(".d3-exercise")
//     .attr("height", height - margin.top - margin.bottom) // chart height
//     .attr("width", width - margin.left - margin.right) // chart width
//     .attr("viewBox", [0, 0, width, height]) // creates the SVG box
//     .attr("preserveAspectRatio", "xMidYMid meet") // preserves aspect ratio
//   const xAxis = d3.axisBottom(xScale)
//   // g.append("g")
//   //   .attr("transform", `translate(0, ${width})`)
//   //   .call(d3.axisBottom(xScale))

//   const yAxis = d3.axisLeft(yScale).ticks(20)
//   // g.append("g")
//   //   .call(
//   //     d3
//   //       .axisLeft(yScale)
//   //       .tickFormat((d) => d.calories)
//   //       .ticks(10),
//   //   )
//   //   .append("text")
//   //   .attr("y", 6)
//   //   .attr("dy", "0.71em")
//   //   .attr("text-anchor", "end")
//   //   .text("value")

//   const main = svg
//     .append("g")
//     .attr("transform", `translate(${margin.left}, ${margin.top})`)
//     .attr("width", width)
//     .attr("height", height)
//     .attr("class", "main")

//   main
//     .append("g")
//     .attr("transform", `translate(0, ${height})`)
//     .attr("class", "main axis")
//     .call(xAxis)

//   main.append("g").attr("class", "main axis date").call(yAxis)
// })
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
// .append("rect")
// .attr("x", 10)
// .attr("y", 10)
// .attr("width", 100)
// .attr("height", 100)
// .attr("fill", "blue")
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
