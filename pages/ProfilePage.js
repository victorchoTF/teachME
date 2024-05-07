import { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, Alert } from "react-native";
import NavBar from "../components/NavBar";
import ProfileCard from "../components/ProfileCard";
import PagesStyles from "./PagesStyles";
import DatePicker from "../components/DatePicker";
import ContactInfo from "../components/ContactInfo";
import { DateProvider, generateDates } from "../contexts/DateContext";
import ComponentsStyles from "../components/ComponentsStyles";
import { usePageContext } from "../contexts/PageContext";
import { BASE_URL } from "../endpoints";
import { useUserContext } from "../contexts/UserContext";

function ProfilePage(){
  const {setPage} = usePageContext();
  const {user, setUser} = useUserContext();
  const [prepDates, setPrepDates] = useState(generateDates());
  const [areDatesFetched, setAreDatesFetched] = useState(false);
  function onDelete(){
    // TODO: Complete for teachers
    function deleteRelatedLessons(){
      fetch(`${BASE_URL}/lessons/${user.id}`, {
        method: "DELETE"
      });
    }
    function deleteUser(){
      fetch(`${BASE_URL}/${user.profileType.toLowerCase()}s/${user.id}`, {
        method: "DELETE"
      }).then(response => !response.ok ?  
        Alert.alert(
          title = "ERROR",
          message = "An error occurred and we could not delete your profile!"
        ) : null
       ).then(() => {
          deleteRelatedLessons();
          setPage("loginRegisterPage"); 
          setUser({});
          });
    }

     Alert.alert(
      title = "Delete your account",
      message = "Are you sure you want to delete your teachME account",
      buttons = [{text: "YES", onPress: deleteUser}, {text: "CANCEL"}])
  }

  async function fetchDates(){
    const response = await fetch(`${BASE_URL}/lessons/student/${user.id}`);

    if (!response.ok) {
      Alert.alert(
          title="Error",
          message=JSON.stringify(response.text())
      );
      return;
    }

    const data = await response.json();
    
    setPrepDates(prevPrepDates => {
      prevPrepDates.filter(date => {
        const prepLessons = {};
        data.forEach(el => {
          const [lessonDate, lessonTime] = el.date.split("T");
          const lessonDay = parseInt(lessonDate.split("-")[2]);
  
          const serverTimezoneOffset = new Date().getTimezoneOffset();
          const lessonHour = parseInt(lessonTime.split(":")[0]) - Math.floor(serverTimezoneOffset / 60);
  
          if (date.number === lessonDay)
            prepLessons[`${el.teacher_name} at ${lessonHour}:00`] = el.date;
        });
  
        date.lessons = prepLessons;
        return date;
      });

      return prevPrepDates;
    })

    setAreDatesFetched(true);
  }

  const debugImage = "https://reactnative.dev/img/tiny_logo.png";

  useEffect(() => {
    fetchDates();
  }, []);

  return (
    <View style={PagesStyles.profilePage}>
        <NavBar image={debugImage}/>
        <View style={ComponentsStyles.profileContent}>
          <ProfileCard 
          name={`${user.first_name} ${user.last_name}`} 
          bio={user.bio} 
          image={debugImage}
          profile
          />
          <View style={ComponentsStyles.topBorder}>
            <ContactInfo email={user.email} phone={user.phone}/>
          </View>
        </View>
        {
          areDatesFetched ?
            <DateProvider datesData={prepDates}>
                <DatePicker fixed/>
            </DateProvider>
          : null
        }
        <TouchableOpacity
          onPress={onDelete}
          style={{
            ...ComponentsStyles.button,
            ...ComponentsStyles.deleteProfileButton
          }}
        >
          <Text style={ComponentsStyles.buttonText}>
            Delete Profile
          </Text>
      </TouchableOpacity>  
    </View>
  );
}

export default ProfilePage;