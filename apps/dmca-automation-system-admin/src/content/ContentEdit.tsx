import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  ReferenceInput,
} from "react-admin";

import { DmcaRequestTitle } from "../dmcaRequest/DmcaRequestTitle";
import { LogTitle } from "../log/LogTitle";
import { PlatformTitle } from "../platform/PlatformTitle";

export const ContentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="contentType"
          label="contentType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="contentUrl" source="contentUrl" />
        <ReferenceArrayInput
          source="dmcaRequests"
          reference="DmcaRequest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DmcaRequestTitle} />
        </ReferenceArrayInput>
        <div />
        <DateTimeInput label="foundAt" source="foundAt" />
        <ReferenceArrayInput
          source="logs"
          reference="Log"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LogTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="platform.id"
          reference="Platform"
          label="Platform"
        >
          <SelectInput optionText={PlatformTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
