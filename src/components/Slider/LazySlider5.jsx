import { lazy, Suspense } from 'react'
import { useInView } from 'react-intersection-observer'
import LoadingSlider from './LoadingSlider'
const Slider5 = lazy(() => import('./Slider5'))

const LazySlider5 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '80px'
  })

  return (
        <Suspense fallback={<LoadingSlider />}>
            <div ref={ref}>
                {inView ? <Slider5 /> : <LoadingSlider />}
            </div>
        </Suspense>
  )
}

export default LazySlider5
