import React from 'react';
import ProfileCard from './ProfileCard';
import { TouchableOpacity } from 'react-native';
import ComponentsStyles from './ComponentsStyles';

function TeacherCard({ name, bio, image }) {
  return (
    <TouchableOpacity style={ComponentsStyles.teacherCard}>
      <ProfileCard name={name} bio={bio} image={image} />
    </TouchableOpacity>
  );
}

export default TeacherCard;
