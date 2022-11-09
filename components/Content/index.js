import { Text, View,Image, ScrollView } from "react-native";
import { global } from "../../css/styles";
import { SimpleLineIcons } from '@expo/vector-icons'; 


 export default function Content(){
    return(
        <View style={global.content}>
            <View>
            <Image source={require("../../assets/contentimg.jpg")} style={global.contentimg}/>
            <Text style={global.txtcolecao}> Nova Coleção </Text>
            <Text style={global.txtstreet}> Screet Street </Text>
            <Text style={global.txtdescricao}> O melhor outfit no melhor App</Text>
            <SimpleLineIcons name="arrow-down-circle" size={60} color="white" style={global.icon}/>
            </View>
            <ScrollView horizontal={true}>
                    <View style={global.scrolatividade}>
                    <Image source={require("../../assets/foto1.jpg")} style={global.scrolimg}/>
                    <Image source={require("../../assets/foto2.jpg")} style={global.scrolimg}/>
                    <Image source={require("../../assets/foto3.jpg")} style={global.scrolimg}/>
                    </View>
            </ScrollView>
            <View style={global.sobre}>
                <Text style={global.txttitlesobre}> Sobre Nós </Text>
                <Text style={global.txtsobre}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Text>
            </View>
        </View>
    )
}