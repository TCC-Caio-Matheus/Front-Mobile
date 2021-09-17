import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.white};
  padding: ${RFValue(20)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
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
  width: 100%;
  align-self: flex-end;

  margin-top: ${RFValue(20)}px;
  margin-bottom: ${RFValue(20)}px;
`;

export const RegisterLink = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const AccentLink = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
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
