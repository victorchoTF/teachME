import { ScrollView, View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { useDateContext } from "../contexts/DateContext";
import ComponentsStyles from "./ComponentsStyles";
import trashIcon from "../assets/trash.png";
import { useUserContext } from "../contexts/UserContext";
import { BASE_URL } from "../endpoints";

function LessonInfo({ day }){
    const { dates } = useDateContext();
    const { user } = useUserContext();

    function onDelete(lessonTeacherPair, lessonDate){
        const prepDate = new Date(lessonDate);
        const [date, time, dayPart] = prepDate.toLocaleString().replace(",", "").replace(/\u202F/g, " ").split(" ");
        const [hour] = time.split(":");
        const timestamp = `${date} ${dayPart === "AM" ? hour + ":00" : parseInt(hour) + 12 + ":00"}`.replaceAll("/", "-")
        
        const [teacherName] = lessonTeacherPair.split(" at ");
        fetch(`${BASE_URL}/lessons/${user.id}/${teacherName.replace(" ", "_")}/${timestamp.replace(" ", "_")}`, {
            method: "DELETE"
          }).then(response => !response.ok ?  
            Alert.alert(
              title = "ERROR",
              message = "An error occurred and we could not delete this lesson!" + JSON.stringify(response.status)
            ) 
            :
            Alert.alert(
                title="Success",
                message=`Your lesson with ${lessonTeacherPair} was deleted successfully!`
            )
           );
    }

    return (
        <View>
            <ScrollView style={{maxHeight: 300}}>
            {
                dates.map((date) => (date.day === day ? Object.entries(date.lessons).map(([lessonTeacherPair, lessonDate], index) => {
                    return (
                        <View
                        key={lessonTeacherPair + index}
                        style={ComponentsStyles.lessonTeacherPair}>
                            <Text>
                                {`You have a lesson with ${lessonTeacherPair}`}
                            </Text>
                            <TouchableOpacity
                                onPress={() => onDelete(lessonTeacherPair, lessonDate)}
                                style={{...ComponentsStyles.button, ...ComponentsStyles.deleteLessonButton}}
                            >
                                <Image 
                                    source={trashIcon} 
                                    style={{...ComponentsStyles.icon, height: 20}} 
                                    resizeMode='contain'
                                />
                            </TouchableOpacity> 
                        </View>
                    )
                    }): null))
            }
            {
                dates.map((date, index) => (Object.keys(date.lessons).length === 0 && date.day === day ? 
                        <Text key={index}>
                            You have no lessons assigned for today
                        </Text>
                    : null))
            }
            </ScrollView>
        </View>
    );
}

export default LessonInfo