import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

interface ButtonProps {
  outline?: boolean;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  height: ${RFPercentage(7)}px;
  background-color: ${(props) =>
    props.outline ? props.theme.colors.white : props.theme.colors.secondary};
  border: ${(props) =>
    props.outline ? "2px solid " + props.theme.colors.secondary : "none"};
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text<ButtonProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${(props) =>
    props.outline ?  props.theme.colors.secondary : props.theme.colors.white};
  font-size: ${RFValue(18)}px;
`;
