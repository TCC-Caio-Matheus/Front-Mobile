import React from "react";
import { AntDesign } from "@expo/vector-icons";

import {
  Container,
  QuizTitle,
  QuizType,
  Questions,
  TitleInfo,
  Icon,
} from "./styles";

interface Props {
    type:string;
    questionsCount:number
}


const QuizCard: React.FC<Props> = ({type,questionsCount}) => {
  return (
    <Container>
      <TitleInfo>
        <QuizTitle>Questionário </QuizTitle>
        <QuizType>{type}</QuizType>
      </TitleInfo>
      <Questions>{questionsCount} pergunntas</Questions>
      <Icon name="arrowright" />
    </Container>
  );
};

export default QuizCard;
