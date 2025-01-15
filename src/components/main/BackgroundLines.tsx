import styled from 'styled-components'
import BackgroundCircle from './BackgroundCircle'

const Lines = styled.div``
// Главная вертикальная линия
const VerticalLine = styled.div`
  position: absolute;
  content: '';
  width: 1px;
  height: 100%;
  top: 0;
  left: 50%;
  background: rgba(66, 86, 122, 0.3);
  z-index: -1000;
  @media (max-width: 760px) {
    display: none;
  }
`
// Главная горизонтальная линия
const HorizontalLine = styled.div`
  position: absolute;
  content: '';
  width: 100%;
  height: 1px;
  top: 45%;
  left: 0;
  background: rgba(66, 86, 122, 0.3);
  z-index: -1000;
  @media (max-width: 760px) {
    display: none;
    width: 88%;
    margin-left: 6%;
  }
`

export default function BackgroundLines() {
  return (
    <Lines>
      <VerticalLine></VerticalLine>
      <HorizontalLine></HorizontalLine>
      <BackgroundCircle />
    </Lines>
  )
}
