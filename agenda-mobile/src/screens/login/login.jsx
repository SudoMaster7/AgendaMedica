import { Text, View, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import icons from "../../constants/icons.js";
import { styles } from "./login.style.js";
import Button from "../../components/button/button.jsx";
import { useContext, useState } from "react";
import api from "../../constants/api.js";
import { AuthContext } from "../../contexts/auth.js";

function Login(props) {
  const {setUser} = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function ExecuteLogin() {
    try {
      const response = await api.post("/users/login", {
        email,
        password,
      });

      if (response.data) {
        api.defaults.headers.common['Authorization'] = "Bearer " + response.data.token;
        setUser(response.data);
      }
    } catch (error) {
      if (error.response?.data.error)
        Alert.alert(error.response.data.error);
      else
        Alert.alert("Ocorreu erro. Tente novamente mais tarde");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image source={icons.logo} style={styles.logo} />
      </View>
      <View>
        <View style={styles.containerInput}>
          <TextInput
            placeholder="E-mail"
            style={styles.input}
            value={email} 
            onChangeText={(texto) => setEmail(texto)}
          />
        </View>
        <View style={styles.containerInput}>
          <TextInput
            placeholder="Senha"
            style={styles.input}
            secureTextEntry={true}
            value={password}
            onChangeText={(texto) => setPassword(texto)}
          />
        </View>
        <Button text="Acessar" onPress={ExecuteLogin} />
      </View>

      <View style={styles.footer}>
        <Text>Não tenho conta.</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("account")}>
          <Text style={styles.footerLink}>Criar conta.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;