import { StyleSheet } from 'react-native';

import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  border-radius: 10px;
  width: 100%;
  background-color: white;
  padding: 0px 17px;
`;

export const LabelText = styled.Text`
  color: black;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  margin: 12px 5px;
  text-align: left;
`;

export default StyleSheet.create({
  inputAndroid: {
    backgroundColor: 'white',
    fontSize: 13,
    color: '#7793CB',
    paddingVertical: 20,
    width: '100%',
  },
  inputIOS: {
    backgroundColor: 'white',
    fontSize: 13,
    color: '#7793CB',
    width: '100%',
    paddingVertical: 20,
  },
  iconContainer: {
    top: 22,
  },
  placeholder: {
    color: '#7793CB',
  },
});
