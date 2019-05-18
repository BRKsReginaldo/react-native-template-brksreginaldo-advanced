import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  flex: 1;
  background-color: #00a2ee;
`;

export const CountContainer = styled.View`
  margin-bottom: 20px;
  align-items: center;
`;

export const Buttons = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  background-color: #fff;
  border-radius: 9999px;
  margin: 0 10px;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const InputContainer = styled.View`
  margin: 25px auto 0;
  background-color: #fff;
  width: ${Dimensions.get('window').width * 0.9}px;
`;

export const Input = styled.TextInput`
  width: ${Dimensions.get('window').width * 0.9}px;
  border-bottom-width: 1px;
  border-bottom-color: red;
  border-radius: 4px;
`;

export const Count = styled.Text`
  font-size: 40px;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 20px;
  color: #fff;
  margin-bottom: 20px;
`;
