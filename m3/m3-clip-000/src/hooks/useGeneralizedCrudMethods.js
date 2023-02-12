import { useEffect, useState } from "react";
import axios from "axios";

const LOADING_STATES = ["loading", "errored", "success"];

const useGeneralizedCrudMethods = (url, errorNotificationFn) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loadingStatus, setLoadingStatus] = useState("loading");

  if (!url || url.length === 0) {
    throw new Error(
      "useGeneralizedCrudMethods no url passed in error",
    );
  }

  function formatErrorString(e, url) {
    const errorString =
      e?.response?.status === 404
        ? e?.message + " url " + url
        : e?.message + e?.response?.data;
    console.log(errorString);
    return errorString;
  }

  async function getData(callbackDone) {
    try {
      setLoadingStatus(LOADING_STATES[0]);
      const results = await axios.get(url);
      setData(results.data);
      setLoadingStatus(LOADING_STATES[2]);
    } catch (e) {
      setError(e);
      setLoadingStatus(LOADING_STATES[1]);
    }
    if (callbackDone) callbackDone();
  }

  useEffect(() => {
    async function getDataUseEffect(callbackDone) {
      try {
        setLoadingStatus(LOADING_STATES[0]);
        const results = await axios.get(url);
        setData(results.data);
        setLoadingStatus(LOADING_STATES[2]);
      } catch (e) {
        setError(e);
        setLoadingStatus(LOADING_STATES[1]);
      }
      if (callbackDone) callbackDone();
    }
    getDataUseEffect();
  }, [url]);

  function createRecord(createObject, callbackDone) {
    // NEED TO HANDLE FAILURE CASE HERE WITH REWIND TO STARTING DATA
    // AND VERIFY createObject has id

    async function addData() {
      const startingData = data.map(function (rec) {
        return { ...rec };
      });
      try {
        createObject.id = Math.max(...data.map((o) => o.id), 0) + 1;
        setData(function (oriState) {
          return [createObject, ...oriState];
        });
        await axios.post(`${url}/${createObject.id}`, createObject);
        if (callbackDone) callbackDone();
      } catch (e) {
        setData(startingData);
        const errorString = formatErrorString(e, url);
        errorNotificationFn?.(errorString);
        if (callbackDone) callbackDone();
      }
    }
    addData();
  }
  function updateRecord(updateObject, callbackDone) {
    const id = updateObject.id; // all todo must have a column "id"
    async function updateData() {
      //const startingData = [...data]; // FAILS BECAUSE NOT DEEP COPY
      const startingData = data.map(function (rec) {
        return { ...rec };
      });
      try {
        setData(function (oriState) {
          const dataRecord = oriState.find((rec) => rec.id === id);

          // only update the fields passed in for the updateObject
          for (const [key, value] of Object.entries(updateObject)) {
            dataRecord[key] =
              value === undefined ? dataRecord[key] : value;
          }
          return oriState.map((rec) =>
            rec.id === id ? dataRecord : rec,
          );
        });
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // get the full record back that has been updated
        const updatedRecord = data.find((rec) => rec.id === id);
        await axios.put(`${url}/${id}`, updatedRecord);
        // console.log(`done  call axios.put`);
        if (callbackDone) callbackDone();
      } catch (e) {
        setData(startingData);
        const errorString = formatErrorString(e, url);
        errorNotificationFn?.(errorString);
        if (callbackDone) callbackDone();
      }
    }

    if (data.find((rec) => rec.id === id)) {
      updateData();
    } else {
      const errorString = `No data record found for id ${id}`;
      errorNotificationFn?.(errorString);
    }
  }
  function deleteRecord(val, callbackDone) {
    // handle case of passed in as integer or array of integers.
    const ids = Array.isArray(val) ? val : [val];

    async function deleteData() {
      const startingData = data.map(function (rec) {
        return { ...rec };
      });
      try {
        setData(function (oriState) {
          return oriState.filter((rec) => !ids.includes(rec.id));
        });
        await axios.delete(`${url}/${ids.toString()}`);
        if (callbackDone) callbackDone();
      } catch (e) {
        setData(startingData);
        const errorString = formatErrorString(e, url);
        errorNotificationFn?.(errorString);
        if (callbackDone) callbackDone();
      }
    }

    function recordExists(id) {
      const r = data.find((rec) => rec.id === id);
      return r ? true : false;
    }

    if (ids.every(recordExists)) {
      deleteData(ids);
    } else {
      const errorString = `No data record found for id ${ids.toString()}`;
      errorNotificationFn?.(errorString);
    }
  }

  function reFetch(callbackDone) {
    //setReFetchCount(reFetchCount + 1);
    //console.log("1");
    const promise = getData(() => {
      //console.log("3");
      if (callbackDone) callbackDone();
    });
    return promise;
    // Promise.all([promise]).then(() => {
    //   console.log("4");
    // });
    // console.log("2");
  }

  return {
    data, // returned data after loadingStatus === "success"
    loadingStatus, // "success", "errored", "loading"
    error, // error string
    reFetch, // gets the data again from the rest server
    createRecord, // creates new record at end, takes first record as parameter, second as callback function when done
    updateRecord, // update new record at end, takes single record as parameter, second as callback function when done
    deleteRecord, // takes primary key named "id"
  };
};

export default useGeneralizedCrudMethods;
