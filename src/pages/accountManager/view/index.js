import React, { Component } from 'react';
import { Table, Button, Row, Col, Tabs } from 'antd';
import { connect } from 'react-redux';
import Slider, { Range } from 'rc-slider';
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css';
import AccountList from './accountList';
import RoleList from './roleList';

const TabPane = Tabs.TabPane;
const Handle = Slider.Handle;
const handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
    return (
      <Tooltip
        prefixCls="rc-slider-tooltip"
        overlay={value}
        visible={dragging}
        placement="top"
        key={index}
      >
        <Handle value={value} {...restProps} />
      </Tooltip>
    );
  };

export default class Index extends Component {
    render() {
       const { data } = this.props;
        return (
        <div>
            <Slider min={0} max={20} defaultValue={3} handle={handle} />
            <Range />
            <Button onClick={()=>{
              this.props.history.push('./ts')
            }}>typescript</Button>
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
