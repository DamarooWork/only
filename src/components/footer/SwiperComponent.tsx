import DateCard from './DateCard'
import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../hooks/DataContext'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import styled from 'styled-components'

import '../../../node_modules/swiper/swiper-bundle.css'
import '../../../node_modules/swiper/modules/pagination.css'

import iconArrowLeft from '../../assets/icons/iconArrowLeft.png'
import iconArrowRight from '../../assets/icons/iconArrowRight.png'
import sortCategories from '../../hooks/sortCategories'
//Компонент для swiper'a
const CustomSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  .swiper-pagination {
    display: none;
  }
  @media (max-width: 760px) {
    margin-top: 5vh;
    .swiper {
      border-top: 1px solid #c7cdd9;
      padding: 20px 0 20vh;
    }
    .swiper-pagination {
      display: block;
      bottom: 0;
    }
  }
`
const ActiveCategory = styled.h3`
  margin-left: 6%;
  font-size: 2em;
`
export default function SwiperComponent() {
  const { data, activeCategoryId } = useContext(DataContext)
  const [events, setEvents] = useState<IEvent[]>([])
  const [change, setChange] = useState<number>(0)
  const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth)
  useEffect(() => {
    if (data.categories.length !== 0) {
      //Сортируем собития по доте от самого раннего до самого позднего
      const sortedArray: IEvent[] = sortCategories(
        data.categories[activeCategoryId].events
      )
      setEvents(sortedArray)
    }
    setChange(Math.random())
  }, [data, activeCategoryId])
  useEffect(() => {
    const resizeHandler = () => setInnerWidth(window.innerWidth)
    window.addEventListener('resize', resizeHandler)
    return () => window.removeEventListener('resize', resizeHandler)
  }, [])
  return (
    <section className="fade" key={change}>
      {innerWidth < 760 && data.categories.length ? (
        <ActiveCategory>
          {data.categories[activeCategoryId].type}
        </ActiveCategory>
      ) : null}

      <CustomSection>
        {innerWidth > 760 ? (
          <img
            src={iconArrowLeft}
            className="icon-arrow-long-left review-swiper-button-prev"
          />
        ) : null}
        <Swiper
          slidesPerView={window.innerWidth > 760 ? 3 : 2}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: '.review-swiper-button-next',
            prevEl: '.review-swiper-button-prev',
          }}
          grabCursor={true}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {events.length ? (
            events.map((e) => {
              return (
                <SwiperSlide key={e.id}>
                  <DateCard {...e} />
                </SwiperSlide>
              )
            })
          ) : (
            <div>
              <span>Нет событий</span>
            </div>
          )}
        </Swiper>
        {innerWidth > 760 ? (
          <img
            src={iconArrowRight}
            className="icon-arrow-long-right review-swiper-button-next"
          />
        ) : null}
      </CustomSection>
    </section>
  )
}
