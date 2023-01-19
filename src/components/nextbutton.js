import { Button } from 'react-native-paper'
import { TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'
import React from 'react'

const NextButton = () => {

  return (
    <TouchableOpacity>
    <Button
      style={styles.buttonstyle}
      buttonColor="#3DB1F2"
      textColor="white"
      onPress={""}
    >
      Next
    </Button>
  </TouchableOpacity>

  )
}
const styles = StyleSheet.create({
    buttonstyle: {
        marginTop: 20,
        width: 100,
        height: 50,
        justifyContent: "center",
        borderRadius: 50,
      }
})

export default NextButton