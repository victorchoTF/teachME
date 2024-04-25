import React, { useState } from 'react';
import { View, Keyboard } from 'react-native';
import NavBar from '../components/NavBar';
import EntryForm from '../components/EntryForm';
import PagesStyles from './PagesStyles';

function LoginRegisterPage(){
    const registerFields = [
        "First name",
        "Last name",
        "Email",
        "Phone number",
        "Teacher|Student",
        "Password",
        "Confirm password",
    ];

    const loginFields = [
        "Email",
        "Password"
    ];

    const [loging, setLoging] = useState(true);

    return (
        <View style={PagesStyles.formHolder}>
            <NavBar />
            {loging ? 
                <EntryForm 
                    formType="Log In"
                    title="Log in with your TeachMe account"
                    fields={loginFields}
                    labelText="Don't have an account?"
                    postURL='#'
                    goToFunc={() => {Keyboard.dismiss(); setTimeout(() => setLoging(false), 20);}}
                    linkText="Create one"
                />
            :
                <EntryForm 
                    formType="Register"
                    title="Create a brand new TeachMe account"
                    fields={registerFields}
                    labelText="Already have an account?"
                    postURL='#'
                    goToFunc={() => {Keyboard.dismiss(); setTimeout(() => setLoging(true), 20);}}
                    linkText="Log in"
                />
            }
        </View>
    );
    }

    export default LoginRegisterPage;
