import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

export const CommentContainer = styled.View`
  width: 100%;
  height: 50px;
  padding: 0px 10px;
  flex-direction: row;
`;

export const Comment = styled.View`
  flex: 1;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 7px;
  padding: 10px;
`;

export const SendButton = styled.View`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin-left: 7px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 7px;
`;

export const Touchable = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})``;

export const Icon = styled(Ionicons)`
  color: white;
  font-size: 21px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 100%;
`;
