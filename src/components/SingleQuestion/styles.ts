import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import metrics from '../../utils/metrics';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
  flex: 1;
`;

interface OptionProps {
  selected: boolean;
}

export const Option = styled.View<OptionProps>`
  width: ${metrics.SCREEN_WIDTH * 0.26}px;
  height: ${metrics.SCREEN_WIDTH * 0.26}px;
  border-radius: 5px;
  border: 1px solid
    ${({ selected, theme }) =>
      selected ? theme.colors.primary : theme.colors.secondary};
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

export const Touchable = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})``;

export const Icon = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 100%;
  height: 100%;
`;

export const TitleQuestion = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.secondary};
`;
