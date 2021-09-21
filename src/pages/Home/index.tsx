import React, { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import YesNoButton from "../../components/YesNoButton";
import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <YesNoButton />
    </Container>
  );
};

export default Home;
