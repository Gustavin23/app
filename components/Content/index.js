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
                <Image source={require("../../assets/teste1.jpg")} style={global.imgsobre}/>
                <Text style={global.txtsobre}>Secret Street é uma marca de roupa para diversas idades focada em trazer de alguma forma um estilo street para todas as personalidades, juntando muitas tendências e
                adaptando em uma só peça com qualidade, estilo, conforto e com cuidado e criatividade em cada detalhe das estampas. No processo de construção de nossa história, fomos
                pegando tudo o que sentíamos falta em todas as peças que já usamos e aplicamos tudo para a satisfação de cada cliente.</Text>
                <SimpleLineIcons name="arrow-down-circle" size={60} color="white" style={global.icon2}/>
            </View>
            <View style={global.distribuicao}>
                <Text style={global.txttitlesobre}> Onde Distribuimos </Text>
                <Image source={require("../../assets/imgmapaaaaa.png")} style={global.imgdistribuicao}/>
                <Text style={global.txtsobre}> Nossa empresa distribui em diversas regiões tais como: zona leste, zona sul, zona oeste e zona norte. E entregamos via sedex, PAC e nas estações.</Text>
                <SimpleLineIcons name="arrow-down-circle" size={60} color="white" style={global.icon}/>
            </View>
        </View>
    )
}