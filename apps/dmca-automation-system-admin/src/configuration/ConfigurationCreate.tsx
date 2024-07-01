import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ConfigurationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="configName" source="configName" />
        <TextInput label="configValue" multiline source="configValue" />
      </SimpleForm>
    </Create>
  );
};
