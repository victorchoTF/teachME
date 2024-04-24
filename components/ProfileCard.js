import React from 'react';
import { View, Text, Image } from 'react-native';
import ComponentsStyles from './ComponentsStyles';
import emailIcon from '../assets/email.png';
import phoneIcon from '../assets/phone.png';

function ProfileCard({ name, bio, image, email, phone, profile}) {
  return (
    <View>
      <View style={ComponentsStyles.profileCard}>
        <Image 
        source={{ uri: image }} 
        style={profile ? ComponentsStyles.profilePicture : ComponentsStyles.teacherPicture} 
        />
        <View style={ComponentsStyles.profileInfo}>
          <Text style={ComponentsStyles.profileText}>
            {name}
          </Text>
          <Text style={ComponentsStyles.profileText}>
            {bio}
          </Text>
        </View>
      </View>
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
    </View>
  );
}

export default ProfileCard;
