import React, { useCallback } from 'react';

import find from 'lodash/find';
import { Container, Option, Touchable, Icon, TitleQuestion } from './styles';
import Images from '../../../assets';

interface SingleQuestionProps {
  options: any[];
  setAnswer: any;
  answer: any;
}
const IMAGE = {
  Não: Images.DESLIKE,
  Sim: Images.LIKE,
  Talvez: Images.LIKE_AND_DESLIKE,
};
const SingleQuestion: React.FC<SingleQuestionProps> = ({
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
          <Option selected={find(answer, i => i === item.id)}>
            <Icon source={IMAGE[item.description]} />
            <TitleQuestion>{item.description}</TitleQuestion>
          </Option>
        </Touchable>
      ))}
    </Container>
  );
};

export default SingleQuestion;
