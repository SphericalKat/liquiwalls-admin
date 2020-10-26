import React from "react";
import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
} from "react-admin-firebase";
import { WallList, WallEdit, WallShow, WallCreate } from "./WallViews";
import {
  CategoryList,
  CategoryCreate,
  CategoryEdit,
  CategoryShow,
} from "./CategoryViews";

const config = {
  apiKey: "AIzaSyAO1LTfk5M5uSvWAXng_J790kmPmQyU0j8",
  authDomain: "liquiwalls.firebaseapp.com",
  databaseURL: "https://liquiwalls.firebaseio.com",
  projectId: "liquiwalls",
  storageBucket: "liquiwalls.appspot.com",
  messagingSenderId: "2604914466",
  appId: "1:2604914466:web:beef586aba2aceb35a377b",
  measurementId: "G-6V386GF8CF",
};

// All options are optional
const options = {
  logging: true,
};

const dataProvider = FirebaseDataProvider(config, options);
const authProvider = FirebaseAuthProvider(config, options);

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource
      name="walls"
      list={WallList}
      edit={WallEdit}
      show={WallShow}
      create={WallCreate}
    />
    <Resource
      name="categories"
      list={CategoryList}
      edit={CategoryEdit}
      show={CategoryShow}
      create={CategoryCreate}
    />
  </Admin>
);

export default App;
