import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import ComponentsStyles from './ComponentsStyles';

const REGISTER_URL = "create_user";
const LOGIN_URL = "login_user";

function EntryForm({
  formType,
  title,
  fields,
  labelText,
  goToFunc,
  linkText
}) {
  const [response, setResponse] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const onSubmit = () => {
    // Implement form submission logic here
  };

  return (
    <View>
      <Text style={ComponentsStyles.formTitle}>{title}</Text>
      {fields.map(field => (
        <View key={field}>
          <TextInput
            style={[ComponentsStyles.inputField, fieldErrors[field] && ComponentsStyles.errorBorder]}
            placeholder={field}
            autoCompleteType="off"
          />
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
