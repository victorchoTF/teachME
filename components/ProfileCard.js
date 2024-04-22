import React from 'react';
import { View, Text, Image } from 'react-native';
import ComponentsStyles from './ComponentsStyles';

function ProfileCard({ name, bio, image, profile }) {
  // TODO: FIXME: PLEASE
  return (
    <View style={ComponentsStyles.profileCard}>
      <Image 
       source={{ uri: image }} 
       style={ profile ? ComponentsStyles.profilePicture : ComponentsStyles.teacherPicture} 
      />
      <View style={ComponentsStyles.profileInfo}>
        <Text style={profile ? ComponentsStyles.profileText: ComponentsStyles.teacherText}>
          {name}
        </Text>
        <Text style={ComponentsStyles.profileText}>{bio}</Text>
      </View>
    </View>
  );
}

export default ProfileCard;
