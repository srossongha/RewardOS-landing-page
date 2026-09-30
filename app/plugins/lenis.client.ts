import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

export default defineNuxtPlugin(() => {
  const lenis = new Lenis({
    autoRaf: true,
    anchors: { offset: -80 },
    lerp: 0.8,
    wheelMultiplier: 1,
    smoothWheel: true,
  })

  return { provide: { lenis } }
})
