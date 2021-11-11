import React from 'react';

import {
  Container,
  Avatar,
  Column,
  Name,
  Comment,
  EvaluetionComment,
  Touchable,
} from './styles';

interface CommentCardProps {
  comment: any;
  onPress: any;
  isComment?: boolean;
}
const CommentCard: React.FC<CommentCardProps> = ({
  comment,
  onPress,
  isComment = false,
}) => {
  return (
    <Touchable onPress={onPress} disabled={isComment}>
      <Container>
        <Avatar
          source={{
            uri: `http://localhost:1337${comment?.user?.avatar?.url}`,
          }}
        />
        <Column>
          <Name>{comment?.user?.username}</Name>
          <Comment>{comment?.description}</Comment>

          {!isComment && comment?.evaluations?.length === 1 && (
            <EvaluetionComment>{`${comment?.evaluations.length} resposta`}</EvaluetionComment>
          )}
          {!isComment && comment?.evaluations?.length > 1 && (
            <EvaluetionComment>{`${comment?.evaluations.length} respostas`}</EvaluetionComment>
          )}
        </Column>
      </Container>
    </Touchable>
  );
};

export default CommentCard;
