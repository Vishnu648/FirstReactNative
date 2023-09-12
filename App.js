import { StyleSheet, Text, View, Button, TextInput, ScrollView,FlatList } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [saveText, setSaveText] = useState('test');
  const [goal, setGoal] = useState([])

  function SaveChangeText(e) {
    setSaveText(e)
  }

  function CreateTask() {
    saveText.length ?
      setGoal(prev => [...prev, 
        {text: saveText,id: Math.random().toString()}
      ]) : "";
    // setSaveText('')
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputField} value={saveText} placeholder="new task" onChangeText={SaveChangeText} />
        <View style={{ flex: 1, padding: 5 }}>
          <Button title='Add' color="#536976" onPress={CreateTask} />
        </View>
      </View>
      <Button title='reset' color="#536976" onPress={() => setGoal([])} />
      <Text style={{ fontSize: 20, margin: 30,marginBottom:20 }}>Tasks</Text>


      {goal.length==0 ? <Text style={styles.noTask}>No Tasks to do..</Text> : ""}

      { goal.length> 0 ?
      <View style={styles.goalsContainer}>
      <FlatList data={goal} renderItem={(itemData,index) => {
        return(
          <View style={styles.listItem} >
              <Text style={{ color: 'white' }}>{itemData.item.text}</Text>
              {console.log('--',itemData)}
            </View>
        )
      }
      }
      keyExtractor={(item,index) => {
        return item.id
      }
      }
      />
      </View>
      : "" }


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#292e49',
    paddingTop: 40,
    padding: 10,
    paddingBottom: 20,
    marginBottom: 20
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 45,
    color: 'white'
  },
  inputField: {
    height: 42,
    width: '75%',
    borderWidth: 1,
    paddingLeft: 8,
    borderRadius: 8,
    backgroundColor: '#292e49',
    color: 'white',
    fontSize: 25
  },
  noTask:{
    textAlign:'center',
    color:'darkgray'
  },
  listItem: {
    width: '100%',
    height: 80,
    backgroundColor: '#292e49',
    padding: 8,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 22,
  },
  goalsContainer: {
    height: '80%',
    paddingBottom:20
    
  }
});
