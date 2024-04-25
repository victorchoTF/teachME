import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ComponentsStyles from "./ComponentsStyles";
import LessonsPicker from "./LessonsPicker";
import { LessonProvider } from "../contexts/LessonContext";
import { useDateContext } from "../contexts/DateContext";

function DatePicker(){
    // Fix this issue

    const [selectedDay, setSelectedDay] = useState("Mon");
    const { dates } = useDateContext();

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
                    <View key={date.day + date.number + index}>
                        <LessonProvider pickedLessonsData={date.lessons}>
                            {
                                selectedDay === date.day &&
                                    <LessonsPicker day={date.day}/>
                            }
                        </LessonProvider>
                    </View>
                    
            ))}
            <TouchableOpacity
                onPress={() => console.log(dates)}
                style={ComponentsStyles.button}
            >
                <Text style={ComponentsStyles.buttonText}>
                    Submit
                </Text>
            </TouchableOpacity>  
        </View>
    );
}

export default DatePicker;