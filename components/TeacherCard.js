import React, { useState } from 'react';
import ProfileCard from './ProfileCard';
import { View, TouchableOpacity } from 'react-native';
import ComponentsStyles from './ComponentsStyles';
import DatePicker from './DatePicker';
import ContactInfo from './ContactInfo';
import { DateProvider } from '../contexts/DateContext';
 
function TeacherCard({ name, bio, email, phone, image }) {
  const [expanded, setExpanded] = useState(false);

  // should be fethed from somewhere
  const dates = [
    {
      day: "Mon",
      number: 1,
      lessons: {
          "09:00": false, 
          "10:00": false, 
          "11:00": false, 
          "12:00": false, 
          "13:00": false
        }
    },
    {
      day: "Tue",
      number: 2,
      lessons: {
        "09:00": false, 
        "10:00": false, 
        "11:00": false, 
        "12:00": false, 
        "13:00": false
      }
    },
    {
      day: "Wed",
      number: 3,
      lessons: {
        "09:00": false, 
        "10:00": false, 
        "11:00": false, 
        "12:00": false, 
        "13:00": false
      }
    },
    {
      day: "Thu",
      number: 4,
      lessons: {
        "09:00": false, 
        "10:00": false, 
        "11:00": false, 
        "12:00": false, 
        "13:00": false
      }
    },
    {
      day: "Fri",
      number: 5,
      lessons: {
        "09:00": false, 
        "10:00": false, 
        "11:00": false, 
        "12:00": false, 
        "13:00": false
      }
    },
    {
      day: "Sat",
      number: 6,
      lessons: {
        "09:00": false, 
        "10:00": false, 
        "11:00": false, 
        "12:00": false, 
        "13:00": false
      }
    },
    {
      day: "Sun",
      number: 7,
      lessons: {
        "09:00": false, 
        "10:00": false, 
        "11:00": false, 
        "12:00": false, 
        "13:00": false
      }
    },
  ];

  return (
    <View style={ComponentsStyles.teacherCard}>
      <TouchableOpacity onPress={() => {setExpanded((prevState) => !prevState)}}>
        <ProfileCard name={name} bio={bio} image={image} />
      </TouchableOpacity>
      {
        expanded &&
        <View style={ComponentsStyles.topBorder}>
          <ContactInfo email={email} phone={phone}/>
          <DateProvider datesData={dates}>
            <DatePicker />
          </DateProvider>
        </View>
      }
    </View>
  );
}

export default TeacherCard;
