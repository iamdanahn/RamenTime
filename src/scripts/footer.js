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
            //prints ramen fact and iterates up by 1
            document.getElementById("ramen-fact").innerHTML = data[i].facts
            ramenFact(++i)
          }, factSpeed)
        } else if (data.length === i) {
          // creates a loop to start back at index 0
          ramenFact(0)
        }
      }
      ramenFact(0)
    })
})
