// External modules
import React from 'react'

// Styles
import * as Styled from './styles'

interface HighlightCardProps {
  title: string
  amount: number
  lastTransaction: string
}

export const HighlightCard: React.FC<HighlightCardProps> = ({
  title,
  amount,
  lastTransaction
}) => {
  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Title>{title}</Styled.Title>

        <Styled.Icon name="arrow-up-circle" />
      </Styled.Header>

      <Styled.Footer>
        <Styled.Amount>
          {String(
            amount.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              style: 'currency',
              currency: 'BRL'
            })
          )}
        </Styled.Amount>
        <Styled.LastTransaction>{lastTransaction}</Styled.LastTransaction>
      </Styled.Footer>
    </Styled.Container>
  )
}
