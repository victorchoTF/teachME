import React from 'react';
import ProfileCard from './ProfileCard';
import { View, TouchableOpacity } from 'react-native';
import ComponentsStyles from './ComponentsStyles';
import DatePicker from './DatePicker';

function TeacherCard({ name, bio, email, phone, image }) {
  // should be fethed from somewhere
  const days = {
    "Mon": 1,
    "Thu": 2,
    "Wed": 3,
    "Thi": 4,
    "Fri": 5,
    "Sat": 6,
    "Sun": 7
  }

  return (
    <View style={ComponentsStyles.teacherCard}>
      <TouchableOpacity>
        <ProfileCard name={name} bio={bio} email={email} phone={phone} image={image} />
      </TouchableOpacity>
      <DatePicker days={days}/>
    </View>
  );
}

export default TeacherCard;
