import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { ContentTitle } from "../content/ContentTitle";
import { LogTitle } from "../log/LogTitle";

export const DmcaRequestEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="content.id" reference="Content" label="content">
          <SelectInput optionText={ContentTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="logs"
          reference="Log"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LogTitle} />
        </ReferenceArrayInput>
        <TextInput
          label="platformContact"
          source="platformContact"
          type="email"
        />
        <DateTimeInput label="requestDate" source="requestDate" />
        <SelectInput
          source="requestStatus"
          label="requestStatus"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
