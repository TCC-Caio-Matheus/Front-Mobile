import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.white};
  padding: ${RFValue(20)}px;
`;


export const InfoText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(24)}px;
  color: ${({theme}) => theme.colors.secondary};
  margin-bottom: ${RFValue(20)}px;
`;
