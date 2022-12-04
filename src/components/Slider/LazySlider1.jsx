import { lazy, Suspense } from 'react'
import { useNearScreen } from '../../hooks/useNearScreen'
const Slider1 = lazy(() => import('./Slider1'))

const LazySlider1 = () => {
  const { isNearScreen, fromRef } = useNearScreen()

  return (
    <Suspense fallback={<span>Loading...</span>}>
      <div ref={fromRef}>
        {isNearScreen ? <Slider1 /> : null}
      </div>
    </Suspense>
  )
}

export default LazySlider1
