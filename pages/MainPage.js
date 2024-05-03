import { ScrollView } from "react-native";
import TeacherCard from "../components/TeacherCard";
import NavBar from "../components/NavBar";
import PagesStyles from "./PagesStyles";
import { BASE_URL } from "../endpoints";


const debugImage = "https://reactnative.dev/img/tiny_logo.png";
function MainPage(){
    async function getTeachers(){
        const response = await fetch(`${BASE_URL}/teachers`)

        return response.ok && await response.json();
    }

    const teachers = getTeachers();

    return (
        <ScrollView contentContainerStyle={PagesStyles.mainPage}>
            <NavBar image={debugImage} />
            {teachers.map((teacher, index) => 
                <TeacherCard
                    key={index + teacher.email}
                    name={`${teacher.first_name} ${teacher.last_name}`} 
                    bio={teacher.bio}
                    email={teacher.email}
                    phone={teacher.phone}
                    image={debugImage}
                />
            )}
        </ScrollView>
    );
}

export default MainPage;