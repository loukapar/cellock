import React from "react";
import { Button, Table } from "react-bootstrap";
import styles from "./styles.module.css";

const DataTable = ({ headers, data, actions }) => {
  return (
    <Table className={styles.table} responsive bordered hover>
      <thead>
        <tr>
          <th className={styles.cell_center}>#</th>
          {headers.map((header, index) => (
            <th key={index}>{header.displayName}</th>
          ))}
          {actions && actions.length > 0 ? (
            <th className={styles.cell_center}>Actions</th>
          ) : null}
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((row, i) => {
            return (
              <tr key={i}>
                <td className={styles.cell_center}>{i + 1}</td>
                {headers.map((header, j) => (
                  <td key={j}>{row[header.key]}</td>
                ))}
                {actions && actions.length > 0 ? (
                  <td className={styles.actions_cell}>
                    {actions.map((action, index) => {
                      return (
                        <Button
                          key={index}
                          onClick={() => action.onClick(row)}
                          className={styles.action_button}
                        >
                          {action.component()}
                        </Button>
                      );
                    })}
                  </td>
                ) : null}
              </tr>
            );
          })
        ) : (
          <tr style={{ textAlign: "center" }}>
            <td colSpan="5">No users found</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default DataTable;
