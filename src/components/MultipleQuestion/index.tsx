import React, { useState, useCallback } from 'react';

import find from 'lodash/find';
import {
  Container,
  Option,
  Touchable,
  Icon,
  TitleQuestion,
  Circle,
} from './styles';

interface MultipleQuestionProps {
  options: any[];
  setAnswer: any;
  answer: any;
}
const MultipleQuestion: React.FC<MultipleQuestionProps> = ({
  options = [],
  setAnswer,
  answer,
}) => {
  const addOption = useCallback(
    item => {
      setAnswer([item]);
    },
    [answer],
  );

  const removeOption = useCallback(
    item => {
      setAnswer(prevState => prevState.filter(i => i !== item));
    },
    [answer],
  );
  return (
    <Container>
      {options.map(item => (
        <Touchable
          key={item.id}
          onPress={() => {
            find(answer, i => i === item.id)
              ? removeOption(item.id)
              : addOption(item.id);
          }}
        >
          <Option>
            <TitleQuestion>{item.description}</TitleQuestion>
            <Circle check={find(answer, i => i === item.id)}>
              <Icon name="check" check={find(answer, i => i === item.id)} />
            </Circle>
          </Option>
        </Touchable>
      ))}
    </Container>
  );
};

export default MultipleQuestion;
