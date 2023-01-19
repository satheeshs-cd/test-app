











































import React from 'react'
import { useState } from 'react'
import { View,StyleSheet ,Text} from 'react-native'
import PhoneInput from 'react-native-phone-number-input'


const ContactInput = (props) => {

  const [phoneNumber, setPhoneNumber] = useState("")

  const handlePhoneNumber=(value)=>{
    props.setContactNumber(value)
  }

  return (
    <>
      <PhoneInput
                defaultValue={phoneNumber}
                defaultCode='IN'
                layout='first' 
                containerStyle={styles.phoneinput}
                textContainerStyle={{ paddingVertical: 0, backgroundColor: "white",paddingLeft:0}}
                countryPickerButtonStyle={{paddingEnd:0,marginEnd:0}}
                placeholder="phone number"
                disableArrowIcon={true}
                textInputStyle={{ paddingEnd: 0 ,fontWeight:"bold",fontSize:15}}
                onChangeText={text => handlePhoneNumber(text)}
      />
       <Text style={styles.errorStyle}>{props.contactNumberError}</Text>
      </>
      
  )
}

const styles = StyleSheet.create({
    textinput: {
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
      },
      phoneinput: {
        borderColor: "grey",
        textAlign: "left",
        padding: 10,
        borderWidth: 1,
        width: 300,
        height: 50,
        fontWeight: "bold",
        borderRadius: 50,
      },
      errorStyle:{
        color:"red",
        textAlign: "left",
        width: 300,
        fontWeight: "bold",
        paddingHorizontal:10
        
      }
})

export default ContactInput