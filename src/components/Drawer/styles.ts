import RNModal from 'react-native-modal';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import metrics from '../../utils/metrics';
import { getStatusBarHeight } from '../../utils/iphoneHelper';

export const Modal = styled<any>(RNModal)`
  margin: 0;
`;

export const ContentModal = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  flex: 1;
  overflow: hidden;
  margin-left: ${metrics.SCREEN_WIDTH * 0.14}px;
`;

export const ContainerScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
  },
  showsVerticalScrollIndicator: false,
  bounces: false,
})``;

export const ContainerFields = styled.View`
  flex-grow: 1;
  margin: ${metrics.SCREEN_WIDTH * 0.1}px;
`;

export const HeaderModal = styled.View`
  margin: ${getStatusBarHeight() + 10}px ${metrics.SCREEN_WIDTH * 0.1}px 0px;
  align-items: flex-end;
`;

export const CloseIcon = styled(Ionicons).attrs(({ theme }) => ({
  name: 'close',
  size: 30,
  color: 'white',
}))``;

export const ButtonOption = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 100%;
  padding: 12px 0px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: ${RFValue(14)}px;
`;

export const Touchable = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})``;
