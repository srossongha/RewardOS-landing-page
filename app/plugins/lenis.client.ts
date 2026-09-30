import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

export default defineNuxtPlugin(() => {
  const lenis = new Lenis({
    autoRaf: true,
    anchors: { offset: -80 },
  })

  return { provide: { lenis } }
})
