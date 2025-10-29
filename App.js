//Importando arquivos dos React 
import React,{ useState} from "react";
import { SafeAreaView , View , Text,TextInput,Button , StyleSheet } from "react-native";

//Criando o principal componente do app
export default function App(){
  //Armazenar o nome do usuário
   const [name , setName] = useState('');

   //Armazena a saudação do usuário
   const [greet , setGreet] = useState ('');

}