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
  function onDelete(){
    // TODO: Clean users listed hours from the server
    function deleteUser(){
      fetch(`${BASE_URL}/${user.profileType.toLowerCase()}s/${user.id}`, {
        method: "DELETE"
      }).then(response => !response.ok ?  
        Alert.alert(
          title = "ERROR",
          message = "An error occurred and we could not delete your profile!"
        ) : null
       ).then(() => {
          setPage("loginRegisterPage"); 
          setUser({});
          });
    }

     Alert.alert(
      title = "Delete your account",
      message = "Are you sure you want to delete your teachME account",
      buttons = [{text: "YES", onPress: deleteUser}, {text: "CANCEL"}])
  }
  const debugImage = "https://reactnative.dev/img/tiny_logo.png";

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
            <DateProvider datesData={generateDates()}>
                <DatePicker fixed />
            </DateProvider>
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