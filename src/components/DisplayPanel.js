import React, { useContext } from "react";
import { ApplicationContext } from "../App";

const DisplayPanel = props => {
  const appContext = useContext(ApplicationContext);
  if (props.result.searchType === "user")
    return (
      <div>
        <span>Search result for {appContext.searchText}</span>
        <h4>Total Repositries: {props.result.data.length}</h4>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Desciption</th>
              <th>Language</th>
              <th>URL</th>
              <th>Last Updated</th>
              <th>Owner</th>
              <th>Profile</th>
            </tr>
          </thead>
          <tbody>
            {props.result.data.map(record => {
              return (
                <tr key={record.id}>
                  <td>{record.name}</td>
                  <td>{record.description}</td>
                  <td>{record.language}</td>
                  <td>{record.html_url}</td>
                  <td>{record.pushed_at}</td>
                  <td>{record.owner.login}</td>
                  <td>{record.owner.html_url}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );

  if (props.result.searchType === "public")
    return (
      <div>
        <ApplicationContext.Consumer>
          {text => {
            return <span>Search result for {text.searchText}</span>;
          }}
        </ApplicationContext.Consumer>
        <h4>Total Repositries: {props.result.data.total_count}</h4>
        {props.result.data.total_count > 30 && (
          <span>Showing first 30 records!</span>
        )}
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Desciption</th>
              <th>URL</th>
              <th>Owner</th>
              <th>Profile</th>
            </tr>
          </thead>
          <tbody>
            {props.result.data.items.map(record => {
              return (
                <tr key={record.id}>
                  <td>{record.name}</td>
                  <td>{record.description}</td>
                  <td>{record.url}</td>
                  <td>{record.owner.login}</td>
                  <td>{record.owner.html_url}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );

  return null;
};

export default DisplayPanel;
