import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
  padding: 15px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 0 solid ${({ theme }) => theme.colors.primary};
  border-bottom-width: 1px;
`;

export const LeftView = styled.TouchableOpacity`
  opacity: ${props => (props.disabled ? 0 : 1)};
`;

export const CenterView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const PageTitle = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const RighTView = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  opacity: ${props => (props.disabled ? 0 : 1)};
`;

export const MenuIcon = styled(MaterialIcons).attrs({
  size: RFValue(30),
})`
  color: #444445;
`;
