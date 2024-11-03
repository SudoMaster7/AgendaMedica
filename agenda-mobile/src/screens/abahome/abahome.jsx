import { FlatList, View, Text, Alert } from "react-native";
import {styles} from "./abahome.style.js";
import Doctor from "../../components/doctor/doctor.jsx";
import { useEffect, useState } from "react";
import api from "../../constants/api.js";


function Abahome(props){

    const [doctors, setDoctors] = useState([])

    function ClickDoctor(id_doctor, name, specialty, icon){
        props.navigation.navigate("services", {
            id_doctor,
            name,
            specialty,
            icon
        });
    }

    async function LoadDoctors(){
        try {
            const response = await api.get("/doctors/");
      
            if (response.data) 
              setDoctors(response.data);
            
          } catch (error) {
            if (error.response?.data.error)
              Alert.alert(error.response.data.error);
            else
              Alert.alert("Ocorreu erro. Tente novamente mais tarde");
          }
    }

    useEffect(() => {
        LoadDoctors();
    }, [])

    return <View style={styles.container}>
        <Text style={styles.text}>Agende seus serviços médicos</Text>
        
        <FlatList data={doctors} 
                keyExtractor={(doc) => doc.id_doctor} 
                showsVerticalScrollIndicator={false} 
                renderItem={({item}) => {return <Doctor id_doctor={item.id_doctor} 
                name={item.name} 
                icon={item.icon} // M or F 
                specialty={item.specialty} 
                onPress={ClickDoctor}/>
                }} />
    </View>
}

export default Abahome;