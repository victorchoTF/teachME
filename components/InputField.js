import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import ComponentsStyles from "./ComponentsStyles";

function InputField({ fieldName, error }) {
  const [field, setField] = useState("");

  return (
    <View>
      <TextInput
        style={[ComponentsStyles.inputField, error && ComponentsStyles.errorBorder]}
        onChangeText={setField}
        value={field}
        placeholder={fieldName}
        autoCompleteType="off"
        secureTextEntry={fieldName.toLowerCase().includes("password")}
      />
      {error ? (
        <Text style={ComponentsStyles.error}>
          {fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required
        </Text>
      ) : null}
    </View>
  );
}

export default InputField;
