import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ConfigurationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="configName" source="configName" />
        <TextInput label="configValue" multiline source="configValue" />
      </SimpleForm>
    </Edit>
  );
};
