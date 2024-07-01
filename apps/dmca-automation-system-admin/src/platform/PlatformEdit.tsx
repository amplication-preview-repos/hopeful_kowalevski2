import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { ContentTitle } from "../content/ContentTitle";

export const PlatformEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="contents"
          reference="Content"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ContentTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="lastScraped" source="lastScraped" />
        <TextInput label="name" source="name" />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Edit>
  );
};
