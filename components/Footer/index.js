import { Image, Text, View } from "react-native";
import { global } from "../../css/styles";
import { FontAwesome5 } from '@expo/vector-icons'; 


export default function Footer() {
    return (
        <View style={global.footer}>
            <View style={global.contentendereco}>
            <Text style={global.txttitlesobre}> Entre em contato </Text>
                <Text style={global.endereco}>R. Cel. Luís Americano, SP - CEP 03308-020 -</Text>
                <Text style={global.endereco}>200</Text>
                <Text style={global.endereco}>Tel: (11) 4002-8922</Text>
                <Text style={global.endereco}>secretst@sac.com</Text>
            </View>
            <View >
                
                <View style={global.contato}>
                <FontAwesome5 name="whatsapp-square" size={40} color="white" style={global.icon3}/>
                <FontAwesome5 name="facebook-square" size={40} color="white" style={global.icon3}/>
                <FontAwesome5 name="instagram-square" size={40} color="white" style={global.icon3}/>
                </View>
            </View>
        </View>
        
    )
}