const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


document.querySelector('.elem').forEach(elem => {
  let img = elem.querySelector('img')
  gsap.timeline()
  .to()
})
