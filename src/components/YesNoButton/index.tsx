import React from "react";
import { Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Container, MainButton, ButtonText } from "./styles";
import theme from "../../global/styles/theme";

const YesNoButton: React.FC = () => {
  return (
    <Container>
      <MainButton>
        <MaterialIcons
          name="thumb-down"
          size={57}
          color={theme.colors.danger}
        />
        <ButtonText>Não</ButtonText>
      </MainButton>

      <MainButton>
        <MaterialIcons
          name="thumbs-up-down"
          size={57}
          color={theme.colors.secondary}
        />
        <ButtonText>Não sei</ButtonText>
      </MainButton>

      <MainButton>
        <MaterialIcons name="thumb-up" size={57} color={theme.colors.primary} />
        <ButtonText>Sim</ButtonText>
      </MainButton>
    </Container>
  );
};

export default YesNoButton;
