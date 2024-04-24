import { ScrollView } from "react-native";
import TeacherCard from "../components/TeacherCard";
import NavBar from "../components/NavBar";
import PagesStyles from "./PagesStyles";

function MainPage(){
    const debugImage = "https://reactnative.dev/img/tiny_logo.png";
    const teachers = Array.from({ length: 30 }, (_, index) => ({
        name: `Teacher ${index + 1}`,
        bio: `Bio for ${index + 1}, a professional who teaches students based on national curriculum guidelines within their specialist subject areas. Their duties include assigning homework, grading tests, documenting progress and keeping up with parent communication.`,
        email: `teacher_${index + 1}@gmail.com`,
        phone: `0895657243`,
        image: debugImage
      }));

    return (
        <ScrollView contentContainerStyle={PagesStyles.mainPage}>
            <NavBar image={debugImage} />
            {teachers.map((teacher, index) => 
                <TeacherCard
                    key={index + teacher.name}
                    name={teacher.name} 
                    bio={teacher.bio}
                    email={teacher.email}
                    phone={teacher.phone}
                    image={teacher.image}
                />
            )}
        </ScrollView>
    );
}

export default MainPage;