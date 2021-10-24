import React from 'react';

import {
  Container,
  Touchable,
  ContainerIcon,
  TitleHeader,
  SubTitleHeader,
  ContainerCard,
  ContainerArrow,
  ArrowIcon,
} from './styles';

interface CardDropProps {
  icon: any;
  title: string;
  onPress: any;
  subTitle?: string;
  disabled?: boolean;
}
const CardSelect: React.FC<CardDropProps> = ({
  icon,
  title,
  subTitle,
  onPress,
  disabled = false,
}) => {
  return (
    <Container>
      <Touchable disabled={disabled} onPress={onPress}>
        <ContainerIcon>{icon}</ContainerIcon>

        <ContainerCard>
          <TitleHeader>{title}</TitleHeader>
          <SubTitleHeader>{subTitle}</SubTitleHeader>
        </ContainerCard>

        <ContainerArrow>
          <ArrowIcon />
        </ContainerArrow>
      </Touchable>
    </Container>
  );
};

export default CardSelect;
