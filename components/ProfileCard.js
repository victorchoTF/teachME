import React from 'react';
import { View, Text, Image } from 'react-native';
import ComponentsStyles from './ComponentsStyles';

function ProfileCard({ name, bio, image, email, phone, profile}) {
  return (
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
  );
}

export default ProfileCard;
