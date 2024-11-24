import "./Sider.css";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { signOut } from "../../redux/slices/authSlice";

import { Layout, Menu, Button, Modal } from "antd";
import { UserOutlined, SettingOutlined, LoginOutlined } from "@ant-design/icons";

const { Sider } = Layout;

const SiderComponent = ({ collapsed }) => {
   // const dispatch = useDispatch();
   const [isModalVisible, setIsModalVisible] = useState(false);

   const showModal = () => {
      setIsModalVisible(true);
   };

   const handleOk = () => {
      dispatch(signOut());
      setIsModalVisible(false);
   };

   const handleCancel = () => {
      setIsModalVisible(false);
   };

   return (
      <Sider trigger={null} collapsed={collapsed} className="sider">
         <div>
            {
               collapsed ? (
                  <div className="text-center py-6">
                     <div className="flex items-center justify-center flex-col">
                        <div className="flex items-center justify-center gap-1 text-[10px] font-bold">
                           <p className="text-white">BARBER</p>
                           <p className="text-orange-600">SHOP</p>
                        </div>
                     </div>
                  </div>
               ) : (
                  <div className="text-center p-3">
                     <div className="flex items-center justify-center flex-col">
                        <div className="flex items-center justify-center gap-1 text-2xl font-bold">
                           <p className="text-white">BARBER</p>
                           <p className="text-orange-600">SHOP</p>
                        </div>
                     </div>
                  </div>
               )
            }
         </div>

         <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
               {
                  key: "1",
                  icon: <UserOutlined />,
                  label: <NavLink to="/dashboard/users">Users</NavLink>,
               },
               {
                  key: "2",
                  icon: <SettingOutlined />,
                  label: <NavLink to="/dashboard/settings">Settings</NavLink>,
               },
            ]}
         />

         <div className="text-center p-3 flex-1 flex items-end">
            <Button onClick={showModal} className="w-full" danger type="primary">
               <LoginOutlined />{!collapsed && "Sign Out"}
            </Button>
         </div>
         
         <Modal
            title="Confirm Sign Out"
            open={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            okText="Yes"
            cancelText="No"
            maskClosable={false}
         >
            <p>Do you want to exit the platform?</p>
         </Modal>
      </Sider>
   );
};

export default SiderComponent;