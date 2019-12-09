const throttle = (func, limit) => {
  let inThrottle

  return function(...args) {
    const self = this

    if (!inThrottle) {
      func.apply(self, args)

      inThrottle = true

      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

export default throttle
