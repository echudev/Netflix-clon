import { lazy, Suspense } from 'react'
import { useInView } from 'react-intersection-observer'
import LoadingSlider from './LoadingSlider'
const Slider1 = lazy(() => import('./Slider1'))

const LazySlider1 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true
  })

  return (
    <Suspense fallback={<LoadingSlider />}>
      <div ref={ref}>
        {inView ? <Slider1 /> : <LoadingSlider />}
      </div>
    </Suspense>
  )
}

export default LazySlider1
