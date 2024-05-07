import { ScrollView, View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { useDateContext } from "../contexts/DateContext";
import ComponentsStyles from "./ComponentsStyles";
import trashIcon from "../assets/trash.png";
import { useUserContext } from "../contexts/UserContext";
import { BASE_URL } from "../endpoints";

function LessonInfo({ day }){
    const { dates, setDates } = useDateContext();
    const { user } = useUserContext();

    function onDelete(lessonUsernamePair, lessonDate){
        const prepDate = new Date(lessonDate);
        const [date, time, dayPart] = prepDate.toLocaleString().replace(",", "").replace(/\u202F/g, " ").split(" ");
        const [hour] = time.split(":");
        const timestamp = `${date} ${dayPart === "AM" ? hour + ":00" : parseInt(hour) + 12 + ":00"}`.replaceAll("/", "-")
        
        const [username] = lessonUsernamePair.split(" at ");
        fetch(`${BASE_URL}/lessons/${user.profileType.toLowerCase()}/${user.id}/${username.replace(" ", "_")}/${timestamp.replace(" ", "_")}`, {
            method: "DELETE"
          }).then(response => !response.ok ?  
            Alert.alert(
              title = "ERROR",
              message = "An error occurred and we could not delete this lesson!" + JSON.stringify(response.status)
            ) 
            :
            Alert.alert(
                title="Success",
                message=`Your lesson with ${lessonUsernamePair} was deleted successfully!`
            )
            );
            
            setDates(prevDates => prevDates.map(prevDate => {
                if (lessonUsernamePair in prevDate.lessons)
                    delete prevDate.lessons[lessonUsernamePair];
    
                return prevDate;
            }));
    }

    return (
        <View style={{...ComponentsStyles.lessonsContainer, minHeight: 300}}>
            <ScrollView style={{maxHeight: 300}}>
            {
                dates.map((date) => (date.day === day ? Object.entries(date.lessons).map(([lessonUsernamePair, lessonDate], index) => {
                    return (
                        <View
                        key={lessonUsernamePair + index}
                        style={ComponentsStyles.lessonUserPair}>
                            <Text>
                                {`You have a lesson with ${lessonUsernamePair}`}
                            </Text>
                            <TouchableOpacity
                                onPress={() => onDelete(lessonUsernamePair, lessonDate)}
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
                        <Text key={index} style={{width: '100%', marginVertical: 10, textAlign: "center"}}>
                            You have no lessons assigned for today
                        </Text>
                    : null))
            }
            </ScrollView>
        </View>
    );
}

export default LessonInfo