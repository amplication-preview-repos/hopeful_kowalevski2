import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CONTENT_TITLE_FIELD } from "./ContentTitle";
import { DMCAREQUEST_TITLE_FIELD } from "../dmcaRequest/DmcaRequestTitle";
import { PLATFORM_TITLE_FIELD } from "../platform/PlatformTitle";

export const ContentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="DmcaRequest"
          target="contentId"
          label="DmcaRequests"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="content"
              source="content.id"
              reference="Content"
            >
              <TextField source={CONTENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="platformContact" source="platformContact" />
            <TextField label="requestDate" source="requestDate" />
            <TextField label="requestStatus" source="requestStatus" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Log" target="contentId" label="Logs">
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
