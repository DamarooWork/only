import styled from 'styled-components'
//Компонент для исторического события
const CustomCard = styled.section`
  margin-right: 80px;
  @media (max-width: 760px) {
    margin-right: 20px;
  }
`
//Дата события
const Title = styled.h3`
  font-family: 'Bebas Neue', serif;
  font-weight: 400;
  font-style: normal;
  font-size: 25px;
  color: #3877ee;
  margin-bottom: 20px;
  @media (max-width: 760px) {
    font-size: 2em;
  }
`
//Описание события
const Description = styled.p`
  font-size: 20px;
  font-weight: 400;
  @media (max-width: 760px) {
    font-size: 1.5em;
  }
`
export default function DateCard(card: IEvent) {
  return (
    <CustomCard className="card">
      <Title className="card-title">{card.date}</Title>
      <Description className="card-description">{card.description}</Description>
    </CustomCard>
  )
}
