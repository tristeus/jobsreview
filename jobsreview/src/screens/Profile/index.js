import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../context/dataContext";
import {
  Container,
  Scroller,
  Header,
  PageBody,
  FotoPerfil,
  HeaderInfo,
  NomeUser,
  AplicationArea,
  CustomButton,
  CustomButtonText,
  DescriptionArea,
  DescriptionTitle,
  DescriptionText,
} from "./styled";
import api from "../../api";

const Profile = ({ navigation }) => {
  const { state, dispatch } = useContext(Context);
  const [user, setUser] = useState({});

  const onScreenLoad = async () => {
    try {
      const response = await api.get("/user/findByUser", {
        params: {
          id: state.idUser,
        },
      });
      const userData = response.data.user;
      setUser(userData);

      dispatch({ type: "update", payload: false });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    onScreenLoad();
  }, [state.update]);

  return (
    <Container>
      <Scroller>
        <Header>
          <FotoPerfil />
          <HeaderInfo>
            <NomeUser>{user.name}</NomeUser>
            <AplicationArea>
              <CustomButton>
                <CustomButtonText>Editar perfil</CustomButtonText>
              </CustomButton>
              <CustomButton
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid",
                  borderColor: "#2658ab",
                }}
              >
                <CustomButtonText style={{ color: "#2658ab" }}>
                  Minhas Vagas
                </CustomButtonText>
              </CustomButton>
            </AplicationArea>
          </HeaderInfo>
        </Header>
        <PageBody>
          <DescriptionArea>
            <DescriptionTitle>Sobre</DescriptionTitle>
            <DescriptionText>{user.description}</DescriptionText>
          </DescriptionArea>
        </PageBody>
      </Scroller>
    </Container>
  );
};

export default Profile;
