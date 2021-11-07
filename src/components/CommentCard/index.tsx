import React from 'react';

import { Container, Avatar, Column, Name, Comment } from './styles';

interface CommentCardProps {
  comment: any;
}
const CommentCard: React.FC<CommentCardProps> = ({ comment }) => {
  return (
    <Container>
      <Avatar
        source={{
          uri: `http://localhost:1337${comment?.user?.avatar?.url}`,
        }}
      />
      <Column>
        <Name>{comment?.user?.username}</Name>
        <Comment>{comment?.description}</Comment>
      </Column>
    </Container>
  );
};

export default CommentCard;
