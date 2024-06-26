import { useState, useEffect } from 'react';
import {View, Image, Keyboard, TouchableOpacity } from 'react-native';
import ComponentsStyles from './ComponentsStyles';
import Logo from '../assets/logo.png';
import { usePageContext } from '../contexts/PageContext';
import { useUserContext } from '../contexts/UserContext';

function NavBar({ image }){
    const [smallNavBar, setSmallNavBar] = useState(false);
    const {user} = useUserContext();

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

    const { setPage } = usePageContext();
    
    return (
        <View style={
            image ? ComponentsStyles.navBar :  
            smallNavBar ? 
            {...ComponentsStyles.navBar, ...ComponentsStyles.smallNavBar} :
            {...ComponentsStyles.navBar, ...ComponentsStyles.forceOnTopNavBar}}>
                
            {user.id && user.profileType === "Student" ? 
                <TouchableOpacity onPress={() => setPage("mainPage")}>
                    <Image 
                    source={Logo} 
                    style={image ? ComponentsStyles.logo : ComponentsStyles.centeredLogo} 
                    resizeMode='contain'
                    />
                </TouchableOpacity>
            :
                <Image 
                    source={Logo} 
                    style={image ? ComponentsStyles.logo : ComponentsStyles.centeredLogo} 
                    resizeMode='contain'
                />
            }
            {
            image ?
            <TouchableOpacity onPress={() => setPage("profilePage")}>
                <Image 
                source={{ uri: image }} 
                style={ComponentsStyles.navBarProfile} 
                />
            </TouchableOpacity>
            : null
            }
        </View>
    );
}

export default NavBar;