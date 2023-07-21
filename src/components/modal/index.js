import { Modal } from "antd";
import React from "react";

const BasicModal = ({ children, title, handleCancel, handleOk, open, footer }) => {
  return (
    <>
      <Modal title={title} open={open} onOk={handleOk} onCancel={handleCancel} footer={footer}>
        {children}
      </Modal>
    </>
  );
};
export default BasicModal;
