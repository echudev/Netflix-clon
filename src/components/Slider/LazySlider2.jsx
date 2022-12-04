import { lazy, Suspense } from 'react'
import { useNearScreen } from '../../hooks/useNearScreen'
const Slider2 = lazy(() => import('./Slider2'))

const LazySlider2 = () => {
  const { isNearScreen, fromRef } = useNearScreen()

  return (
        <Suspense fallback={<span>Loading...</span>}>
            <div ref={fromRef}>
                {isNearScreen ? <Slider2 /> : null}
            </div>
        </Suspense>
  )
}

export default LazySlider2
