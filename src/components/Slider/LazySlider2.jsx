import { lazy, Suspense } from 'react'
import { useInView } from 'react-intersection-observer'
import LoadingSlider from './LoadingSlider'
const Slider2 = lazy(() => import('./Slider2'))

const LazySlider2 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '80px'
  })

  return (
        <Suspense fallback={<LoadingSlider />}>
            <div ref={ref}>
                {inView ? <Slider2 /> : <LoadingSlider />}
            </div>
        </Suspense>
  )
}

export default LazySlider2
