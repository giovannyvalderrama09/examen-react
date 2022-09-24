import { StyleSheet } from "react-native-web";

const view = StyleSheet.create({
    container: {flex:1,
    },
    alignViews:{
        alignItems:'center',
        justifyContent:'center'
    },
    textTitle:{
        marginBottom:'5%',
        fontSize:22
    }
    }); 
const viewChilds = StyleSheet.create({
    container: {
        flex:1,
    },
    containerBackground:{
        backgroundColor:'#00000020',
        padding:'3%'
    },
    containerDirection:{
        flexDirection:'row'
    },
    containerDatos:{
        marginTop:'3%',
        marginBottom:'3%'
    },
    containerInput:{
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 7,
        borderWidth: 1,
        borderStyle: "solid",
        alignSelf: "flex-start",
        marginHorizontal: "1%",
        marginBottom: 15,
        minWidth: "15%",
    },
    containerButton:{
        margin:'5%',
        width:'100%'
    },
    button:{
        backgroundColor: "orange",
        borderRadius: 10,
        padding: 10,
        margin: 5,
    },
    textButton:{
        fontSize:14,
        color: '#fff'
    }
});

export {view,viewChilds}