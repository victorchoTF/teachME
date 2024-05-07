import { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import ComponentsStyles from "./ComponentsStyles";
import LessonsPicker from "./LessonsPicker";
import { LessonProvider } from "../contexts/LessonContext";
import { useDateContext } from "../contexts/DateContext";
import { useUserContext } from "../contexts/UserContext";
import LessonInfo from "./LessonInfo";
import { BASE_URL } from "../endpoints";

function DatePicker({ teacherName, teacherEmail, colapseOnSubmit, fixed }){
    const { dates } = useDateContext();
    const { user } = useUserContext();
    const [selectedDay, setSelectedDay] = useState(dates[0].day);

    function submitLessonsData(){
        const result = [];
        for (let date of dates){
            if (Object.values(date.lessons).every(val => val === false))
                continue;

            result.push(date);
            for (let lessonsHour in date.lessons){
                if (date.lessons[lessonsHour])
                    continue;

                delete result[result.length - 1].lessons[lessonsHour]
            }
        }
        
        colapseOnSubmit();
        fetch(`${BASE_URL}/lessons`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                lessons: result,
                studentId: user.id,
                teacherEmail
            })
        }).then(response => {

            if (!response.ok){
                Alert.alert(
                   title="Error",
                   message=response.text() 
                )
                return;
            }
        })
        Alert.alert(
            title="Saved lessons",
            message=`You saved several lessons with ${teacherName}!`
        );
    }

    return (
        <View style={ComponentsStyles.datePicker}>
            <View style={ComponentsStyles.weekContainer}>
                {dates.map((date, index) => (
                    <View style={ComponentsStyles.dayContainer} key={date.number + date.day + index}>
                        <Text>
                            {date.day}
                        </Text>
                        <TouchableOpacity 
                        style={
                            selectedDay === date.day
                            ?
                            {
                            ...ComponentsStyles.button, 
                            ...ComponentsStyles.dayButton,
                            ...ComponentsStyles.dayButtonSelected
                            }
                            :
                            {
                            ...ComponentsStyles.button, 
                            ...ComponentsStyles.dayButton
                            }
                        }
                        onPress={() => setSelectedDay(date.day)}
                        >
                            <Text style={ComponentsStyles.buttonText}>
                                {date.number}
                            </Text>
                        </TouchableOpacity>  
                    </View>
                ))}
            </View>
            {   
                dates.map((date, index) => (
                    <View 
                     key={date.day + date.number + index}
                     style={ComponentsStyles.topBorderDark}>
                        {
                            fixed ?     
                                selectedDay === date.day ? <LessonInfo day={date.day}/> : null
                            :
                                <LessonProvider pickedLessonsData={date.lessons}>
                                    {
                                        selectedDay === date.day ? 
                                            <LessonsPicker day={date.day}/> : null
                                    }
                                </LessonProvider>
                        }
                    </View>
                    
            ))}
            {!fixed ?
                <TouchableOpacity
                    onPress={submitLessonsData}
                    style={{...ComponentsStyles.button, ...ComponentsStyles.datePickerButton}}
                >
                    <Text style={ComponentsStyles.buttonText}>
                        Submit
                    </Text>
                </TouchableOpacity>  
                : null
            }
        </View>
    );
}

export default DatePicker;