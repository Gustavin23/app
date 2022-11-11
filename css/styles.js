import { StyleSheet } from "react-native"

export const global = StyleSheet.create({
    // Header 
    header:{
        height:130,
        padding:20,
        backgroundColor:"#1c1f22",
        display:"flex"
    },
    logo:{
        width:100,
        height:78,
        marginTop:14,
        marginLeft:"auto",
        marginRight:"auto"
    },
    // Content
    content:{
        backgroundColor:"#1c1f22"
    },
    contentimg:{
        width:"100%",
        height:450,
        opacity:0.8,
    },
    txtcolecao:{
        position:"absolute",
        fontSize:40,
        color:"white",
        top:300,
        marginLeft:25
    },
    txtstreet:{
        position:"absolute",
        fontSize:40,
        color:"white",
        top:340,
        marginLeft:25
    },
    txtdescricao:{
        position:"absolute",
        fontSize:20,
        color:"white",
        top:390,
        marginLeft:30
    },
    icon:{
        paddingTop:40,
        marginRight:"auto",
        marginLeft:"auto",
        paddingBottom:40,
    },
    icon2:{
        paddingTop:40,
        marginRight:"auto",
        marginLeft:"auto",
    },
    scrolimg: {
        height:500,
        width:250,
        resizeMode: "cover",
        margin: 1,
        borderRadius: 10,
        marginLeft: 10,
    },
    scrolatividade: {
        flexDirection: "row",
        marginLeft: 5,
        paddingBottom: 10,
    },
    // Sobre
    sobre:{
        paddingBottom:50,
    },
    txttitlesobre:{
        fontSize:40,
        color:"white",
        marginRight:"auto",
        marginLeft:"auto",
        marginTop:20,
        marginBottom:10,
    },
    imgsobre:{
        height:400,
        width:260,
        resizeMode: "cover",
        margin: 1,
        marginLeft:"auto",
        marginRight:"auto",
        borderRadius: 10,
        marginTop:20,
    },
    txtsobre:{
        fontSize:15,
        padding:20,
        color:"white",
        marginRight:"auto",
        marginLeft:"auto",
        textAlign:"center"
    },
    // Distribuicao
    distribuicao:{
        marginTop:-15,
    },
    imgdistribuicao:{
        width:350,
        height:400,
        marginRight:"auto",
        marginLeft:"auto",
        resizeMode: "cover",
        margin: 1,
        borderRadius: 10,
        marginTop:20,

    },
    contato:{
        display: "flex",
        flexDirection:"row",
        marginLeft: "auto",
        marginRight: "auto",
        paddingTop: 10
    },
    icon3:{
        margin: 10,
    },
    // Footer
    footer:{
        width:"100%",
        height:250,
        backgroundColor:"#1c1f22",
        marginTop: -15
    },
    endereco:{
      color: "white",  
      textAlign:"left",
      marginLeft:"auto",
      marginRight:"auto",
    },
    
})