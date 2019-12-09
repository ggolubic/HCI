import { useEffect, useState } from "react"
import throttle from "../utils/throttle"

const events = new Set()
const onResize = () => events.forEach(f => f())

const useWindowSize = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const handle = throttle(() => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }, 300)

  useEffect(() => {
    if (events.size === 0) {
      window.addEventListener("resize", onResize, true)
    }

    events.add(handle)

    return () => {
      events.delete(handle)

      if (events.size === 0) {
        window.removeEventListener("resize", onResize, true)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return size
}

export default useWindowSize
