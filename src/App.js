import React from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
} from "react-admin-firebase";

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
  <Admin dataProvider={dataProvider} authProvider={authProvider} >
      <Resource name="walls" list={ListGuesser} />
  </Admin>
);

export default App;
