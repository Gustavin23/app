import { Image, Text, View, TouchableOpacity } from "react-native";
import { global } from "../../css/styles";
import { FontAwesome5 } from '@expo/vector-icons'; 
import * as Linking from 'expo-linking';



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

                <TouchableOpacity onPress={() => {
            Linking.openURL(
              'http://api.whatsapp.com/send?phone=5511954968772'
            );
          }}>
                <FontAwesome5 name="whatsapp-square" size={40} color="white" style={global.icon3}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
            Linking.openURL(
              'http://api.whatsapp.com/send?phone=5511954968772'
            );
          }}></TouchableOpacity>

                <TouchableOpacity onPress={() => {
                            Linking.openURL(
                            'https://www.facebook.com'
                            );
                        }}>
                <FontAwesome5 name="facebook-square" size={40} color="white" style={global.icon3}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
            Linking.openURL(
              'https://www.instagram.com'
            );
          }}>
                <FontAwesome5 name="instagram-square" size={40} color="white" style={global.icon3}/>
                </TouchableOpacity>
                </View>
            </View>
        </View>
        
    )
}