import useFetch from "../customize/fetch";
import moment from "moment";
import { useEffect, useState } from "react";

const Covid = () => {
  const today = new Date(new Date().setHours(0, 0, 0, 0));
  const priorDate = moment().subtract(30, "days");

  const { data: dataCovid, isLoading, isErr } =
    // = useFetch(
    // "https://api.covid19api.com/country/vietnam?from=2021-10-01T00%3A00%3A00Z&to=2021-10-20T00%3A00%3A00Z"
    // );
    useFetch(
      `https://api.covid19api.com/country/vietnam?from=${priorDate.toISOString()}&to=${today.toISOString()}`
    );

  return (
    <>
      <h2>Covid 19 in Viet Nam</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Active</th>
            <th>Confirmed</th>
            <th>Deaths</th>
            <th>Recovered</th>
          </tr>
        </thead>
        <tbody>
          {isErr === false &&
            isLoading === false &&
            dataCovid &&
            dataCovid.length > 0 &&
            dataCovid.map((item) => {
              return (
                <tr key={item.ID}>
                  <td>{item.Date}</td>
                  <td>{item.Active}</td>
                  <td>{item.Confirmed}</td>
                  <td>{item.Deaths}</td>
                  <td>{item.Recovered}</td>
                </tr>
              );
            })}
          {isLoading === true && (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                Loading...
              </td>
            </tr>
          )}
          {isErr === true && (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                Something Err...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Covid;
