import { StyleSheet } from 'react-native';
import ColorPallete from '../ColorPallete';

const ComponentsStyles = StyleSheet.create({
  navBar: {
    width: '100%',
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    backgroundColor: ColorPallete.green,
    zIndex: 1
  },
  smallNavBar:{
    justifyContent: 'center',
      position: 'absolute',
      top: 5,
      left: 0
  },
  logo: {
    width: 160,
  },
  forceOnTopNavBar: {
      justifyContent: 'center',
      position: 'absolute',
      top: 35,
      left: 0
  },
  centeredLogo: {
    width: 200,
    alignSelf: 'center',
  },
  navBarProfile: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  inputField: {
    maxWidth: 285,
    height: 40,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: ColorPallete.light,
    color: 'rgb(12, 41, 65)',
    paddingHorizontal: 10,
  },
  radioButtonsHolder: {
    width: '100',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  radioButtonField: {
    width: 130,
    color: ColorPallete.dark,
    backgroundColor: ColorPallete.mainBlue,
    
  },
  errorBorder: {
    borderColor: ColorPallete.error,
    borderWidth: 2,
  },
  error: {
    color: ColorPallete.error,
    margin: 3,
  },
  formTitle: {
    fontSize: 17,
    margin: '0 0 0 10px',
    color: ColorPallete.dark,
    fontWeight: 'bold',
  },
  button: {
    width: '100',
    height: 40,
    borderRadius: 10,
    backgroundColor: ColorPallete.green,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    color: ColorPallete.dark,
  },
  formButton: {
    width: '100%',
  },
  labelTextNewAcc: {
    color: ColorPallete.dark,
    fontSize: 15
  },
  linkNewAcc: {
    color: ColorPallete.light,
    fontSize: 15,
    fontStyle: 'italic'
  },
  accText:{
    width: '100',
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  user: {
    fontSize: 40,
    textAlign: 'left',
    color: ColorPallete.secondaryBlue,
  },
  profileCard: {
    display: 'flex',
    flexDirection: 'row',
    color: ColorPallete.dark,
    fontWeight: 'bold',
    textAlign: 'justify',
    gap: 10,
    width: '75%',
    alignSelf: 'flex-start',
    paddingBottom: 5
  },
  profileText: {
    color: ColorPallete.dark,
    fontWeight: 'bold',
    textAlign: 'justify',
  },
  contactText: {
    fontStyle: 'italic'
  },
  teacherPicture: {
    width: 50,
    height: 75,
    margin: 10,
  },
  profilePicture: {
    width: 80,
    height: 120,
    margin: 5,
  },
  profileInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  teacherCard: {
    width: '90%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'left',
    backgroundColor: ColorPallete.secondaryBlue,
    borderRadius: 10,
    paddingVertical: 15
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 5,
    fontStyle: 'italic'
  },
  topBorder: {
    borderTopColor: ColorPallete.mainBlue,
    borderTopWidth: 2,
  },
  topBorderDark: {
    borderTopColor: ColorPallete.secondaryBlue,
    borderTopWidth: 2,
    marginTop: -2
  },
  icon: {
    width: 20,
    aspectRatio: 1
  },
  imageLabelPair: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center'
  },
  dayButton: {
    width: 30,
    height: 30,
    borderRadius: 25
  },
  dayButtonSelected: {
    backgroundColor: ColorPallete.secondaryBlue
  },
  dayContainer:{
    display: 'flex',
    gap: -5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  lessonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  weekContainer:{
    gap: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  datePicker: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 15,
    backgroundColor: ColorPallete.green,
    borderRadius: 15,
    width: '95%',
    paddingVertical: 10
  },
  datePickerButton: {
    width: '65%',
    backgroundColor: ColorPallete.secondaryBlue
  },
  deleteLessonButton: {
    width: '10%',
    backgroundColor: ColorPallete.secondaryBlue
  },
  deleteProfileButton: {
    width: 150
  },
  profileContent: {
    backgroundColor: ColorPallete.secondaryBlue,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  lessonTeacherPair: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  debugBorder: {
    borderColor: 'red',
    borderWidth: 3,
  }
});

export default ComponentsStyles;
