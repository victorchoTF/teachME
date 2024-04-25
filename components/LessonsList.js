import { View, Text } from "react-native";

function LessonsList({teacherName, lessonHour}){
    return (
        <View>
            <Text>
                {teacherName}
            </Text>
            <Text>
                {lessonHour}
            </Text>
        </View>
    );
}

export default LessonsList