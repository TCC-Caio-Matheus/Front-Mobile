import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

interface StepProps {
  isMark?: boolean;
}

export const Container = styled.View`
  width: 100%;
`;

export const QuestionView = styled.View`
  flex-direction: row;
  margin:${RFValue(10)}px 0;
`;

export const Question = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.secondary}; ;
`;

export const HighlightQuestion = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.primary}; ;
`;

export const Step = styled.View<StepProps>`
  width: ${RFValue(20)}px;
  background-color: ${({ theme, isMark }) =>
    isMark ? theme.colors.primary : theme.colors.secondary};
  height: ${RFValue(5)}px;
`;

export const StepsView = styled.View`
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
`;
