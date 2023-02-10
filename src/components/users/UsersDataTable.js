import React from "react";

import { useEffect, useState } from "react";
import { Table, message, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { deleteUser, usersList } from "../../services/users";
import { Loading } from "../Loading";

const UsersDataTable = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // fetch all users from database
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    setLoading(true);

    usersList().then((result) => {
      if (result) {
        setDataSource(result);
      } else {
        console.log("Error: ",);
      }
      setLoading(false);
    });
  };


  const handleDelete = (id) => {
    setLoading(true)
    deleteUser(id).then(result => {
     if(result){
        message.success("User Deleted successfully!")
     }
     setLoading(false)
    })
  }

  const handleEdit = (id) => {
    navigate(`/users/edit/:${id}`)
  }



  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "User Name",
      dataIndex: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
    },
    {
      title: "Website",
      dataIndex: "website",
    },

    {
      key: "999",
      title: "Action",
      dataIndex: "id",
      render: (id) => (
        <div className="flex items-center justify-center gap-10">
            <Button type ="primary" onClick={()=> navigate(`/users/${id}`)}>Detail</Button>
            <Button warning onClick={()=> handleEdit(id)}>Edit</Button>
            <Button danger onClick={()=> handleDelete(id)}>Delete</Button>
            
        </div>  
      ),
    },
  ];

  if (loading) {
    return (
        <div className="container">
            <Loading type='spokes' />
        </div>
    )
  }

  return (
    <div>
      <Table
        loading={loading}
        columns={columns}
        dataSource={dataSource}
        pagination= {false}
      ></Table>
    </div>
  );
};

export default UsersDataTable;
