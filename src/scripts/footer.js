const factSpeed = 7 * 1000

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
      function move() {
        let i = 0;
        if ( i === 0 ) {
          i = 1;
          const bar = document.getElementById("time-bar")
          let width = 1;
          let id = setInterval(frame, 70);

          function frame() {
            if (width >= 100) {
              clearInterval(id);
              i = 0;
            } else {
              width++
              bar.style.width = `${width}%`
            }
          }
        }
      }
      // rotating ramen facts
      function ramenFact(i) {
        if (data.length > i) {
          setTimeout(function () {
            //prints ramen fact and iterates up by 1
            document.getElementById("ramen-fact").innerHTML = data[i].facts
            ramenFact(++i)
          }, factSpeed)
          // move()
        } else if (data.length === i) {
          // creates a loop to start back at index 0
          ramenFact(0)
          // move()
        }
      }

      ramenFact(0)
    })
})
