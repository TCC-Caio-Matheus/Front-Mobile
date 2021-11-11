import styled, { css } from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight, getBottomSpace } from '../../utils/iphoneHelper';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.white};
  margin-top: ${getStatusBarHeight()}px;
  margin-bottom: ${getBottomSpace()}px;
`;

export const SuggestContainer = styled.View`
  margin: 20px 0px;
  padding: 10px 15px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
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

export const RateContainer = styled.View`
  margin: 10px 30px;
  width: 60%;
  align-self: center;
`;
