import { lazy, Suspense } from 'react'
import { useInView } from 'react-intersection-observer'
import LoadingSlider from './LoadingSlider'
const Slider4 = lazy(() => import('./Slider4'))

const LazySlider4 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '80px'
  })

  return (
        <Suspense fallback={<LoadingSlider />}>
            <div ref={ref}>
                {inView ? <Slider4 /> : <LoadingSlider />}
            </div>
        </Suspense>
  )
}

export default LazySlider4
