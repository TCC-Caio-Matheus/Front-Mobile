import React, { useContext, useCallback, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { ThemeContext } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import Drawer from '../Drawer';
import {
  Container,
  LeftView,
  CenterView,
  PageTitle,
  RighTView,
  MenuIcon,
} from './styles';

interface NavBarProps {
  pageTitle: string;
  displayDrawer: boolean;
  displayGoBack: boolean;
}

const NavBar: React.FC<NavBarProps> = ({
  pageTitle,
  displayDrawer,
  displayGoBack = false,
}) => {
  const themeContext = useContext(ThemeContext);
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(false);

  const handleModal = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  return (
    <Container>
      <LeftView disabled={!displayGoBack} onPress={navigation.goBack}>
        <Feather
          name="chevron-left"
          color={themeContext.colors.primary}
          size={28}
        />
      </LeftView>

      <CenterView>
        <PageTitle>{pageTitle}</PageTitle>
      </CenterView>

      <RighTView disabled={!displayDrawer} onPress={handleModal}>
        {displayDrawer && <MenuIcon name="menu" />}
      </RighTView>

      <Drawer isVisible={isVisible} handleModal={handleModal} />
    </Container>
  );
};

export default NavBar;
