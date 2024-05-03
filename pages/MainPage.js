import { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import TeacherCard from "../components/TeacherCard";
import NavBar from "../components/NavBar";
import PagesStyles from "./PagesStyles";
import { BASE_URL } from "../endpoints";


const debugImage = "https://reactnative.dev/img/tiny_logo.png";
function MainPage(){
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        async function fetchTeachers() {
            try {
                const response = await fetch(`${BASE_URL}/teachers`);
                const data = await response.json();
                setTeachers(data);
            } catch (error) {
                console.error("Error fetching teachers:", error);
            }
        }

        fetchTeachers();
    }, []);

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