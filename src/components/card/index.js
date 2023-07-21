import React from "react";
import {
  EditOutlined,
  HeartOutlined,
  DeleteFilled,
  HeartFilled,
  PhoneOutlined,
  GlobalOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Card, Typography } from "antd";
const { Text } = Typography;
const { Meta } = Card;
const UserCard = ({ user, onFavorite, onEdit, onDelete }) => {
  return (
    <Card
      style={{ borderRadius: 0 }}
      cover={<img alt="" src={user.avatar} className="user-avatar" />}
      actions={[
        <div
          onClick={() => {
            onFavorite(user.id);
          }}
        >
          {user.isFavorite ? (
            <HeartFilled
              key="like"
              style={{ fontSize: 18, color: "rgb(255, 0, 0)" }}
            />
          ) : (
            <HeartOutlined
              key="like"
              style={{ fontSize: 18, color: "rgb(255, 0, 0)" }}
            />
          )}
        </div>,
        <div
          onClick={() => {
            onEdit(user);
          }}
        >
          <EditOutlined key="edit" style={{ fontSize: 18 }} />
        </div>,
        <div
          onClick={() => {
            onDelete(user.id);
          }}
        >
          <DeleteFilled key="delete" style={{ fontSize: 18 }} />
        </div>,
      ]}
    >
      <Meta
        title={user.name}
        description={
          <>
            <div className="info-row">
              <MailOutlined /> <Text>{user.email}</Text>
            </div>
            <div className="info-row">
              <PhoneOutlined /> <Text>{user.phone}</Text>
            </div>
            <div className="info-row">
              <GlobalOutlined /> <Text>{user.website}</Text>
            </div>
          </>
        }
      />
    </Card>
  );
};
export default UserCard;
