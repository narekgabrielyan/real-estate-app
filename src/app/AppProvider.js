import React from 'react';
import {Provider} from "react-redux";
import {store} from "./rootReducer";

const AppProvider = ({children}) => {
  return <Provider store={store}>{children}</Provider>
}

export default AppProvider;