import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View.attrs({
  shadowColor: '#000000',
  shadowOffset: { height: 2, width: -1 },
  shadowOpacity: 0.1,
  shadowRadius: 2,
  elevation: 2,
})`
  width: 100%;
  border: 0.5px black;
  border-radius: 8px;
  background-color: white;
  margin-bottom: 10px;
  padding: 5px;
`;

export const Touchable = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ArrowIcon = styled(AntDesign).attrs(({ theme }) => ({
  name: 'arrowright',
  size: 27,
  color: 'black',
}))``;

export const ContainerIcon = styled.View`
  width: 50px;
  height: 50px;
  background-color: white;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
`;

export const TitleHeader = styled.Text`
  color: black;
  font-size: ${RFValue(12)}px;
  margin-bottom: 3px;
`;

export const SubTitleHeader = styled.Text`
  color: black;
  font-size: ${RFValue(12)}px;
`;

export const ContainerCard = styled.View`
  flex: 1;
`;

export const ContainerArrow = styled.View`
  width: 50px;
  height: 50px;
  margin-left: 10px;
  justify-content: center;
  align-items: center;
`;
