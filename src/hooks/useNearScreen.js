import { useEffect, useState, useRef } from 'react'

export const useNearScreen = () => {
  const [isNearScreen, setShow] = useState(false)
  const fromRef = useRef()

  useEffect(() => {
    // eclaro el callback que le voy a pasar al observer como parámetro
    const onChange = (entries, observer) => {
    // entries es un array
      const el = entries[0]
      if (el.isIntersecting) {
        // hago visible el elemento observado
        setShow(true)
        // desconecto el observer
        observer.disconnect()
      }
    }
    // creo un observador y recibe dos parámetros:
    // 1 - onChange (un callback, le pones el nombre que quieras)
    // 2 - Objeto de configuración (con rootMargin etcetc)
    const observer = new IntersectionObserver(onChange, {
      // root: document.body,
      rootMargin: '1px',
      threshold: 0.3
    })
    // le paso el elemento del DOM que voy a observar
    observer.observe(fromRef.current)
    // desconecto el observer cuando se desmonte el componente
    return () => observer.disconnect()
  }, [])
  return { isNearScreen, fromRef }
}
