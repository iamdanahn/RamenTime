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
