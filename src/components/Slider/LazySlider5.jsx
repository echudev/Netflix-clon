import { lazy, Suspense } from 'react'
import { useNearScreen } from '../../hooks/useNearScreen'
const Slider5 = lazy(() => import('./Slider5'))

const LazySlider5 = () => {
  const { isNearScreen, fromRef } = useNearScreen()

  return (
        <Suspense fallback={<span>Loading...</span>}>
            <div ref={fromRef}>
                {isNearScreen ? <Slider5 /> : null}
            </div>
        </Suspense>
  )
}

export default LazySlider5
