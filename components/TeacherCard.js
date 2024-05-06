import React, { useState } from 'react';
import ProfileCard from './ProfileCard';
import { View, TouchableOpacity } from 'react-native';
import ComponentsStyles from './ComponentsStyles';
import DatePicker from './DatePicker';
import ContactInfo from './ContactInfo';
import { DateProvider, generateDates } from '../contexts/DateContext';
 
function TeacherCard({ name, bio, email, phone, image }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={ComponentsStyles.teacherCard}>
      <TouchableOpacity onPress={() => {setExpanded((prevState) => !prevState)}}>
        <ProfileCard name={name} bio={bio} image={image} />
      </TouchableOpacity>
      {
        expanded &&
        <View style={ComponentsStyles.topBorder}>
          <ContactInfo email={email} phone={phone}/>
          <DateProvider datesData={generateDates()}>
            <DatePicker />
          </DateProvider>
        </View>
      }
    </View>
  );
}

export default TeacherCard;
