import { createContext } from "react";
import * as SQLite from "expo-sqlite";
import FareRateServiceImpl from "../services/localDbImpl/FareRateServiceImpl";

const DefaultContext = createContext("");

const DefaultContextProvider = ({ children }) => {
  const database = SQLite.openDatabase("TaxiMAte.db");
  const fareRateService = new FareRateServiceImpl();

  return (
    <DefaultContext.Provider value={{ database, fareRateService }}>
      {children}
    </DefaultContext.Provider>
  );
};

export { DefaultContext, DefaultContextProvider };
