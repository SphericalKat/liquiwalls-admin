import {
  List,
  Datagrid,
  TextField,
  Edit,
  SimpleForm,
  TextInput,
  Create,
  Show,
  SimpleShowLayout,
} from "react-admin";

export const CategoryList = (props) => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
    </Datagrid>
  </List>
);

export const CategoryEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextField source="id" />
      <TextInput source="name" />
    </SimpleForm>
  </Edit>
);

export const CategoryShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
    </SimpleShowLayout>
  </Show>
);

export const CategoryCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
    </SimpleForm>
  </Create>
);
