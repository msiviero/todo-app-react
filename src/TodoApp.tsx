import { CheckCircleOutlined, DeleteOutlined, DownOutlined, EditOutlined } from '@ant-design/icons';
import { App, Layout, Typography, Table, Button, Dropdown, Space, ConfigProvider, theme, Flex } from 'antd';
import type { MenuProps, TableColumnsType } from 'antd';
import React from 'react';

const { Header, Content } = Layout;
const { Title } = Typography;

const titleStyle = {
    color: '#fff',
}

const contentStyle = {
    margin: '0 auto',
    padding: '24px 64px',
    width: '100%',
    maxWidth: '800px',
};

interface TodoEl {
    key: React.Key;
    title: string;
    isCompleted: boolean;
}

const data: TodoEl[] = [
    {
        key: 1,
        title: 'Learn React',
        isCompleted: false,
    },
    {
        key: 2,
        title: 'Learn TypeScript',
        isCompleted: true,
    },
];

const items: MenuProps['items'] = [
    {
        icon: <CheckCircleOutlined />,
        label: <a>Toggle complete</a>,
        key: '0',
    },
    {
        icon: <EditOutlined />,
        label: <a>Edit</a>,
        key: '1',
    },
    {
        icon: <DeleteOutlined />,
        label: <a>Delete</a>,
        key: '2',
    },
];

const columns: TableColumnsType<TodoEl> = [
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        render: (text: string, row: TodoEl) => (
            <Flex justify='space-between'>
                <span style={{ textDecoration: row.isCompleted ? 'line-through' : '' }}>{text}</span>
                <Dropdown menu={{ items }} trigger={['click']}>
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            Actions
                            <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
            </Flex>
        ),
        defaultSortOrder: 'ascend',
        sorter: (a, b) => a.title.localeCompare(b.title),
        onFilter: (value, record) => record.isCompleted === value,
        filters: [{
            text: 'Show uncompleted only',
            value: false,
        }],
    },
];

export const TodoApp: React.FC = () => (
    <ConfigProvider theme={{ algorithm: [theme.defaultAlgorithm] }}>
        <App>
            <Layout style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
                <Header>
                    <Title style={titleStyle}>Todo App</Title>
                </Header>
                <Content style={contentStyle}>
                    <Table<TodoEl> dataSource={data} columns={columns} pagination={false} showSorterTooltip={{ target: 'sorter-icon' }} />
                    <div style={{ padding: '24px 0' }}>
                        <Button type="primary">Create</Button>
                    </div>
                </Content>
            </Layout>
        </App>
    </ConfigProvider>
)
