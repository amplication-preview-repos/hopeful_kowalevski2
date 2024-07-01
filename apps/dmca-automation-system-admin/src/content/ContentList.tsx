import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PLATFORM_TITLE_FIELD } from "../platform/PlatformTitle";

export const ContentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Contents"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
