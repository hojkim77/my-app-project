import { StyleSheet,Dimensions } from "react-native";
const {width:SCREEN_WIDTH} = Dimensions.get("window");


const modalstyles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
    },
    modalcontainer:{
        flex:1,
        marginTop:100,
        borderRadius : 10,
        borderWidth : 1,
        backgroundColor:"white",
        marginHorizontal:15,
        padding: 5,
    },
    menutext:{
        fontSize:20,
        padding:20,
        margin:-10
    },
    case:{
        width:SCREEN_WIDTH - 42.5,
        flex:1,
        backgroundColor:"white",
    }

});

export default modalstyles;