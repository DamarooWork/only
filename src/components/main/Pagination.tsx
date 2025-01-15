import styled from 'styled-components'

import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../hooks/DataContext'

import iconArrowLeft from '../../assets/icons/iconPagiArrowLeft.png'
import iconArrowRight from '../../assets/icons/iconPagiArrowRight.png'
//Компонент перелистывация категорий
const CustomSection = styled.section`
  position: absolute;
  top: 65vh;
  left: 6%;
  max-width: 1280px;
  width: 88%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 1000;
  @media (max-width: 760px) {
    top: 88vh;
    font-size: 12px;
    gap: 10px;
  }
`
//Стрелки для перелистывания
const CustomArrow = styled.img`
  width: 14px;
  border-radius: 9999px;
  border: 1px solid rgba(66, 86, 122);
  -webkit-background-clip: padding-box; /* for Safari */
  background-clip: padding-box;
  padding: 18px;
  opacity: 0.8;
  cursor: pointer;
  @media (max-width: 760px) {
    width: 8px;
    padding: 8px;
  }
  &:hover:not(.disabled-arrow) {
    opacity: 1;
  }
`
const CustomNav = styled.nav`
  display: flex;
  gap: 20px;
  @media (max-width: 760px) {
    gap: 10px;
  }
`

export default function Pagination() {
  const { data, activeCategoryId, changeActiveCategoryId } =
    useContext(DataContext)
  const [page, SetPage] = useState(0)
  function handleClickPagination(e: string) {
    if (e === 'prev' && page !== 1) {
      changeActiveCategoryId(page - 2)
      SetPage((prev) => prev - 1)
    }
    if (e === 'next' && page !== data.categories.length) {
      changeActiveCategoryId(page)
      SetPage((prev) => prev + 1)
    }
  }
  useEffect(() => {
    SetPage(activeCategoryId + 1)
  }, [activeCategoryId])
  return (
    <CustomSection className="pagination">
      {data.categories.length ? (
        <p>
          0{page}/0{data.categories.length}
        </p>
      ) : (
        ''
      )}
      <CustomNav>
        <CustomArrow
          onClick={() => handleClickPagination('prev')}
          src={iconArrowLeft}
          className={`icon-arrow-left ${page === 1 && 'disabled-arrow'}`}
        />
        <CustomArrow
          onClick={() => handleClickPagination('next')}
          src={iconArrowRight}
          className={`icon-arrow-left ${
            page === data.categories.length && 'disabled-arrow'
          }`}
        />
      </CustomNav>
    </CustomSection>
  )
}
