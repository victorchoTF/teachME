import { useEffect } from "react";
import { View } from "react-native";
import { Checkbox } from "react-native-paper";
import { useLessonContext } from '../contexts/LessonContext';
import { useDateContext } from "../contexts/DateContext";
import ComponentsStyles from "./ComponentsStyles";
import ColorPallete from "../ColorPallete";

function LessonsPicker({ day }){
    function handleLessonToggle(lesson) {
        setPickedLessons((prevState) => ({
            ...prevState,
            [lesson]: !prevState[lesson]
        }));
    };

    const { pickedLessons, setPickedLessons } = useLessonContext();
    const { setDates } = useDateContext();

    useEffect(() => {
        setDates(prevState => (
            prevState.map(date => date.day === day ? { ...date, lessons: pickedLessons } : date)
        ));
    }, [pickedLessons, setDates, day]);

    return (
        <View style={ComponentsStyles.lessonsContainer}>
            {Object.entries(pickedLessons).map(([lesson, bool], index) => (
                    <Checkbox.Item
                        key={lesson + index}
                        label={lesson}
                        status={bool ? 'checked' : 'unchecked'}
                        onPress={() => handleLessonToggle(lesson)}
                        theme={{
                            colors: {
                                primary: ColorPallete.secondaryBlue,
                                text: ColorPallete.dark,
                            },
                        }}
                    />
            ))}
        </View>
    );
}

export default LessonsPicker;