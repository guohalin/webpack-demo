import React from 'react';
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

const chatIndex = () => {
    return (
        <div>
            <Tabs defaultActiveKey="1" animated={false}>
                <TabPane tab="聊天记录" key="1">
                    聊天记录
                </TabPane>
                <TabPane tab="会话信息" key="2">
                    会话信息
                </TabPane>
            </Tabs>
        </div>
    )
}

export default chatIndex;