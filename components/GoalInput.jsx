import { View, TextInput, StyleSheet,Button } from 'react-native'
import {useState} from 'react'

const GoalInput = ({onAddGoal}) => {

  const [saveText, setSaveText] = useState('text');

  function SaveChangeText(e) {
    setSaveText(e)
  }

  function CreateTask(){
    onAddGoal(saveText);
    // setSaveText('')
  }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.inputField}
                value={saveText}
                placeholder="new task"
                onChangeText={SaveChangeText} />
            <View style={{ flex: 1, padding: 5 }}>
                <Button title='Add' color="#536976" 
                onPress={CreateTask} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
})


export default GoalInput