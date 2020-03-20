import React, {Fragment} from 'react';
import { Menu, Avatar, Dropdown, Button } from 'antd';
import { UserOutlined, ArrowLeftOutlined } from '@ant-design/icons';

import './styles.scss'
const MenuItem = Menu.Item

const menu = () => (
  <Menu>
    <MenuItem>
      <a>
        Thông tin tài khoản
      </a>
    </MenuItem>
    <MenuItem>
      <a>
        Đăng xuất
      </a>
    </MenuItem>
  </Menu>
);

export default function index(props) {
  const {isRoot, onBackHome} = props;
  return (
    <Fragment>
      <div>
        {!isRoot && <Button onClick={onBackHome} shape="circle" icon={<ArrowLeftOutlined />} />}
      </div>
      <div className="right-content" >
        <Dropdown overlay={menu} overlayClassName="overlay-user-profile">
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            <Avatar
              style={{
                backgroundColor: '#87d068',
              }}
              icon={<UserOutlined />}
            /> Administrator
          </a>
        </Dropdown>
      </div>
    </Fragment>
  );
}
