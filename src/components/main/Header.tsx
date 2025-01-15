import { useContext } from 'react'
import { DataContext } from '../../hooks/DataContext'
import styled from 'styled-components'
//Header главный на странице
const CustomHeader = styled.header`
  position: absolute;
  padding-left: 6%;
  margin-top: 50px;
  max-width: 100px;
  @media (min-width: 1024px) {
    margin-top: 170px;
    border-left: 5px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(180deg, #3877ee -5%, #ef5da8 85%);
  }
`
//H1 заголовок
const CustomH1 = styled.h1`
  font-size: 2.8em;
  font-weight: 700;
  max-width: 400px;
`
export default function Header() {
  const { data } = useContext(DataContext)
  return (
    <CustomHeader>
      <CustomH1>{data.header}</CustomH1>
    </CustomHeader>
  )
}
