import React from "react";
import { Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import {
  Container,
  Avatar,
  InfoView,
  Title,
  ProfileName,
  InfoColumn,
  StoreText,
} from "./styles";
import theme from "../../global/styles/theme";

interface Props {
  name: string;
  storeName: string;
}

const NavBar: React.FC<Props> = ({ name, storeName }) => {
  return (
    <Container>
      <Avatar
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnWFkzIFv4mxnAm-I3frHP9rp5LygoaI5wqo4XRVNIkqKAWKHYz2G0W54T-AakGG_Jxmg&usqp=CAU",
        }}
      />
      <InfoColumn>
        <InfoView>
          <Title>Bem vindo, </Title>
          <ProfileName>{name}</ProfileName>
        </InfoView>
        <InfoView>
          <MaterialIcons name="store" size={24} color={theme.colors.primary} />
          <StoreText>{storeName}</StoreText>
        </InfoView>
      </InfoColumn>
    </Container>
  );
};

export default NavBar;
