

import React, { useState ,useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,

  FlatList,
  Switch,
  Alert,
  TouchableWithoutFeedback,
} from 'react-native';

import MyInput from './components/MyInput';
import MyItems from './components/MyItems';


const App = () => {
 
const [goals, setGoals]=useState([]);
const [cnt , setCnt]=useState(1);
const [mode, setMode] = useState(false);
const [ct , setCt]=useState(0);


const fn2=function()
{
  setCt(v=>v+1);
};

useEffect(()=>{
  if(ct===3)
  {
Alert.alert('Version up to date','1.0.1',[{text : 'cancel'}]);
console.log('effect worked');
setCt(0);
  };
  setTimeout(()=>{
    setCt(0);
  },1500)

},[ct]
);
const addGoal = function(par)
{
  setGoals( goals => [ {key : cnt, value :par, mod : false}, ...goals]);

  setCnt(cr=>cr+1);
};

const removeGoal = function(id,val)
{
setGoals(
function(goal)
{
  return goal.filter((goal)=> goal.key !== id );
});
setGoals( goals => [ ...goals ,{key : id, value :val, mod : true }]);

};
const toggleSwitch = () => setMode(previousState => !previousState);

  return (
    
        <View style={(mode===true)? styles.rootD : styles.root }>
        <Switch 
        style={styles.swt}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={mode ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={mode}
      />

     <TouchableWithoutFeedback onPress={fn2}>
       <Text style={(mode===true)? styles.textD : styles.text} >TODO LIST</Text>     
       </TouchableWithoutFeedback>
        
       <View style={styles.wrap}>
       <MyInput
       dark={mode}
       onAddGoal={addGoal}
       />
       <FlatList
       keyExtractor={(item, index )=>item.key}
        data= {goals}
         renderItem ={ itemData => <MyItems
          id={itemData.item.key}
          val={itemData.item.value}
          str={itemData.item.mod}
          onDelete={removeGoal}
          dark={mode}
          /> }
         />

       
       </View>


        </View>
  );
};

const styles = StyleSheet.create({
 
  root  :{
    flex : 1,
    backgroundColor :'#E8EAED',
    color :'black',
    justifyContent : 'space-between',
  },
  rootD  :{
    flex : 1,
    backgroundColor :'#151618',
    color :'black',
    justifyContent : 'space-between',
  },


  swt:{
    marginLeft :320,
    marginTop :50,
    width :15,
    height : 5,
    padding :15,
  },
  text :
  {
    fontSize : 20,
    fontWeight : 'bold',
    alignContent :'center',
    alignSelf : 'center',
    padding :10,
    margin : 10,
    color :'black'
  },
  textD :
  {
    fontSize : 20,
    fontWeight : 'bold',
    alignContent :'center',
    alignSelf : 'center',
    padding :10,
    margin : 10,
    color :'#696969'
  },
  wrap :{
flex : 1,

  }

});

export default App;
