import React, { useState } from 'react';

import { Container, Option, Touchable, Icon, TitleQuestion } from './styles';
import Images from '../../../assets';

interface SingleQuestionProps {
  options: any[];
  setAnswer: any;
}
const IMAGE = {
  Não: Images.DESLIKE,
  Sim: Images.LIKE,
  Talvez: Images.LIKE_AND_DESLIKE,
};
const SingleQuestion: React.FC<SingleQuestionProps> = ({
  options = [],
  setAnswer,
}) => {
  const [selected, setSelected] = useState(null);
  return (
    <Container>
      {options.map(item => (
        <Touchable
          key={item.id}
          onPress={() => {
            setSelected(item.id);
            setAnswer(item.id);
          }}
        >
          <Option selected={item.id === selected}>
            <Icon source={IMAGE[item.description]} />
            <TitleQuestion>{item.description}</TitleQuestion>
          </Option>
        </Touchable>
      ))}
    </Container>
  );
};

export default SingleQuestion;
