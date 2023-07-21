import React, { useEffect, useState } from "react";
import { message, Row, Col } from "antd";
// Importing Components
import { UserCard, Splash } from "../../components";
import { getUsers } from "../../services/users.services";
import EditUser from "./edit-user";

const UsersModule = () => {
  const [messageApi] = message.useMessage();
  const [users, setUsers] = useState(null);
  const [userToEdit, setUserToEdit] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    getUsers()
      .then((res) => {
        setUsers([...res]);
      })
      .catch((err) => {
        messageApi.open({
          type: "error",
          content: "Error while getting the users data!",
          duration: 5,
        });
      });
  };

  const handleFavorite = (id) => {
    const _users = [...users];
    const index = _users.findIndex((_u) => _u.id === id);
    _users[index].isFavorite = !_users[index].isFavorite;
    setUsers([..._users]);
  };

  const handleDelete = (id) => {
    const _users = [...users];
    const index = _users.findIndex((_u) => _u.id === id);
    _users.splice(index, 1);
    setUsers([..._users]);
  };

  const handleEdit = (user) => {
    setUserToEdit(user);
  };

  const handleUpdateUser = (values) => {
    const _users = [...users];
    const index = _users.findIndex((_u) => _u.id === userToEdit.id);
    _users[index] = {...userToEdit, ...values};
    setUsers([..._users]);
    setUserToEdit(null)
  }

  if (!users || users?.length === 0) {
    return <Splash />;
  }

  return (
    <div className="users-container">
      <Row gutter={[28, 28]}>
        {users?.map((_u) => {
          return (
            <Col xs={24} sm={24} md={12} lg={6} key={_u.id}>
              <UserCard
                user={_u}
                onFavorite={handleFavorite}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            </Col>
          );
        })}
      </Row>
      {userToEdit && <EditUser
        user={userToEdit}
        handleCancel={() => setUserToEdit(null)}
        handleOk={handleUpdateUser}
      />}
    </div>
  );
};

export default UsersModule;
