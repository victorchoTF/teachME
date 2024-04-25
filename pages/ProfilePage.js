import { View } from "react-native";
import NavBar from "../components/NavBar";
import ProfileCard from "../components/ProfileCard";
import PagesStyles from "./PagesStyles";
import DatePicker from "../components/DatePicker";
import { DateProvider } from "../contexts/DateContext";

function ProfilePage(){
    const debugImage = "https://reactnative.dev/img/tiny_logo.png";
    const name = "Name";
    const bio = "Bio for Name, a professional who teaches students based on national curriculum guidelines within their specialist subject areas. Their duties include assigning homework, grading tests, documenting progress and keeping up with parent communication.";
    const email = "student@gmail.com";
    const phone = "0894567243";

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
        <View style={PagesStyles.mainPage}>
            <NavBar image={debugImage}/>
            <ProfileCard 
             name={name} 
             bio={bio} 
             email={email} 
             phone={phone} 
             image={debugImage}
             profile
            />
            <DateProvider datesData={dates}>
                <DatePicker fixed />
            </DateProvider>
        </View>
    );
}

export default ProfilePage;