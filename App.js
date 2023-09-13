import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
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

  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={CreateTask}/>
      <Button title='reset' color="#536976" onPress={() => setGoal([])} />
      <Text style={{ fontSize: 20, margin: 30, marginBottom: 20 }}>Tasks</Text>


      {goal.length == 0 ? <Text style={styles.noTask}>No Tasks to do..</Text> : ""}

      {goal.length > 0 ?
        <View style={styles.goalsContainer}>
          <FlatList data={goal} renderItem={(itemData, index) => {
            return <GoalList itemData={itemData}/>
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
  noTask: {
    textAlign: 'center',
    color: 'darkgray'
  },
  goalsContainer: {
    height: '80%',
    paddingBottom: 20

  }
});
