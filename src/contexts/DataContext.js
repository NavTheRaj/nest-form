import React, { useState, useContext, useEffect } from "react";

const DataContext = React.createContext();

export const useData = () => {
  return useContext(DataContext);
};

// const getFormattedDate = (firestoreData) => {
//   const date = firestoreData.toDate();

//   let month = date.getMonth() + 1;
//   let day = date.getDate();
//   let hour = date.getHours();
//   let min = date.getMinutes();
//   let sec = date.getSeconds();

//   month = (month < 10 ? "0" : "") + month;
//   day = (day < 10 ? "0" : "") + day;
//   hour = (hour < 10 ? "0" : "") + hour;
//   min = (min < 10 ? "0" : "") + min;
//   sec = (sec < 10 ? "0" : "") + sec;

//   var str =
//     date.getFullYear() +
//     "-" +
//     month +
//     "-" +
//     day +
//     " " +
//     hour +
//     ":" +
//     min +
//     ":" +
//     sec;

//   return str;
// };

export default function DataProvider({ children }) {
  const [loading, setLoading] = useState();

  useEffect(() => {}, []);

  const value = {};

  return (
    <DataContext.Provider value={value}>
      {!loading && children}
    </DataContext.Provider>
  );
}
