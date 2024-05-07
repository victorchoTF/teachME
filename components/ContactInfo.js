import { View, Text, Image } from "react-native";
import ComponentsStyles from "./ComponentsStyles";
import emailIcon from '../assets/email.png';
import phoneIcon from '../assets/phone.png';

function ContactInfo({email, phone}){
  return (
    <View style={ComponentsStyles.contactInfo}>
        <View style={ComponentsStyles.imageLabelPair}>
          <Image 
            source={emailIcon} 
            style={ComponentsStyles.icon} 
            resizeMode='contain'
          />
          <Text 
           style={{
              ...ComponentsStyles.profileText,
              ...ComponentsStyles.contactText
           }}>
            {email}
          </Text>
        </View>
        <View style={ComponentsStyles.imageLabelPair}>
          <Image 
            source={phoneIcon} 
            style={ComponentsStyles.icon} 
            resizeMode='contain'
          />
          <Text 
           style={{
              ...ComponentsStyles.profileText,
              ...ComponentsStyles.contactText
           }}>
            {phone}
          </Text>
        </View>
    </View>
    );
}

export default ContactInfo;