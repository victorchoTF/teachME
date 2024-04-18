import React from 'react';
import { View, Text, Image } from 'react-native';
import ComponentsStyles from './ComponentsStyles';

function ProfileCard({ name, bio, image }) {
  return (
    <View style={ComponentsStyles.profileCard}>
      <Image source={{ uri: image }} style={ComponentsStyles.profilePicture} />
      <View style={ComponentsStyles.profileInfo}>
        <Text style={ComponentsStyles.profileText}>{name}</Text>
        <Text style={ComponentsStyles.profileText}>{bio}</Text>
      </View>
    </View>
  );
}

export default ProfileCard;
