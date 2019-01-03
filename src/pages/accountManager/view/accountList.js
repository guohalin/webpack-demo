import React, { Component } from 'react';
import { Table, Icon, Button, Modal, Form, Row, Select, Col, Input } from 'antd';
import { connect } from 'react-redux';
import { getAccountListData } from '../action';

const FormItem = Form.Item;
const Option = Select.Option;

@Form.create()
@connect(
    state => ({
        data:state.accountManagerReducer.accountList,
        roleList:state.accountManagerReducer.roleList
    }),
    { getAccountListData }
)
export default class accountList extends Component {
    constructor() {
        super();
        this.state={
            visible:false
        }
    }
    componentDidMount = () => {
        this.init();
    }
    init = () => {
        let { getAccountListData } = this.props;
        getAccountListData();
    }
    renderTable() {
        const { data } = this.props;
        const columns = [
            { title:'账号', dataIndex:'username' },
            { title:'姓名', dataIndex:'name' },
            { title:'角色',  dataIndex:'roleName', width:600 },
            {
                title:'操作',
                dataIndex:'option',
                render: (text,record,index) => (
                    <span>
                        <Icon 
                            type='edit'
                            // onClick={() => {
                            //     this.props.history.push(`./roleEdit?roleId=${record.id}`);
                            // }}
                            style={{marginRight:10, cursor:'pointer'}}
                        />
                        <Icon
                            type='delete'
                            // onClick={this.deleteRole.bind(this,record,index)}
                            style={{cursor:'pointer'}}
                        />
                    </span>
                )
            }
        ];
        return  (<Table
            rowKey={(record)=>record.id}
            columns={columns}
            dataSource={ data }
            bordered
        />)
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const { roleList } = this.props;
        const formItemLayout = {
            labelCol: {
                xs: { span: 4 },
                xl: { span: 4 }
            },
            wrapperCol: {
                xs: { span: 16 },
                xl: { span: 18 }
            }
        };
        return (
        <div>
            <Button type='primary' style={{ marginBottom: 10 }} onClick={()=>{this.setState({ visible:true })}}>新增账号</Button>
            {this.renderTable()}
            <Modal
                visible={this.state.visible}
                onCancel={()=>{this.setState({ visible: false })}}
                title="新增账号"
            >
                <Form>
                    <Row>
                        <Col>
                            <FormItem
                                label='角色'
                                {...formItemLayout}
                            >
                                {
                                    getFieldDecorator('userRoles', {
                                        initialValue:[]
                                    })(
                                        <Select
                                            mode="multiple"
                                            placeholder="请选择角色"
                                        >
                                            {
                                                roleList?roleList.map((item, index) => {
                                                    return <Option key={Number(item.id)} value={Number(item.id)}>{item.name}</Option>;
                                                }):''
                                            }
                                        </Select>
                                    )
                                }
                            </FormItem>
                            <FormItem
                                label='账号'
                                {...formItemLayout}
                            >
                                {
                                    getFieldDecorator('userName', {
                                        initialValue:''
                                    })(
                                        <Input />
                                    )
                                }
                            </FormItem>
                            <FormItem
                                label='姓名'
                                {...formItemLayout}
                            >
                                {
                                    getFieldDecorator('name', {
                                        initialValue:''
                                    })(
                                        <Input />
                                    )
                                }
                            </FormItem>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </div>
        )
    }
}
