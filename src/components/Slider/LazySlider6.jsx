import { lazy, Suspense } from 'react'
import { useInView } from 'react-intersection-observer'
import LoadingSlider from './LoadingSlider'
const Slider6 = lazy(() => import('./Slider6'))

const LazySlider6 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '80px'
  })
  console.log('slider 6 inview ', inView)
  return (
        <Suspense fallback={<LoadingSlider />}>
            <div ref={ref}>
                {inView ? <Slider6 /> : <LoadingSlider />}
            </div>
        </Suspense>
  )
}

export default LazySlider6
