import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
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
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.secondary};
  align-self: flex-start;
  margin: 10px 0px;
`;

export const InputView = styled.View`
  width: 95%;
  align-items: center;
`;

export const ForgotPasswordButton = styled.TouchableOpacity`
  align-self: flex-end;
  margin-top: ${RFValue(20)}px;
  margin-bottom: ${RFValue(20)}px;
`;

export const ForgotPassword = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px; ;
`;

export const ButtonsView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const RegisterLink = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const AccentLink = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const RegisteLinkView = styled.TouchableOpacity`
  width: 100%;
  margin-top: ${RFPercentage(3)}px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ImageView = styled.View`
  width: 100%;
  height: ${RFPercentage(30)}px;
`;

export const Icon = styled(Ionicons)`
  color: black;
  font-size: 28px;
  position: absolute;
  left: ${RFValue(10)}px;
`;
