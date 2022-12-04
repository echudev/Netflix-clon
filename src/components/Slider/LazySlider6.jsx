import { lazy, Suspense } from 'react'
import { useNearScreen } from '../../hooks/useNearScreen'
const Slider6 = lazy(() => import('./Slider6'))

const LazySlider6 = () => {
  const { isNearScreen, fromRef } = useNearScreen()

  return (
        <Suspense fallback={<span>Loading...</span>}>
            <div ref={fromRef}>
                {isNearScreen ? <Slider6 /> : null}
            </div>
        </Suspense>
  )
}

export default LazySlider6
