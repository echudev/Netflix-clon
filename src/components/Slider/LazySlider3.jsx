import { lazy, Suspense } from 'react'
import { useInView } from 'react-intersection-observer'
import LoadingSlider from './LoadingSlider'
const Slider3 = lazy(() => import('./Slider3'))

const LazySlider3 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '80px'
  })

  return (
        <Suspense fallback={<LoadingSlider />}>
            <div ref={ref}>
                {inView ? <Slider3 /> : <LoadingSlider />}
            </div>
        </Suspense>
  )
}

export default LazySlider3
