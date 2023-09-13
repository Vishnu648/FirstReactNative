import { View, Text, StyleSheet,Pressable } from 'react-native'
import React from 'react'

const GoalList = ({itemData,onDeleteGoal}) => {
    return (
        <Pressable android_ripple={{color:'darkgray'}} onLongPress={()=>onDeleteGoal(itemData.item.id)}>
        <View style={styles.listItem} >
            <Text style={{ color: 'white', fontSize: 28 }}>{itemData.item.text}</Text>
        </View>
        </Pressable>
    )
}

const styles=StyleSheet.create({
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
      },
})

export default GoalList