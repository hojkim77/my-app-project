import { StyleSheet } from "react-native";

const appstyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingHorizontal:20
    },
    header:{
      marginTop:70,
      flexDirection:"row",
      justifyContent:"center"
    },
    headertext:{
      fontSize:"40px",
      color:"black",
      fontWeight:"600"
    },
    input:{
      backgroundColor:"whitesmoke",
      paddingVertical:15,
      paddingHorizontal:15,
      borderRadius :15,
      marginVertical:30,
      fontSize:18,
    },
    scrollstyle:{
      backgroundColor:"silver",
      paddingVertical:10,
      paddingHorizontal:15,
      borderRadius:30,
  
    },
    list:{
      flexDirection:"row",
      justifyContent:"space-around",
      backgroundColor:"lightgray",
      paddingVertical:15,
      marginVertical:10,
      borderRadius :30,
    },
    listtext:{
      fontSize:20,
      fontWeight:"600"
    },
    modalheader:{
      marginTop:10,
      marginBottom:20,
      flexDirection:"row",
      justifyContent:"space-around"
    }
  });

export default appstyles;
