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
    .scaleBand() // creates "bands"/columns
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
    .attr("class", "bar") // adds classname, now can be modified in scss
    .attr("mix-blend-mode", "multiply")
    .attr("x", (d, i) => x(i)) // places elements in order on x axis, d=data, i=index
    .attr("y", (d) => y(d.calories))
    .attr("height", (d) => y(0) - y(d.calories))
    .attr("width", x.bandwidth()) // calcs thickness of bars

  // shows label on bottom
  function xAxis(g) {
    // debugger
    g.call(
      d3.axisBottom(x).tickFormat((i) => {
        // debugger
        return data[i].type
        // typeof i === "number" ? data[i].type : i
      }),
    ) //
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

  const sortTimeout = setTimeout(() => {
    // debugger
    d3.select("input").property("checked", true).each(sort)
  }, 500)

  function sort() {
    clearTimeout(sortTimeout)

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

// d3.csv("../assets/NutritionFacts.csv", (d) => {
//   return {
//     type: d.Ramen,
//     calories: +d.Calories,
//     totalFat: +d["Total Fat (g)"],
//     sFat: +d["Saturated Fat (g)"],
//     tFat: +d["Trans Fat (g)"],
//     cholesterol: +d["Cholesterol (mg)"],
//     sodium: +d["Sodium (mg)"],
//     carbs: +d["Total Carbohydrates (g)"],
//     fiber: +d["Dietary Fiber (g)"],
//     sugars: +d.Sugars,
//     protein: +d.Protein,
//   }
// }).then((data) => {
//   render(data)
//   console.log(data)
// })

// const margin = { top: 50, right: 50, bottom: 50, left: 50 }
// const width = 960 - margin.left - margin.right
// const height = 500 - margin.top - margin.bottom

// const svg = d3
//   .select("body")
//   .append("svg")
//   .attr("width", width + margin.left + margin.right)
//   .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//   .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

// const formatPercent = d3.format("d")

// const x = d3.scale.ordinal().rangeRoundBands([0, width], 0.1, 1)

// const y = d3.scale.linear().range([height, 0])

// const xAxis = d3.svg.axis().scale(x).orient("bottom")

// const yAxis = d3.svg.axis().scale(y).orient("left")

// const tip = d3
//   .tip()
//   .attr("class", "d3-tip")
//   .offset([-17, -8])
//   .html(function (d) {
//     return (
//       "<strong> " +
//       d.type +
//       ": </strong> <span style='color:red'>" +
//       d.frequency +
//       "</span>"
//     )
//   })

// svg.call(tip)

// d3.csv("../assets/NutritionFacts.csv", type, (error, data) => {
//   x.domain(
//     data.map(function (d) {
//       return d.letter
//     }),
//   )
//   y.domain([
//     0,
//     d3.max(data, function (d) {
//       return d.frequency
//     }),
//   ])

//   svg
//     .append("g")
//     .attr("class", "x axis")
//     .attr("transform", "translate(0," + height + ")")
//     .call(xAxis)

//   svg
//     .append("g")
//     .attr("class", "y axis")
//     .call(yAxis)
//     .append("text")
//     .attr("transform", "rotate(-90)")
//     .attr("y", 6)
//     .attr("dy", ".71em")
//     .style("text-anchor", "end")
//     .text("Frequency")

//   svg
//     .append("text")
//     .attr("x", width / 2)
//     .attr("y", 0 - margin.top / 2)
//     .attr("text-anchor", "middle")
//     .style("font-size", "16px")
//     .text("Sortable Barchart with a Tip")

//   svg
//     .selectAll(".bar")
//     .data(data)
//     .enter()
//     .append("rect")
//     .attr("class", "bar")
//     .attr("x", function (d) {
//       return x(d.letter)
//     })
//     .attr("width", x.rangeBand())
//     .attr("y", function (d) {
//       return y(d.frequency)
//     })
//     .attr("height", function (d) {
//       return height - y(d.frequency)
//     })
//     .on("mouseover", tip.show)
//     .on("mouseout", tip.hide)

//   d3.select("input").on("change", change)

//   var sortTimeout = setTimeout(function () {
//     d3.select("input").property("checked", true).each(change)
//   }, 2000)

//   function change() {
//     clearTimeout(sortTimeout)

//     // Copy-on-write since tweens are evaluated after a delay.
//     var x0 = x
//       .domain(
//         data
//           .sort(
//             this.checked
//               ? function (a, b) {
//                   return b.frequency - a.frequency
//                 }
//               : function (a, b) {
//                   return d3.ascending(a.letter, b.letter)
//                 },
//           )
//           .map(function (d) {
//             return d.letter
//           }),
//       )
//       .copy()

//     svg.selectAll(".bar").sort(function (a, b) {
//       return x0(a.letter) - x0(b.letter)
//     })

//     var transition = svg.transition().duration(500),
//       delay = function (d, i) {
//         return i * 25
//       }

//     transition
//       .selectAll(".bar")
//       .delay(delay)
//       .attr("x", function (d) {
//         return x0(d.letter)
//       })

//     transition.select(".x.axis").call(xAxis).selectAll("g").delay(delay)
//   }
// })

// const height = 500
// const width = 800
// const margin = { top: 50, bottom: 50, left: 50, right: 50 }
// const barHeight = height
// const barWidth = 50

// const data = d3.csv("../assets/NutritionFacts.csv", (d) => {
//   return {
//     ramen: d.Ramen,
//     calories: +d.Calories,
//     totalFat: +d["Total Fat (g)"],
//     sFat: +d["Saturated Fat (g)"],
//     tFat: +d["Trans Fat (g)"],
//     cholesterol: +d["Cholesterol (mg)"],
//     sodium: +d["Sodium (mg)"],
//     carbs: +d["Total Carbohydrates (g)"],
//     fiber: +d["Dietary Fiber (g)"],
//     sugars: +d.Sugars,
//     protein: +d.Protein,
//   }
// })

// // Find the DOM element with an id of "chart" and set its width and height.
// // This happens to be an svg element.
// const svg = d3
//   .select(".d3-ramen")
//   .append("svg")
//   .attr("viewBox", [0, 0, width, height]) // 0-x 0-y startin points,
//   .attr("width", width - margin.left - margin.right)
//   .attr("height", height - margin.top - margin.bottom)

// // Append a group element to the svg and add a CSS class of "bar".
// const group = svg.append("g").attr("class", "bar")

// // creates x axis boundaries
// const x = d3
//   .scaleBand() // creates "bands"/columns
//   .domain(d3.range(data.length)) // dynamic range of elements
//   .range([margin.left, width - margin.right]) // x axis range
//   .padding(0.1) // reg css padding

// // create y axis boundaries
// const y = d3
//   .scaleLinear() // scales your data to range size
//   .domain([0, d3.max(data, (d) => d.calories)]) // y axis scaling
//   .range([height - margin.bottom, margin.top]) // y axis range

// // Append a rect element to the group and set its properties.
// // The background color of an SVG element is set using the "fill" property.
// group
//   .append("rect")
//   .data(data)
//   .attr("height", (d) => y(0) - y(d.calories))
//   .attr("width", x.bandwidth())
//   .attr("x", (d, i) => x(i))
//   .attr("y", (d) => y(d.calories))
//   .attr("fill", "cornflowerblue")

// // // Append a text element to the group and set its properties.
// // group
// //   .append("text")
// //   .text("hello")
// //   .attr("x", barWidth - ) // center horizontally in bar
// //   .attr("y", height - barHeight + 200) // just below top

// // const values = [7, 13, 2]
// // const bars = d3.selectAll(".bar").data(values)
// // console.log("bars =", bars)

///////////////

var slide8Sorted = false
var slide8x
var slide8svg
var slide8xAxis

function drawSlide8() {
  //Define width/height/margins
  var margin = { top: 10, right: 10, bottom: 20, left: 20 },
    width = 550 - margin.left - margin.right,
    height = 420 - margin.top - margin.bottom

  //Define the scales (x,y)
  var x = d3.scale.ordinal().rangeRoundBands([0, width], 0.1, 1)
  slide8x = x
  var y = d3.scale.linear().range([height, 0])

  //Define axes drawers
  var xAxis = d3.svg.axis().scale(x).orient("bottom")
  slide8xAxis = xAxis
  var yAxis = d3.svg.axis().scale(y).orient("left")

  //Create the main svg group element
  var svg = d3
    .select("#slide8 .emptyDiv")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
  slide8svg = svg

  //Paste the data as the domain for the scales
  x.domain(
    attendeesStats.map(function (d) {
      return d.d
    }),
  )
  y.domain([
    0,
    d3.max(attendeesStats, function (d) {
      return d.v
    }),
  ])

  //Apply the axis
  svg
    .append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis)
  svg
    .append("g")
    .attr("class", "y axis")
    .call(yAxis)
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text("Registrants")

  //Draw the bars
  svg
    .selectAll(".bar")
    .data(attendeesStats)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", function (d) {
      return x(d.d)
    })
    .attr("width", x.rangeBand())
    .attr("y", function (d) {
      return y(d.v)
    })
    .attr("height", function (d) {
      return height - y(d.v)
    })
}

function changeSlide8Sort() {
  // Sort and copy the array
  var x0 = slide8x
    .domain(
      attendeesStats
        .sort(
          slide8Sorted
            ? function (a, b) {
                return b.v - a.v
              }
            : function (a, b) {
                return d3.ascending(a.d, b.d)
              },
        )
        .map(function (d) {
          return d.d
        }),
    )
    .copy()

  //Define the transitions
  var transition = slide8svg.transition().duration(750),
    delay = function (d, i) {
      return i * 50
    }

  //Move the bars
  transition
    .selectAll(".bar")
    .delay(delay)
    .attr("x", function (d) {
      return x0(d.d)
    })

  //Move the labels
  transition.select(".x.axis").call(slide8xAxis).selectAll("g").delay(delay)
}
