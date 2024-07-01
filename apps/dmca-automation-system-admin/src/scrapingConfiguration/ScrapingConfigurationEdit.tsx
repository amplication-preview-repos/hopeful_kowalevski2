import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  SelectInput,
} from "react-admin";

export const ScrapingConfigurationEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="platform" source="platform" />
        <NumberInput step={1} label="scrapeDepth" source="scrapeDepth" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Edit>
  );
};
