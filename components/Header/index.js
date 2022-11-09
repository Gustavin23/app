import { Image, View, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import { global } from "../../css/styles"


export default function Header(){
    return(
        <View style={global.header}>
            <Image source={require("../../assets/logowhite.png")} style={global.logo}/>
            <Ionicons name="ios-notifications-sharp" size={24} color="white" style={global.noti}/>
        </View>
    )
}