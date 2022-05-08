import { useState, useEffect } from 'react'

export const useGetWindowWidth = () => {
const [windowWidth, setWindowWidth] = useState(window.innerWidth)

const detectSize = () => {
  setWindowWidth(window.innerWidth)
}
useEffect(() => {
  window.addEventListener('resize', detectSize)

  return () => {
    window.removeEventListener('resize', detectSize)
  }
}, [windowWidth])

return windowWidth
}