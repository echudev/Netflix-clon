import { useState, useEffect } from 'react'

export const useGetScrollY = () => {
    const [scrollY, setScrollY] = useState(window.scrollY)

    const handleScroll = () => {
        setScrollY(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [scrollY])

    return scrollY
}


