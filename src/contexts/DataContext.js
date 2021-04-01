import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { serverEndPoint } from "../services/api";
import { message } from "antd";
import moment from "moment";

const DataContext = React.createContext();

export const useData = () => {
  return useContext(DataContext);
};

export default function DataProvider({ children }) {
  const [loading, setLoading] = useState();
  const [data, setData] = useState([]);

  const formDataSubmit = (values) => {
    console.log(values);
    axios
      .post(serverEndPoint.formSubmit, {
        name: values.name,
        gender: values.gender,
        phone: values.phone,
        email: values.email,
        address: values.address,
        nationality: values.nationality,
        dob: moment(values.dob).format("YYYY/MM/DD"),
        education: values.education,
        modeOfContact: values.modeOfContact,
      })
      .then((res) => {
        message.success("Data Added Successfully!!");
        getAllData();
      })
      .catch((err) => {
        console.error(err.statusCode);
        message.error(err.message);
      });
  };

  const getAllData = () => {
    axios
      .get(serverEndPoint.allData)
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  useEffect(() => {
    getAllData();
  }, []);

  const value = {
    formDataSubmit,
    getAllData,
    data,
    setData,
  };

  return (
    <DataContext.Provider value={value}>
      {!loading && children}
    </DataContext.Provider>
  );
}
