import React, { Component } from 'react';
import { Table, Button, Row, Col, Tabs } from 'antd';
import { connect } from 'react-redux';
import AccountList from './accountList';
import RoleList from './roleList'

const TabPane = Tabs.TabPane;

export default class Index extends Component {
    render() {
       const { data } = this.props;
        return (
        <div>
            <Row>
                <Tabs defaultActiveKey="1" animated={false}>
                    <TabPane tab="角色管理" key="1"><RoleList /></TabPane>
                    <TabPane tab="账号管理" key="2"><AccountList /></TabPane>
                </Tabs>
           </Row>
        </div>
        )
    }
}
