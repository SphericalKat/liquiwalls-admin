import {
  List,
  Datagrid,
  TextField,
  NumberField,
  UrlField,
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  Create,
  Show,
  SimpleShowLayout,
  ReferenceArrayField,
  SingleFieldList,
  ChipField,
} from "react-admin";

export const WallList = (props) => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <NumberField source="downloads" />
      <UrlField source="url" />
      <NumberField source="favorites" />
      <ReferenceArrayField label="Categories" reference="categories" source="category_ids">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ReferenceArrayField>
    </Datagrid>
  </List>
);

export const WallShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <NumberField source="downloads" />
      <UrlField source="url" />
      <NumberField source="favorites" />
    </SimpleShowLayout>
  </Show>
);

export const WallEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextField source="id" />
      <NumberInput source="downloads" />
      <TextInput source="url" />
      <NumberInput source="favorites" />
    </SimpleForm>
  </Edit>
);

export const WallCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <NumberInput source="downloads" />
      <TextInput source="url" />
      <NumberInput source="favorites" />
    </SimpleForm>
  </Create>
);
