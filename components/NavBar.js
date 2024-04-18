import {View, Image} from 'react-native';
import ComponentsStyles from './ComponentsStyles';
import Logo from '../assets/logo.png';

function NavBar({image}){
    return (
        <View style={ComponentsStyles.navBar}>
            <Image 
             source={Logo} 
             style={ComponentsStyles.logo} 
             resizeMode='contain'
            />
            <Image 
             source={{ uri: image }} 
             style={ComponentsStyles.navBarProfile} 
            />
        </View>
    );
}

export default NavBar;