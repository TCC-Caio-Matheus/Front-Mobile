import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import YesNoButton from "../../components/YesNoButton";
import { Container, InfoText } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button";
import QuizCard from "../../components/QuizCard";

const Home: React.FC = () => {
  const [store, setStore] = useState(true);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavBar name="Caio" storeName="Dashcommerce" />
      <Container>
        {/* {store ? (
          <>
          

          
          
          </>
        ) : (
          <>
            <InfoText>Voce ainda não tem nenhuma loja cadastrada</InfoText>
            <Button text="Cadastrar Loja" outline={false} icon="store" />
          </>
        )} */}

      </Container>
    </SafeAreaView>
  );
};

export default Home;
