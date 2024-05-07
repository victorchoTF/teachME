import React, { useState } from 'react';
import ProfileCard from './ProfileCard';
import { View, TouchableOpacity, Alert } from 'react-native';
import ComponentsStyles from './ComponentsStyles';
import DatePicker from './DatePicker';
import ContactInfo from './ContactInfo';
import { DateProvider, generateDates } from '../contexts/DateContext';
import { BASE_URL } from '../endpoints';
 
function TeacherCard({ name, bio, email, phone, image }) {
  const [prepDates, setPrepDates] = useState(generateDates());

  async function filterDates() {
    const response = await fetch(`${BASE_URL}/lessons/teacher/${email}`);
    if (!response.ok) {
        Alert.alert(
            title="Error",
            message=response.text() 
        );
        return;
    }
    
    const data = await response.json();
    const filteredDates = prepDates.map(date => {
        for (el of data){
            const [lessonDate, lessonTime] = el.date.split("T");
            const lessonDay = parseInt(lessonDate.split("-")[2]);
  
            const serverTimezoneOffset = new Date().getTimezoneOffset();
            const lessonHour = parseInt(lessonTime.split(":")[0]) - Math.floor(serverTimezoneOffset / 60);
            
            if (date.number === lessonDay)
                delete date.lessons[`${lessonHour}:00`];
        }
  
        return date;
    });
  
    setPrepDates(filteredDates);
  }

  function filterAndSetExpand(){
    filterDates();
    setExpanded((prevState) => !prevState);
  }

  const [expanded, setExpanded] = useState(false);
  return (
    <View style={ComponentsStyles.teacherCard}>
      <TouchableOpacity onPress={filterAndSetExpand}>
        <ProfileCard name={name} bio={bio} image={image} />
      </TouchableOpacity>
      {
        expanded ?
        <View style={ComponentsStyles.topBorder}>
          <ContactInfo email={email} phone={phone}/>
          <DateProvider datesData={prepDates}>
            <DatePicker 
             teacherName={name} 
             teacherEmail={email} 
             colapseOnSubmit={() => setExpanded(false)}/>
          </DateProvider>
        </View>
        : null
      }
    </View>
  );
}

export default TeacherCard;
