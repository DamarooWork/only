import { useContext, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { DataContext } from '../../hooks/DataContext'
// Основной круг
const Circle = styled.div`
  display: block;
  position: absolute;
  width: 60vh;
  height: 60vh;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 9999px;
  border: 1px solid rgba(66, 86, 122, 0.3);
  z-index: 100;
  @media (max-width: 1024px) {
    display: none;
  }
`
// Стили для точек на круге
const IconDot = styled.div<{
  $activeId: number
  $iconNumber: number
  $count: number
}>`
  border-radius: 100%;
  width: 6px;
  height: 6px;
  background-color: rgba(66, 86, 122, 1);
  border: 1px solid rgba(66, 86, 122, 1);
  font-weight: 700;
  cursor: pointer;
  z-index: 5000;
  position: absolute;
  top: 50%;
  left: 50%;

  /* Главная анимация для элементов, 
  адаптивная под разные количества элементов на круге,
   а также под активный элемент */
  transform-origin: 0 0;
  transition-duration: 1s;
  &:nth-child(2) {
    transform: translate(-50%, -50%)
      rotate(
        calc(
          360deg / ${(props) => props.$count} *
            ${(props) => props.$iconNumber - props.$activeId} + 240deg
        )
      )
      translate(30vh)
      rotate(
        calc(
          -1 * (360deg / ${(props) => props.$count} *
                ${(props) => props.$iconNumber - props.$activeId} + 240deg)
        )
      );
  }

  &:nth-child(3) {
    transform: translate(-50%, -50%)
      rotate(
        calc(
          360deg / ${(props) => props.$count} *
            ${(props) => props.$iconNumber - props.$activeId} + 240deg
        )
      )
      translate(30vh)
      rotate(
        calc(
          -1 * (360deg / ${(props) => props.$count} *
                ${(props) => props.$iconNumber - props.$activeId} + 240deg)
        )
      );
  }
  &:nth-child(4) {
    transform: translate(-50%, -50%)
      rotate(
        calc(
          360deg / ${(props) => props.$count} *
            ${(props) => props.$iconNumber - props.$activeId} + 240deg
        )
      )
      translate(30vh)
      rotate(
        calc(
          -1 * (360deg / ${(props) => props.$count} *
                ${(props) => props.$iconNumber - props.$activeId} + 240deg)
        )
      );
  }
  &:nth-child(5) {
    transform: translate(-50%, -50%)
      rotate(
        calc(
          360deg / ${(props) => props.$count} *
            ${(props) => props.$iconNumber - props.$activeId} + 240deg
        )
      )
      translate(30vh)
      rotate(
        calc(
          -1 * (360deg / ${(props) => props.$count} *
                ${(props) => props.$iconNumber - props.$activeId} + 240deg)
        )
      );
  }
  &:nth-child(6) {
    transform: translate(-50%, -50%)
      rotate(
        calc(
          360deg / ${(props) => props.$count} *
            ${(props) => props.$iconNumber - props.$activeId} + 240deg
        )
      )
      translate(30vh)
      rotate(
        calc(
          -1 * (360deg / ${(props) => props.$count} *
                ${(props) => props.$iconNumber - props.$activeId} + 240deg)
        )
      );
  }
  &:nth-child(1) {
    transform: translate(-50%, -50%)
      rotate(
        calc(
          360deg / ${(props) => props.$count} *
            ${(props) => props.$iconNumber - props.$activeId} + 240deg
        )
      )
      translate(30vh)
      rotate(
        calc(
          -1 * (360deg / ${(props) => props.$count} *
                ${(props) => props.$iconNumber - props.$activeId} + 240deg)
        )
      );
  }
  @keyframes openDot {
    from {
      width: 6px;
      height: 6px;
      background-color: rgba(66, 86, 122, 1);
    }
    to {
      width: 56px;
      height: 56px;
      background-color: white;
    }
  }
  // Текст точки
  .categoryText {
    position: absolute;
    padding-top: 15px;
    padding-left: 75px;
  }
  // Номер круга
  .id {
    display: none;
    position: absolute;
    top: 48%;
    transform: translate(-50%, -50%);
    left: 50%;

    @keyframes idDisplay {
      0% {
        display: none;
        opacity: 0;
      }
      80% {
        opacity: 0.1;
      }
      100% {
        display: block;
        opacity: 1;
      }
    }
  }
  .active-id {
    display: block;
  }
  &:hover {
    .not-active-id {
      animation: idDisplay 1s 0ms ease-in-out;
      display: block;
    }
  }
  &.active-icon {
    width: 56px;
    height: 56px;
    background-color: white;
  }
  &:hover:not(.active-icon) {
    animation: openDot 1s 0ms ease-in-out;
    width: 56px;
    height: 56px;
    background-color: white;
  }
`

export default function BackgroundCircle() {
  const { data, activeCategoryId, changeActiveCategoryId } =
    useContext(DataContext)

  return (
    <Circle className="circle-container">
      {data.categories.map((category, i) => {
        return (
          <IconDot
            $count={data.categories.length}
            $activeId={activeCategoryId}
            $iconNumber={i + 1}
            onClick={() => changeActiveCategoryId(i)}
            key={category.type}
            className={`icon ${i === activeCategoryId ? 'active-icon' : ''}`}
          >
            <span
              className={`id ${
                i === activeCategoryId ? 'active-id' : 'not-active-id'
              }`}
            >
              {i + 1}
            </span>
            <span className="categoryText">
              {i === activeCategoryId ? category.type : ''}
            </span>
          </IconDot>
        )
      })}
    </Circle>
  )
}
