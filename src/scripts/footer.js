const factSpeed = 5 * 1000

document.addEventListener("DOMContentLoaded", (event) => {
  const data = d3
    .csv(
      "https://raw.githubusercontent.com/iamdanahn/RamenTime/ramenrow/assets/ramen_facts.csv",
      (d) => {
        return {
          facts: d["Ramen Facts"],
        }
      },
    )
    .then((data) => {
      function ramenFact(i) {
        if (data.length > i) {
          setTimeout(function () {
            document.getElementById("ramen-fact").innerHTML = data[i].facts
            ramenFact(++i)
          }, factSpeed)
        } else if (data.length === i) {
          ramenFact(0)
        }
      }
      ramenFact(0)
    })
})
