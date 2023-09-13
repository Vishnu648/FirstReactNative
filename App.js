import { StyleSheet, Text, View, Button, FlatList,StatusBar } from 'react-native';
import { useState } from 'react';
import GoalList from './components/GoalList';
import GoalInput from './components/GoalInput';

export default function App() {

  const [goal, setGoal] = useState([])

  function CreateTask(saveText) {
    saveText.length ?
      setGoal(prev => [...prev,
      { text: saveText, id: Math.random().toString() }
      ]) : "";
    // setSaveText('')
  }

  function DeleteGoal(id) {
    setGoal(prev => {
      return prev.filter((goals) => goals.id !== id)
    });
  }

  return (
    <>
    <StatusBar />
    <View style={styles.container}>
      <GoalInput onAddGoal={CreateTask} />

      <Button title='reset' color="#536976" onPress={() => setGoal([])} />

      <View style={styles.infoContainer}>
        {goal.length > 0 ? (
          <Text style={{ fontSize: 20, margin: 30, marginBottom: 20 }}>Tasks</Text>
        ) :
          <Text style={{ fontSize: 20, margin: 30, marginBottom: 20 }}>No Task</Text>
        }
        <Text style={styles.noTask}>Long press to Delete</Text>
      </View>


      {goal.length > 0 ?
        <View style={styles.goalsContainer}>
          <FlatList data={goal} renderItem={(itemData, index) => {
            return <GoalList itemData={itemData} onDeleteGoal={DeleteGoal} />
          }
          }
            keyExtractor={(item, index) => {
              return item.id
            }
            }
          />
        </View>
        : ""}


    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '',
    paddingTop: 40,
    padding: 10,
    paddingBottom: 20,
    marginBottom: 20
  },
  noTask: {
    textAlign: 'center',
    color: 'darkgray',
    marginRight:20
  },
  goalsContainer: {
    height: '80%',
    paddingBottom: 20

  },
  infoContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  }
});
