import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  padding: 10px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const Avatar = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 45px;
  height: 45px;
  border-radius: 40px;
  margin-right: 15px;
`;

export const Column = styled.View`
  flex: 1;
  align-items: flex-start;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 7px;
`;

export const Comment = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${RFValue(11)}px;
  color: ${({ theme }) => theme.colors.secondary};
`;
