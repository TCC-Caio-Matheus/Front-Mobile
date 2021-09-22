import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { AntDesign } from "@expo/vector-icons";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(57)}px;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  padding: ${RFValue(5)}px ${RFValue(10)}px;
  justify-content: center;
`;

export const TitleInfo = styled.View`
  flex-direction: row;
`;

export const QuizTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)};
  color: ${({ theme }) => theme.colors.secondary};
`;

export const QuizType = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(18)};
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Questions = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)};
  color: ${({ theme }) => theme.colors.secondary};
  opacity: 0.5px;
`;

export const Icon = styled(AntDesign)`
  right: 10px;
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.secondary};
  position: absolute;
`;
