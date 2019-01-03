import React, { Component } from 'react';
import { Table, Icon } from 'antd';
import { connect } from 'react-redux';
import { getRoleListData } from '../action';

@connect(
    state => ({
        data:state.accountManagerReducer.roleList
    }),
    { getRoleListData }
)
export default class roleList extends Component {
    componentDidMount = () => {
        this.init();
    }
    init = () => {
        let { getRoleListData } = this.props;
        getRoleListData();
    }
    renderTable() {
        const { data } = this.props;
        const columns = [
            { title:'角色ID', dataIndex:'id' },
            { title:'角色名称', dataIndex:'name' },
            { title:'角色描述', dataIndex:'remark',
            },
            { title:'拥有本角色的用户数', dataIndex:'haveUser', width:160 },
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
        return (
            <div>
                {this.renderTable()}
            </div>
        )
    }
}
