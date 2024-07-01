import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { ContentTitle } from "../content/ContentTitle";
import { DmcaRequestTitle } from "../dmcaRequest/DmcaRequestTitle";

export const LogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="content.id" reference="Content" label="content">
          <SelectInput optionText={ContentTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="dmcaRequest.id"
          reference="DmcaRequest"
          label="dmcaRequest"
        >
          <SelectInput optionText={DmcaRequestTitle} />
        </ReferenceInput>
        <DateTimeInput label="logDate" source="logDate" />
        <SelectInput
          source="logType"
          label="logType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="message" multiline source="message" />
      </SimpleForm>
    </Edit>
  );
};
