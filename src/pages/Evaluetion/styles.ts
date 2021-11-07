import styled, { css } from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { MaterialIcons } from '@expo/vector-icons';
import { getStatusBarHeight } from '../../utils/iphoneHelper';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.white};
  margin-top: ${getStatusBarHeight()}px;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 20,
  },
})`
  padding: 0px 20px;
  width: 100%;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.secondary};
  align-self: flex-start;
  margin: 10px 0px;
`;

export const TitleTip = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.secondary};
  align-self: flex-start;
  margin: 10px 0px;
`;
