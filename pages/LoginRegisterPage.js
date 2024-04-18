import React, { useState } from 'react';
import { View } from 'react-native';
import NavBar from '../components/NavBar';
import EntryForm from '../components/EntryForm';
import PagesStyles from './PagesStyles';

function LoginRegisterPage(){
    const [loging, setLoging] = useState(true);
    const registerFields = [
        "First name",
        "Last name",
        "Teacher|Student",
        "Email",
        "Phone number",
        "Password",
        "Confirm password",
    ];

    const loginFields = [
        "Email",
        "Password"
    ];

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
                    goToFunc={() => setLoging(false)}
                    linkText="Create one"
                />
            :
                <EntryForm 
                    formType="Register"
                    title="Create a brand new TeachMe account"
                    fields={registerFields}
                    labelText="Already have an account?"
                    postURL='#'
                    goToFunc={() => setLoging(true)}
                    linkText="Log in"
                />
            }
        </View>
    );
    }

    export default LoginRegisterPage;
