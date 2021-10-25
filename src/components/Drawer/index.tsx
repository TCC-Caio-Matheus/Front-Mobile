import React, { useCallback } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import find from 'lodash/find';
import {
  Modal,
  ContentModal,
  ContainerScrollView,
  ContainerFields,
  HeaderModal,
  CloseIcon,
  ButtonOption,
  ButtonText,
  Touchable,
} from './styles';
import { useAuth } from '../../hooks/auth';

interface DrawerProps {
  isVisible: boolean;
  handleModal: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ isVisible, handleModal }) => {
  const navigation = useNavigation();

  const { signOut } = useAuth();

  const handleNavigation = useCallback(
    (screen: string) => {
      handleModal();
      navigation.navigate(screen);
    },
    [handleModal, navigation],
  );

  return (
    <Modal
      isVisible={isVisible}
      onBackButtonPress={handleModal}
      onSwipeComplete={handleModal}
      swipeDirection="right"
      propagateSwipe
      animationIn="slideInRight"
      animationOut="slideOutRight"
    >
      <ContentModal>
        <HeaderModal>
          <Touchable onPress={() => handleModal()}>
            <CloseIcon />
          </Touchable>
        </HeaderModal>
        <ContainerScrollView>
          <TouchableWithoutFeedback>
            <ContainerFields>
              <ButtonOption onPress={() => handleNavigation('Paycheck')}>
                <ButtonText>Contra-cheque</ButtonText>
              </ButtonOption>
              <ButtonOption onPress={() => handleNavigation('Point')}>
                <ButtonText>Ponto</ButtonText>
              </ButtonOption>
              <ButtonOption onPress={() => handleNavigation('Point')}>
                <ButtonText>Banco de Horas</ButtonText>
              </ButtonOption>

              <ButtonOption onPress={signOut}>
                <ButtonText>Sair</ButtonText>
              </ButtonOption>
            </ContainerFields>
          </TouchableWithoutFeedback>
        </ContainerScrollView>
      </ContentModal>
    </Modal>
  );
};

export default Drawer;
