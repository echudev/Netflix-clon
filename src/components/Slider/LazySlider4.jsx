import { lazy, Suspense } from 'react'
import { useNearScreen } from '../../hooks/useNearScreen'
const Slider4 = lazy(() => import('./Slider4'))

const LazySlider4 = () => {
  const { isNearScreen, fromRef } = useNearScreen()

  return (
        <Suspense fallback={<span>Loading...</span>}>
            <div ref={fromRef}>
                {isNearScreen ? <Slider4 /> : null}
            </div>
        </Suspense>
  )
}

export default LazySlider4
