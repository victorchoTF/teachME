import React, { useState } from 'react';
import { View } from 'react-native';
import EntryForm from '../components/EntryForm';
import PagesStyles from './PagesStyles';
function LoginRegisterPage(){
    const [loging, setLoging] = useState(true);
    const registerFields = [
        "First name",
        "Last name",
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
            {loging ? 
                <EntryForm 
                    formType="Register"
                    title="Create a brand new TeachMe account"
                    fields={registerFields}
                    labelText="Already have an account?"
                    postURL='#'
                    goToFunc={() => setLoging(false)}
                    linkText="Log in"
                />
            :
                <EntryForm 
                    formType="Log In"
                    title="Log in with your TeachMe account"
                    fields={loginFields}
                    labelText="Don't have an account?"
                    postURL='#'
                    goToFunc={() => setLoging(true)}
                    linkText="Create one"
                />
            }
        </View>
    );
    }

    export default LoginRegisterPage;
