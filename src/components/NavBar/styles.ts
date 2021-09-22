import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  height: ${RFValue(64)}px;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

export const Avatar = styled.Image`
  height: ${RFValue(53)}px;
  width: ${RFValue(53)}px;
  border: 1px solid ${({theme}) => theme.colors.white};
  border-radius: 28px;
  margin: ${RFValue(15)}px; ;
`;
export const InfoColumn = styled.View``;
export const InfoView = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.white};
`;

export const ProfileName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.white};
`;

export const StoreText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.white};
`;
