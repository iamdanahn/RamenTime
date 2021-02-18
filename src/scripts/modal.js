document.addEventListener("DOMContentLoaded", (event) => {
  console.log(event)

  const modal = document.getElementsByClassName("modal")[0]
  const closer = document.getElementsByClassName("modal-close")[0]
  // debugger

  closer.addEventListener("click", () => {
    modal.style.display = "none"
  })

  window.addEventListener("click", (event) => {
    // targets modal because entire background is modal
    if (event.target === modal) {
      modal.style.display = "none"
    }
  })
})
