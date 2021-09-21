import React, { useState } from "react";
import { View } from "react-native";

import {
  Container,
  QuestionView,
  Question,
  HighlightQuestion,
  Step,
  StepsView,
} from "./styles";

interface Props {
  numberQuestions: number;
  indexQuestion: number;
}

const Stepper: React.FC<Props> = ({
  numberQuestions,
  indexQuestion,
}: Props) => {
  const renderSteps = () => {
    var steps = [];
    
    for (let i = 0; i < numberQuestions; i++) {
      if (i != indexQuestion - 1) {
        steps.push(<Step key={i} />);
      } else {
        steps.push(<Step key={i} isMark={true} />);
      }
    }
    return steps;
  };

  const teste = renderSteps();
  return (
    <Container>
      <QuestionView>
        <Question>Pergunta </Question>
        <HighlightQuestion>{indexQuestion}</HighlightQuestion>
        <Question>/{numberQuestions}</Question>
      </QuestionView>
      <StepsView>
        {teste.map((item) => {
          return item;
        })}
      </StepsView>
    </Container>
  );
};

export default Stepper;
