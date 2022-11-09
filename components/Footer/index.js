import { Image, Text, View } from "react-native";
import { global } from "../../css/styles";


export default function Footer() {
    return (
        <View style={global.footer}>
            <View style={global.contentendereco}>
                <Text style={global.endereco}>R. Cel. Luís Americano, SP - CEP 03308-020 -</Text>
                <Text style={global.endereco}>200</Text>
                <Text style={global.endereco}>Tel: (11) 4002-8922</Text>
                <Text style={global.endereco}>secretst@sac.com</Text>
            </View>
        </View>
    )
}