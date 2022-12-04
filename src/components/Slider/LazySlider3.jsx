import { lazy, Suspense } from 'react'
import { useNearScreen } from '../../hooks/useNearScreen'
const Slider3 = lazy(() => import('./Slider3'))

const LazySlider3 = () => {
  const { isNearScreen, fromRef } = useNearScreen()

  return (
        <Suspense fallback={<span>Loading...</span>}>
            <div ref={fromRef}>
                {isNearScreen ? <Slider3 /> : null}
            </div>
        </Suspense>
  )
}

export default LazySlider3
