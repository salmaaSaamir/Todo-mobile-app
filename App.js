import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { Button, FlatList, Keyboard, StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import { useState } from 'react';
export default function App() {
  const [todoText,setToDoText] = useState("")
  const [data, setData] = useState([
    {"id":1,"todo":"Do something nice for someone I care about","completed":true,},
    {"id":2,"todo":"Memorize the fifty states and their capitals","completed":false},
    {"id":3,"todo":"Watch a classic movie","completed":true},
    {"id":4,"todo":"Contribute code or a monetary donation to an open-source software project","completed":false},
    {"id":5,"todo":"Solve a Rubik's cube","completed":false},
    {"id":6,"todo":"Bake pastries for me and neighbor","completed":false},
    {"id":7,"todo":"Go see a Broadway production","completed":false},
    {"id":8,"todo":"Write a thank you letter to an influential person in my life","completed":true},
    {"id":9,"todo":"Invite some friends over for a game night","completed":true},
    {"id":10,"todo":"Have a football scrimmage with some friends","completed":false},
    {"id":11,"todo":"Text a friend I haven't talked to in a long time","completed":false},
    {"id":12,"todo":"Organize pantry","completed":true},
    {"id":13,"todo":"Buy a new house decoration","completed":false},
    {"id":14,"todo":"Plan a vacation I've always wanted to take","completed":false},
    {"id":30,"todo":"Take cat on a walk","completed":false}
  ])
const deleteToDo = (id)=>{
  setData((prevData)=>{
    return prevData.filter((todo) => todo.id !=id)
  })
}
const addToDo = (text)=>{
  setData((prevData)=>{
    return [
    {
      "id":222,
      "todo":text,
      "completed":false
    },
    ...prevData
  ]})
}
  return (
   <TouchableWithoutFeedback onPress={()=>{
    Keyboard.dismiss()
   }}>
     <View style={styles.container}>
      <View>
        <Text style={styles.label}>enter your todo</Text>
        <TextInput
        style={styles.input}
        onChangeText={(val)=>setToDoText(val)}
        ></TextInput>
        <Button
        title='add todo'
        color={'#34495E'}
        onPress={()=>{addToDo(todoText)}}
         />
      </View>
     
      <FlatList
    
      marginTop={25}
      data={data}
      renderItem={({item}) =>
       <View style={styles.todoBlock}>
        {item.completed?
        <Text paddingHorizontal={8}>{item.todo}    <MaterialIcons name="done" size={25}  color="#4EC842" />    <MaterialIcons name="cancel-presentation" size={24} color="#C0392B" onPress={()=>{deleteToDo(item.id)}}/></Text>:
        <Text paddingHorizontal={8}>{item.todo}   <AntDesign name="clockcircleo" size={25} color="#C5CBC4" />     <MaterialIcons name="cancel-presentation" size={24} color="#C0392B" onPress={()=>{deleteToDo(item.id)}} />
        </Text>
        }
       </View>
      }
      keyExtractor={item => item.id}
       />
       
   
      <StatusBar style="auto" />
    </View>
   </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:20,
    backgroundColor:'#EBDEF0',
    paddingTop:10,
    borderTopEndRadius:5,
    borderTopLeftRadius:5,
  },
  label:{
    textTransform:"capitalize",
    marginTop:35,
  },
  input:{
    borderBottomWidth:1,
    borderBottomColor:'#2980B9',
    margin:30,
    marginHorizontal:0,
    textTransform:"capitalize",
  },
  todoBlock:{
    display:"flex",
    flexDirection:'row',
    margin:10,
    borderWidth:1,
    borderStyle:'dashed',
    borderColor:'#707B7C',
    paddingHorizontal:10,
    padding:10,
    borderRadius:10,
  }
});
