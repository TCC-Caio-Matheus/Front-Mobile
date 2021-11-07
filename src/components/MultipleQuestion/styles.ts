import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { MaterialIcons } from '@expo/vector-icons';
import metrics from '../../utils/metrics';

export const Container = styled.View`
  width: 100%;
  margin-top: 20px;
  flex: 1;
`;

interface IconProps {
  check: boolean;
}

export const Option = styled.View`
  width: 100%;
  border-radius: 5px;
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const Touchable = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})``;

export const Icon = styled(MaterialIcons)<IconProps>`
  font-size: ${RFValue(18)}px;
  color: ${({ check }) => (check ? 'white' : 'transparent')};
`;

export const Circle = styled.View<IconProps>`
  width: ${RFValue(24)}px;
  height: ${RFValue(24)}px;
  border-radius: ${RFValue(24)}px;
  border: 1px solid gray;
  justify-content: center;
  align-items: center;

  ${({ check }) =>
    check &&
    css`
      background-color: ${({ theme }) => theme.colors.primary};
      border: 1px solid ${({ theme }) => theme.colors.primary};
    `}
`;

export const TitleQuestion = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.secondary};
`;
