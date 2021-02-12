// Later these will be adjusted to make room
// for a vertical and horizontal axis.
const BOTTOM_PADDING = 10
const LEFT_PADDING = 10
const RIGHT_PADDING = 10
const TOP_PADDING = 10

// Full size of the svg element.
const HEIGHT = 300
const WIDTH = 400

// Size that can be used for the bars.
const usableHeight = HEIGHT - TOP_PADDING - BOTTOM_PADDING
const usableWidth = WIDTH - LEFT_PADDING - RIGHT_PADDING

// Random data will be selected from this array.
const allData = [
  { name: "apple", colorIndex: 1 },
  { name: "banana", colorIndex: 2 },
  { name: "cherry", colorIndex: 3 },
  { name: "date", colorIndex: 4 },
  { name: "grape", colorIndex: 5 },
  { name: "mango", colorIndex: 6 },
  { name: "peach", colorIndex: 7 },
  { name: "raspberry", colorIndex: 8 },
  { name: "strawberry", colorIndex: 9 },
  { name: "tangerine", colorIndex: 10 },
  { name: "watermelon", colorIndex: 11 },
]

let barPadding, barWidth, xScale, yScale

// This is used to select bar colors based on their colorIndex.
const colorScale = d3.scaleOrdinal(d3.schemePaired) // 12 colors

// This returns a random integer from 1 to max inclusive.
const random = (max) => Math.floor(Math.random() * max + 1)

// This returns an array of objects taken from allData.
// A "score" property with a random value from 1 to 10
// is added to each object.
function getRandomData() {
  const count = random(allData.length)
  const shuffled = allData.sort(() => 0.5 - Math.random())
  const data = shuffled.slice(0, count)
  data.sort((f1, f2) => f1.name.localeCompare(f2.name))
  for (const item of data) {
    item.score = random(10)
  }
  return data
}

// This updates the attributes of an SVG rect element
// that represents a bar.
function updateRect(rect) {
  rect
    // Each fruit will keep the same color as its score changes.
    .attr("fill", (d) => colorScale(d.colorIndex))
    .attr("width", barWidth - barPadding * 2)
    .attr("height", (d) => usableHeight - yScale(d.score))
    .attr("x", barPadding)
    .attr("y", (d) => TOP_PADDING + yScale(d.score))
}

// This updates the bar chart with random data.
function updateData() {
  const data = getRandomData()

  // Calculate padding on sides of bars based on # of bars.
  barPadding = Math.ceil(30 / data.length)

  // Calculate the width of each bar based on # of bars.
  barWidth = usableWidth / data.length

  // Create a scale to map data index values to x coordinates.
  // This is a function that takes a value in the "domain"
  // and returns a value in the "range".
  xScale = d3
    .scaleLinear()
    .domain([0, data.length])
    .range([LEFT_PADDING, LEFT_PADDING + usableWidth])

  // Create a scale to map data score values to y coordinates.
  // The range is flipped to account for
  // the SVG origin being in the upper left corner.
  // Like xScale, this is a function that takes a value in the "domain"
  // and returns a value in the "range".
  // The d3.max function computes the largest data value in a given array
  // where values are computed by the 2nd argument function.
  const max = d3.max(data, (d) => d.score)
  yScale = d3.scaleLinear().domain([0, max]).range([usableHeight, 0])

  // Create a D3 selection object that represents the svg element
  // and set the size of the svg element.
  const svg = d3.select("#chart").attr("width", WIDTH).attr("height", HEIGHT)

  // This is the most critical part to understand!
  // You learned about about selections and the general update pattern
  // in the previous section.
  const groups = svg
    .selectAll(".bar")
    .data(data, (d) => d.name)
    .join((enter) => {
      // Create a new SVG group element for each placeholder
      // to represent a new bar.
      // For now the only thing in each group will be a rect element,
      // but later we will add a text element to display the value.
      const groups = enter.append("g").attr("class", "bar")

      // Create a new SVG rect element for each group.
      groups
        .append("rect")
        .attr("height", 0)
        .attr("y", TOP_PADDING + usableHeight)

      return groups
    })

  // The join method call above returns a selection that combines
  // the update and enter sub-selections into its update selection.
  // This allows operations needed on elements in both
  // to be performed on the new selection.

  // Translate the groups for each bar to their
  // appropriate x coordinate based on its index.
  groups.attr("transform", (_, i) => `translate(${xScale(i)}, 0)`)

  // Update all the rect elements using their newly associated data.
  updateRect(groups.select("rect"))
}

// Render the first version of the chart.
updateData()

// <!DOCTYPE html>
// <html>
// <head>
// <script src="http://d3js.org/d3.v3.min.js"></script>
// <meta charset="utf-8">
// <style>
// body {
// font-family: Helvetica;
// }

// .chart div {
//   font: 10px sans-serif;
//   background-color: steelblue;
//   text-align: right;
//   padding: 3px;
//   margin: 1px;
//   color: white;
// }

// .chart rect {
//   fill: lightseagreen;
// }

// .chart rect:hover {
//   fill: gray;
// }
// </style>
// </head>
// <body>
// <form id="form1">
// <select id="thedropdown">
// <option value ="data14">2014</option>
// <option value ="data15">2015</option>
// </select>
// </form>

// <div class="chart"></div>

// <script>

//different datasets to plot
data14 = [4, 8, 15, 16, 23, 42]
data15 = [7, 9, 22, 6, 14, 35]

var height = 500,
  width = 800,
  barWidth = 100,
  barOffset = 110
barHeight = 10

//set up svg
var canvas = d3
  .select(".chart")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .style("background-color", "beige")

var tooltip = d3
  .select("body")
  .append("div")
  .style("position", "absolute")
  .style("color", "white")
  .style("font-weight", "bold")

function draw(mydata) {
  //bind data to rects
  var sel = canvas.selectAll("rect").data(mydata)

  // add elements
  sel.enter().append("rect")

  //update elements
  sel.attr("width", barWidth).attr("x", function (d, i) {
    return i * barOffset + barWidth
  })

  sel
    .transition()
    .attr("height", function (d) {
      return d * barHeight
    })
    .attr("y", function (d) {
      return height - d * 10
    })
    .duration(1000)

  sel.on("mouseover", function (d) {
    tooltip.transition()
    tooltip
      .html(d)
      .style("left", parseInt(d3.select(this).attr("x")) + 50 + "px")
      .style("top", parseInt(d3.select(this).attr("y")) + 35 + "px")
  })

  //remove old elements
  sel.exit().remove()
}

// d3 for selection of dropdown
d3.select("#thedropdown").on("change", function () {
  var newData = eval(d3.select(this).property("value"))
  draw(newData)
})

//creates initial state on load
draw(data14)

{
  /* 
</script>
</body>
</html>
 */
}
