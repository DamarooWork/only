import { useContext, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import sortCategories from '../../hooks/sortCategories'
import { DataContext } from '../../hooks/DataContext'
import gsap from 'gsap'

//Даты
const CustomSection = styled.section`
  margin: 45vh auto 150px;
  transform: translateY(-45%);
  display: flex;
  font-size: 10em;
  font-weight: 700;
  letter-spacing: -0.02em;
  gap: 5vw;
  z-index: 1;
  @media (max-width: 760px) {
    margin: 35vh auto 0;
    font-size: 7em;
  }
`
//Дата самого раннего события
const DateStart = styled.h2`
  color: #5d5fef;
  z-index: 2;
`
//Дата самого позднего события
const DateEnd = styled.h2`
  color: #ef5da8;
  z-index: 2;
`
export default function DatesRange() {
  const { data, activeCategoryId } = useContext(DataContext)
  const [start, setStart] = useState<number>()
  const [end, setEnd] = useState<number>()
  const startRef = useRef<HTMLHeadingElement>(null)
  const endRef = useRef<HTMLHeadingElement>(null)
  useEffect(() => {
    if (data.categories.length !== 0) {
      //Сортируем собития по доте от самого раннего до самого позднего,
      //чтобы определить даты первого и последнего событий
      const sortedArray: IEvent[] = sortCategories(
        data.categories[activeCategoryId].events
      )
      //Заносим дату первого события
      setStart(sortedArray[0].date)
      //Заносим дату последнего события
      setEnd(sortedArray[sortedArray.length - 1].date)
      //Анимация для дат
      gsap.to(startRef.current, {
        textContent: sortedArray[0].date,
        duration: 3,
        ease: 'power3',
        snap: { textContent: 1 },
        stagger: 1,
      })
      gsap.to(endRef.current, {
        textContent: sortedArray[sortedArray.length - 1].date,
        duration: 3,
        ease: 'power3',
        snap: { textContent: 1 },
        stagger: 1,
      })
    }
  }, [data, activeCategoryId])

  return (
    <CustomSection>
      <DateStart ref={startRef}>{start}</DateStart>
      <DateEnd ref={endRef}>{end}</DateEnd>
    </CustomSection>
  )
}
