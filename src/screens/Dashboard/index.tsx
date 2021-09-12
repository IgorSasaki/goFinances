// External modules
import React from 'react'

// Internal modules
import { HighlightCard } from '../../components/HighlightCard'

// Styles
import * as Styled from './styles'

export const Dashboard: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.UserWrapper>
          <Styled.UserInfo>
            <Styled.Photo
              source={{
                uri: 'https://avatars.githubusercontent.com/u/23747927?v=4'
              }}
            />

            <Styled.User>
              <Styled.UserGreeting>Olá, </Styled.UserGreeting>
              <Styled.UserName>Igor Sasaki</Styled.UserName>
            </Styled.User>
          </Styled.UserInfo>

          <Styled.Icon name="power" />
        </Styled.UserWrapper>
      </Styled.Header>

      <Styled.HighlightCards>
        <HighlightCard
          title="Entrada"
          amount={400}
          lastTransaction="11 de Setembro de 2021"
        />

        <HighlightCard
          title="Entrada"
          amount={400}
          lastTransaction="11 de Setembro de 2021"
        />

        <HighlightCard
          title="Entrada"
          amount={400}
          lastTransaction="11 de Setembro de 2021"
        />
      </Styled.HighlightCards>
    </Styled.Container>
  )
}
