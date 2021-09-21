import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const MainButton = styled.TouchableOpacity`
  height: ${RFValue(107)}px;
  width: ${RFValue(107)}px;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.secondary};
`;
