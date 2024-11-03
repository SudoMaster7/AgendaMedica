import { COLORS } from '../constants/theme.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from "../screens/main/main.jsx";
import Services from "../screens/services/services.jsx";
import Schedule from "../screens/schedule/schedule.jsx";

const Stack = createNativeStackNavigator();

function RoutesPrivate(){
    return <Stack.Navigator>
        <Stack.Screen name="main" component={Main}
        options={{
            headerShown: false
        }}/>

        <Stack.Screen name="services" component={Services}
        options={{
            headerTitle: "Services",
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerTintColor: COLORS.white,
            headerStyle:{
                backgroundColor: COLORS.green
            }
        }}/>

        <Stack.Screen name="schedule" component={Schedule}
        options={{
            headerTitle: "Fazer uma reserva",
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerTintColor: COLORS.green,
        }}/>

    </Stack.Navigator>


}

export default RoutesPrivate;