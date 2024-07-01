import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PLATFORM_TITLE_FIELD } from "./PlatformTitle";

export const PlatformShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="lastScraped" source="lastScraped" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="url" source="url" />
        <ReferenceManyField
          reference="Content"
          target="platformId"
          label="Contents"
        >
          <Datagrid rowClick="show">
            <TextField label="contentType" source="contentType" />
            <TextField label="contentUrl" source="contentUrl" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="fingerprint" source="fingerprint" />
            <TextField label="foundAt" source="foundAt" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Platform"
              source="platform.id"
              reference="Platform"
            >
              <TextField source={PLATFORM_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
