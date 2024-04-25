import { View, Text, TouchableOpacity } from "react-native";
import { Checkbox } from "react-native-paper";
import { useLessonContext } from '../contexts/LessonContext';
import { useDateContext } from "../contexts/DateContext";
import ComponentsStyles from "./ComponentsStyles";

function LessonsPicker({ day }){
    function handleLessonToggle(lesson) {
        setPickedLessons((prevState) => ({
        ...prevState,
        [lesson]: !prevState[lesson]
        }));
    };

    const { pickedLessons, setPickedLessons } = useLessonContext();

    return (
        <View style={ComponentsStyles.lessonsContainer}>
            {Object.entries(pickedLessons).map(([lesson, bool], index) => (
                    <Checkbox.Item
                        key={lesson + index}
                        label={lesson}
                        status={bool ? 'checked' : 'unchecked'}
                        onPress={() => handleLessonToggle(lesson)}
                    />
            ))}
        </View>
    );
}

export default LessonsPicker;