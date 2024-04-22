import { useState, useEffect } from 'react';
import {View, Image, Keyboard} from 'react-native';
import ComponentsStyles from './ComponentsStyles';
import Logo from '../assets/logo.png';

function NavBar({ image }){

    //
    const [smallNavBar, setSmallNavBar] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setSmallNavBar(true);
        });
    
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setSmallNavBar(false);
        });

        return () => {
          keyboardDidShowListener.remove();
          keyboardDidHideListener.remove();
        };
    }, []);
    
    return (
        <View style={
            image ? ComponentsStyles.navBar :  
            smallNavBar ? 
            {...ComponentsStyles.navBar, ...ComponentsStyles.smallNavBar} :
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