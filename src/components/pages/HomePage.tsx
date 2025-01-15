import { DataState } from '../../hooks/DataContext'
import Footer from '../footer/Footer'
import MainComponent from '../main/MainComponent'
import styled from 'styled-components'
//Главная страница (и единственная)
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`
export default function HomePage() {
  return (
    <>
      <DataState>
        <Wrapper className="wrapper">
          <MainComponent />
          <Footer />
        </Wrapper>
      </DataState>
    </>
  )
}
