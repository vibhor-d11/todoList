import React , { useState } from 'react';

import {
    StyleSheet,
    Text,
    View, 
    TextInput,Button, Alert,
     } from 'react-native';

     const MyInput = props => {


 const [ enterGoal , setEnterGoal ]  = useState('');

  const goalHandler = function(text)
    {
      setEnterGoal(text);
    };

    const addGoalHandler =function()
    {
       if(enterGoal==='')
       {
       Alert.alert('Empty Input', 'Please enter something',[{text : 'Cancel'}]);
       return;
       }
       else 
       {
           props.onAddGoal(enterGoal);
       }
        
        setEnterGoal('');
    }
    

    
return (

  <View style={styles.root}>
  
  <TextInput
  placeholder="Enter tasks" 
  style={(props.dark===true)? styles.inputD : styles.input} 
  onChangeText={goalHandler}
  value ={enterGoal}
  />
 <View style={styles.add}>
    <Button   
    color={(props.dark===true)?  '#696969':'#841584'}
    style={styles.add} title="ADD" onPress={addGoalHandler} />
 </View>
  
  </View>

);
 };


     const styles = StyleSheet.create({
    root : {
        flexDirection :'row',
        padding : 5,
        margin : 5,
        alignItems : 'center',
    
    },
    input : {
        width : '60%' ,
        padding : 10,
        borderColor : 'black', 
        borderWidth :1,
        marginHorizontal :10,
        marginLeft : 50,
        borderRadius : 25,
        color :'black',
    },
    inputD : {
        width : '60%' ,
        padding : 10,
        borderColor : 'white', 
        borderWidth :1,
        marginHorizontal :10,
        marginLeft : 50,
        borderRadius : 25,
        color :'white',
        backgroundColor:'#696969',
    },
    add :{
        flexDirection: 'row',
        justifyContent : 'space-between',
        width : 70,
        
        
    }
     
    });

     export default MyInput;
