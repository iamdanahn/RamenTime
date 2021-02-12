// Using Mike Bostock's Towards Reusable Charts Pattern
function barChart() {
  // All options that should be accessible to caller
  var width = 900
  var height = 200
  var barPadding = 1
  var fillColor = "steelblue"

  function chart(selection) {
    selection.each(function (data) {
      var barSpacing = height / data.length
      var barHeight = barSpacing - barPadding
      var maxValue = d3.max(data)
      var widthScale = width / maxValue

      d3.select(this)
        .append("svg")
        .attr("height", height)
        .attr("width", width)
        .selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("y", function (d, i) {
          return i * barSpacing
        })
        .attr("height", barHeight)
        .attr("x", 0)
        .attr("width", function (d) {
          return d * widthScale
        })
        .style("fill", fillColor)
    })
  }

  chart.width = function (value) {
    if (!arguments.length) return margin
    width = value
    return chart
  }

  chart.height = function (value) {
    if (!arguments.length) return height
    height = value
    return chart
  }

  chart.barPadding = function (value) {
    if (!arguments.length) return barPadding
    barPadding = value
    return chart
  }

  chart.fillColor = function (value) {
    if (!arguments.length) return fillColor
    fillColor = value
    return chart
  }

  return chart
}
var milesRun = [2, 5, 4, 1, 2, 6, 5]
var highTemperatures = [
  77,
  71,
  82,
  87,
  84,
  78,
  80,
  84,
  86,
  72,
  71,
  68,
  75,
  73,
  80,
  85,
  86,
  80,
]

var runningChart = barChart().barPadding(2)
d3.select("#runningHistory").datum(milesRun).call(runningChart)

var weatherChart = barChart().fillColor("coral")
d3.select("#weatherHistory").datum(highTemperatures).call(weatherChart)
