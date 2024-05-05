import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { RadioButton } from 'react-native-paper';
import ComponentsStyles from './ComponentsStyles';
import ColorPallete from '../ColorPallete';

function EntryForm({
  formType,
  title,
  fields,
  labelText,
  goToFunc,
  linkText,
  reqFunc
}) {
  const [fieldErrors, setFieldErrors] = useState({});
  const [checked, setChecked] = useState('');
  const [formData, setFormData] = useState({});

  function onSubmit(){
    function emptyFieldsErrorCheck(){
      const errors = {};

      for (let field of fields){      
        if (field.includes("|")){
          if (!checked)
            errors[field] = "Profile type must be chosen";
        continue;
        }
  
        if (!formData[field])
          errors[field] = `${field} must be given`;
      }

      return errors;
    }

    function passwordsMatchCheck(){
      if (formType === "Log In")
        return {}
      
      if (formData["Password"] === formData["Confirm password"])
        return {}

      return {"Confirm password": "Passwords do not match"}
    }

    if (checked)
      formData.profileType = checked;

    let errors = emptyFieldsErrorCheck();
    
    if (Object.keys(errors).length !== 0){
      setFieldErrors(errors);
      return;
    }

    errors = passwordsMatchCheck();

    if (Object.keys(errors).length !== 0){
      setFieldErrors(errors);
      return;
    }

    setFieldErrors(errors);

    reqFunc(formData).then(responseError => {
      if (responseError){
        Alert.alert(
          title = `${formType} field error`,
          message = responseError
        )
      }
    });
    
    
  }

  return (
    <View>
      <Text style={ComponentsStyles.formTitle}>{title}</Text>
      {fields.map(field => (
        <View key={field}>
          {field.includes("|") 
          ? 
            <RadioButton.Group 
             onValueChange={newValue => setChecked(newValue)} 
             value={checked}
             >
              <View style={ComponentsStyles.radioButtonsHolder}>
                {field.split("|").map((f, index) => (
                  <RadioButton.Item 
                  label={f} 
                  value={f} 
                  key={f + index}
                  color={ColorPallete.green}
                  uncheckedColor={ColorPallete.light}
                  style={ComponentsStyles.radioButtonField}
                  />
                ))}
              </View>
            </RadioButton.Group>
          :
            <TextInput
              style={[ComponentsStyles.inputField, fieldErrors[field] && ComponentsStyles.errorBorder]}
              placeholder={field}
              autoCompleteType="off"
              onChangeText={text => setFormData({...formData, [field]: text})}
              secureTextEntry={field.toLowerCase().includes('password') ? true : false}
              multiline = {field.toLowerCase() === "bio" ? true : false}
              numberOfLines={field.toLowerCase() === "bio" ? 2 : 1}
            />
          }
          {fieldErrors[field] && 
            <Text style={ComponentsStyles.error}>
              {fieldErrors[field]}
            </Text>
          }
        </View>
      ))}
      <TouchableOpacity
        onPress={onSubmit}
        style={ComponentsStyles.button}
      >
        <Text style={ComponentsStyles.buttonText}>
          {formType}
        </Text>
      </TouchableOpacity>  

      <View style={ComponentsStyles.accText}>
        <Text style={ComponentsStyles.labelTextNewAcc}>
          {labelText}
        </Text>
        <TouchableOpacity 
          onPress={() => {goToFunc(); setFieldErrors({}); setChecked('');}}
        >
            <Text style={ComponentsStyles.linkNewAcc}>
              {linkText}
            </Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

export default EntryForm;
