import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CONTENT_TITLE_FIELD } from "../content/ContentTitle";
import { DMCAREQUEST_TITLE_FIELD } from "./DmcaRequestTitle";

export const DmcaRequestShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="content" source="content.id" reference="Content">
          <TextField source={CONTENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="platformContact" source="platformContact" />
        <TextField label="requestDate" source="requestDate" />
        <TextField label="requestStatus" source="requestStatus" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Log" target="dmcaRequestId" label="Logs">
          <Datagrid rowClick="show">
            <ReferenceField
              label="content"
              source="content.id"
              reference="Content"
            >
              <TextField source={CONTENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="dmcaRequest"
              source="dmcarequest.id"
              reference="DmcaRequest"
            >
              <TextField source={DMCAREQUEST_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="logDate" source="logDate" />
            <TextField label="logType" source="logType" />
            <TextField label="message" source="message" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
