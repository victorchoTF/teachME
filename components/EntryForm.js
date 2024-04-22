import React, { useState, useEffect } from 'react';
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
  linkText
}) {
  const [fieldErrors, setFieldErrors] = useState({});
  const [checked, setChecked] = useState('');
  const [formData, setFormData] = useState({});

  function onSubmit(){
    if (checked)
      formData.profileType = checked;

    console.log(formData);
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
            />
          }
          {fieldErrors[field] && (
            <Text style={ComponentsStyles.error}>
              {fieldErrors[field]}
            </Text>
          )}
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
          onPress={goToFunc}>
            <Text style={ComponentsStyles.linkNewAcc}>
              {linkText}
            </Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

export default EntryForm;
