import React from "react";
import "./UserData.css";
import { Table, Button } from "antd";
import { columns } from "../../../storage/columns";
import { useData } from "../../../contexts/DataContext";
import { useHistory } from "react-router";

const UserData = () => {
  const { data } = useData();
  const history = useHistory();

  return (
    <div className="user-data-container">
      <div className="user-data-table">
        <h1>Users Data</h1>
        <div className="user-data-table-action">
          <Button classname="add-user-btn" onClick={() => history.push("/")}>
            Add User
          </Button>
        </div>

        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default UserData;
