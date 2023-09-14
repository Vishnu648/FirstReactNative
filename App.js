import { View, Text, Button, StatusBar, StyleSheet, Pressable, Image } from 'react-native'
import { useState } from 'react'
import Todo from './modelPage/Todo'

const App = () => {

  const [modalIsVisible, setModalIsVisible] = useState(false)


  function showAddGoal() {
    setModalIsVisible(true)
  }

  return (
    <>
      <StatusBar />
      <View style={styles.appContainer}>

        <View Pressable={showAddGoal} style={styles.customBtn}>
          <Image Pressable={showAddGoal} style={styles.mainIcon} source={require('./assets/mainIcon.webp')} />
        </View>
        <View style={styles.addBtn}>
          <Button
            title="Add new Task"
            color={'black'}
            onPress={showAddGoal}
          />
        </View>

        {modalIsVisible && <Todo visible={modalIsVisible} setModalIsVisible={setModalIsVisible} />}

      </View>

    </>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  addBtn: {
    height: 60,
    width: '100%',
    alignItems: 'center',
    padding: 10
  },
  customBtn: {
    height: 300,
    width: '60%',
    // backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainIcon: {
    height: 180,
    width: 180,
    objectFit: 'contain'
  }
})

export default App
