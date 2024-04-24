import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ComponentsStyles from "./ComponentsStyles";

function DatePicker({days}){
    const [selectedDay, setSelectedDay] = useState("Mon");

    return (
        <View style={ComponentsStyles.datePicker}>
            <View style={ComponentsStyles.weekContainer}>
                {Object.entries(days).map(([day, date], index) => (
                <View style={ComponentsStyles.dayContainer} key={day + date + index}>
                    <Text>
                        {day}
                    </Text>
                    <TouchableOpacity 
                     style={
                        selectedDay === day 
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
                     onPress={() => setSelectedDay(day)}
                    >
                        <Text style={ComponentsStyles.buttonText}>
                            {date}
                        </Text>
                    </TouchableOpacity>  
                </View>
                ))}
            </View>
        </View>
    );
}

export default DatePicker;