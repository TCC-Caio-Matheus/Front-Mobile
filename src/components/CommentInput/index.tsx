import React from 'react';

import { ActivityIndicator } from 'react-native';
import {
  CommentContainer,
  Comment,
  SendButton,
  Icon,
  Touchable,
  Input,
} from './styles';

interface CommentInputProps {
  loading?: boolean;
  onChangeText: any;
  value: string;
  handleComment: any;
}
const CommentInput: React.FC<CommentInputProps> = ({
  loading = false,
  value,
  onChangeText,
  handleComment,
}) => {
  return (
    <CommentContainer>
      <Comment>
        <Input
          placeholder="Digite seu comentário..."
          onChangeText={onChangeText}
          value={value}
        />
      </Comment>
      <Touchable onPress={handleComment}>
        <SendButton>
          {!loading ? (
            <Icon name="send" />
          ) : (
            <ActivityIndicator size="small" color="white" />
          )}
        </SendButton>
      </Touchable>
    </CommentContainer>
  );
};

export default CommentInput;
