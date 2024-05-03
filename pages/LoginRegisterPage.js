import React, { useState } from 'react';
import { View, Keyboard } from 'react-native';
import NavBar from '../components/NavBar';
import EntryForm from '../components/EntryForm';
import PagesStyles from './PagesStyles';
import { usePageContext } from "../contexts/PageContext";
import { BASE_URL, STUDENT_URL } from '../endpoints';
import { useUserContext } from '../contexts/UserContext';

function LoginRegisterPage(){
    const {setPage} = usePageContext();
    const {setUser} = useUserContext();
    const registerFields = [
        "First name",
        "Last name",
        "Email",
        "Phone number",
        "Bio",
        "Password",
        "Confirm password",
        "Teacher|Student",
    ];

    const loginFields = [
        "Email",
        "Password"
    ];

    async function onRegister(formData){
        if (formData.profileType === "Teacher")
            return;

        try{
            const response = await fetch(`${BASE_URL}/${STUDENT_URL}`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    first_name: formData["First name"],
                    last_name: formData["Last name"],
                    phone: formData["Phone number"],
                    email: formData["Email"],
                    bio: formData["Bio"],
                    password: formData["Password"]
                })
            });
            if (response.ok){
                const data = await response.json();
                console.log(data);
                setUser(data);
                setPage("mainPage")
            }
        } catch (error) {
            console.log("Error fetching data:", error);
        }
    }

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
                    reqFunc={onRegister}
                />
            }
        </View>
    );
    }

    export default LoginRegisterPage;
