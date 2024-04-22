import { View } from "react-native";
import NavBar from "../components/NavBar";
import ProfileCard from "../components/ProfileCard";
import PagesStyles from "./PagesStyles";

function ProfilePage(){
    const debugImage = "https://reactnative.dev/img/tiny_logo.png";
    const name = "Name"
    const bio = "Bio for Name, a professional who teaches students based on national curriculum guidelines within their specialist subject areas. Their duties include assigning homework, grading tests, documenting progress and keeping up with parent communication."

    return (
        <View style={PagesStyles.mainPage}>
            <NavBar image={debugImage}/>
            <ProfileCard name={name} bio={bio} image={debugImage} profile />
        </View>
    );
}

export default ProfilePage;