import { Image, View, Text, StatusBar } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import { global } from "../../css/styles"


export default function Header(){
    return(
        <View style={global.header}>
            <StatusBar backgroundColor={"#1c1f22"} translucent={true}/>
            <Image source={require("../../assets/logowhite.png")} style={global.logo}/>
        </View>
    )
}