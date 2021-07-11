import React , { useState } from 'react';

import {
    StyleSheet,
    Text,
    View, 
    TextInput,Button,
    Checkbox,
     } from 'react-native';
 import CheckBox from '@react-native-community/checkbox';
 
const MyItems = props => {

    const [status, setStatus]=useState(false);

    return(

    <View style={(props.dark===true)? styles.itemD:styles.item}>
    <View style={styles.box}>
    <CheckBox
    tintColors={{ true: (props.dark===true)? 'white': 'black', false: 'black' }}
    disabled={false}
    value={status}
    onValueChange={props.onDelete.bind(this,props.id,props.val)}
    />
    </View>
   <Text style={(props.str===true) ? styles.text1:styles.text2 }>{props.val}</Text>
    
    </View>
    );
     };


     const styles = StyleSheet.create({
    
        item :{

        flexDirection:'row',
        backgroundColor : 'white',
        padding : 10,
        borderRadius : 10,
        alignItems:'center',
        margin : 10,
        
        },
        itemD :{

            flexDirection:'row',
            backgroundColor : '#696969',
            padding : 10,
            borderRadius : 10,
            alignItems:'center',
            margin : 10,
            
            },
        text1 :{
            textDecorationLine : 'line-through',
            fontSize : 15
        },
        text2 :{
          textDecorationLine :  'none',
          fontSize : 15
        },
        box :{
            padding : 5
        }
      
        
       
     
    });

     export default MyItems;
