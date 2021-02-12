document.addEventListener("DOMContentLoaded", () => {
  const margin = { top: 50, bottom: 150, left: 10, right: 10 }
  const width = 400
  const height = 650

  const svg = d3
    .select(".d3-exercise")
    .append("svg")
    .attr("viewBox", [0, 0, width, height])
    .attr("preserveAspectRatio", "xMidYMid meet")
    .attr("height", height - margin.top - margin.bottom) // chart height
    .attr("width", width - margin.left - margin.right) // chart width

  const x = d3
    .scaleBand()
    .range([0, width - margin.right])
    .padding(0.1)
  const xAxis = svg
    .append("g")
    .attr("transform", `translate(0, ${height - margin.bottom})`)

  const y = d3.scaleLinear().range([height - margin.bottom, margin.top])
  const yAxis = svg
    .append("g")
    .attr("class", "yAxis exercise")
    .attr("transform", `translate(${width - margin.right}, 0)`)

  svg
    .append("text")
    .attr("class", "label")
    .attr("x", height / 2.5)
    .attr("y", -width - margin.right * 5)
    .attr("transform", "rotate(90)")
    .attr("text-anchor", "middle")
    .text("Calories")
    .attr("font-size", "25px")

  // use update as a function to use closures below
  function update(time) {
    d3.csv("../../assets/exercise.csv", function (data) {
      debugger
      x.domain(data.map((d) => d.Exercise))
      xAxis
        .transition()
        .duration(1000)
        .call(d3.axisBottom(x))
        .attr("class", "xAxis exercise")
        .selectAll("text")
        .attr("transform", "rotate(-25)")

      y.domain([
        0,
        d3.max(data, function (d) {
          debugger
          return +d[`${time}`]
        }),
      ]).nice()
      yAxis.transition().duration(1000).call(d3.axisRight(y))

      const tip = d3
        .select("body")
        .append("div")
        .style("opacity", 0)
        .attr("class", "d3-tip exercise")

      // when
      const u = svg.selectAll("rect").data(data)
      const e = d3.event

      u.enter()
        .append("rect")
        .attr("class", "bar exercise")
        .merge(u)
        .attr("x", (d) => x(d.Exercise))
        .attr("y", (d) => y(d[`${time}`]))
        .attr("width", x.bandwidth())
        .attr("height", (d) => y(0) - y(d[`${time}`]))
        .on("mouseover", (d, i) => {
          tip.transition().duration(300).style("opacity", 0.8)
          tip
            .html(
              `Exercise: ${d.Exercise} <br/>
              Calories: ${+d[`${time}`]} <br/>`,
            )
            .style("left", `${d3.event.clientX - 50}px`)
            .style("top", `${d3.event.clientY}px`)
        })
        .on("mousemove", (d) => {
          tip
            .style("left", `${d3.event.clientX - 100}px`)
            .style("top", `${d3.event.clientY - 50}px`)
        })
        .on("mouseout", (d) => {
          tip.transition().duration(100).style("opacity", 0)
        })

      // svg.selectAll("rect").transition().duration(1000)

      // svg.selectAll("rect")
      //   .transition()
      //   .duration(800)
      //   .attr("y", function (d) {
      //     return y([`${time}`])
      //   })
      //   .attr("height", function (d) {
      //     return y(0)-y([`${time}`])
      //   })

      // .delay(function (d, i) {
      //   console.log(i)
      //   return i * 100
      // })

      u.exit().remove()
    })
  }

  d3.selectAll(".btn-exercise").on("click", function () {
    debugger
    update(this.value)
  })

  update("Calories")
})

// const bars = svg
//   .append("g")

//   .selectAll("rect")
//   .data(data)
//   .join("rect")
//   .attr("class", "bar exercise")
//   .attr("x", (d) => x(d.exercise)) // spreads bars over x axis
//   .attr("y", (d) => y(d.calories))
//   .attr("height", (d) => y(0) - y(d.calories))
//   .attr("width", x.bandwidth())
//   .on("mouseover", tip.show)
//   .on("mouseout", tip.hide)

// // call area to render features
// svg.call(tip)
// svg.append("g").call(xAxis)
// svg.append("g").call(yAxis)
// return svg.node()
//   })
// })
