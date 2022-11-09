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
    },
    noti:{
        marginLeft: 300,
        bottom:50
    },
    // Content
    content:{
        backgroundColor:"#1c1f22"
    },
    contentimg:{
        width:400,
        height:450,
        opacity:0.9,
    },
    txtcolecao:{
        position:"absolute",
        fontSize:40,
        color:"white",
        fontFamily:"Helvetica",
        top:300,
        marginLeft:25
    },
    txtstreet:{
        position:"absolute",
        fontSize:40,
        color:"white",
        fontFamily:"Helvetica",
        top:340,
        marginLeft:25
    },
    txtdescricao:{
        position:"absolute",
        fontSize:20,
        color:"white",
        fontFamily:"Helvetica",
        top:390,
        marginLeft:30
    },
    icon:{
        paddingTop:40,
        marginRight:"auto",
        marginLeft:"auto",
        paddingBottom:40,
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
        paddingBottom:90,
    },
    sobre:{
        paddingBottom:50,
    },
    txttitlesobre:{
        fontSize:40,
        color:"white",
        marginRight:"auto",
        marginLeft:"auto",
    },
    txtsobre:{
        fontSize:15,
        padding:20,
        color:"white",
        marginRight:"auto",
        marginLeft:"auto",
        textAlign:"center"
    },
    // Footer
    footer:{
        width:375,
        height:250,
        backgroundColor:"black"
    },
    endereco:{
      color: "white",  
    }
})