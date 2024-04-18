import {View, Image} from 'react-native';
import ComponentsStyles from './ComponentsStyles';
import Logo from '../assets/logo.png';

function NavBar({ image }){
    return (
        <View style={
            image ? ComponentsStyles.navBar : 
            {...ComponentsStyles.navBar, ...ComponentsStyles.forceOnTopNavBar}}>
            <Image 
             source={Logo} 
             style={image ? ComponentsStyles.logo : ComponentsStyles.centeredLogo} 
             resizeMode='contain'
            />
            {
            image &&
            <Image 
             source={{ uri: image }} 
             style={ComponentsStyles.navBarProfile} 
            />
            }
        </View>
    );
}

export default NavBar;