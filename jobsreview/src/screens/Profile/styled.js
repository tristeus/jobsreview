import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
`;

export const Header = styled.View`
  background-color: #63c2d1;
  height: 200px;
  width: 100%;
  align-items: center;
  border-bottom-color: #cccccc;
  border-bottom-width: 5px;
`;
export const FotoPerfil = styled.Image`
  margin-top: 30px;
  width: 80px;
  height: 80px;
  border-radius: 20px;
  border-width: 4px;
  border-color: #ffffff;
  background-color: gray;
`;
export const HeaderInfo = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
`;
export const NomeUser = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000000;
`;
export const AplicationArea = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  flex: 1;
`;
export const CustomButton = styled.TouchableOpacity`
  margin-top: 20px;
  height: 30px;
  width: 150px;
  background-color: #2658ab;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;

export const CustomButtonText = styled.Text`
  font-weight: 700;
  font-size: 15px;
  color: #fff;
`;

export const PageBody = styled.View`
  background-color: #ffffff;
  min-height: 400px;
`;

export const DescriptionArea = styled.View``;

export const DescriptionTitle = styled.Text`
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
  margin-left: 20px;
`;

export const DescriptionText = styled.Text`
  font-size: 15px;
  text-align: center;
  margin-top: 30px;
  margin-left: 20px;
  text-align: start;
`;
