import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, Input, Table, Space } from 'antd';

import '../../static/frontend/main.css';

export class App extends Component {
  render() {
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
    };

    const onFinish = (values) => {
      console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };

    const columns = [
      {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
      },
      {
        title: 'is_completed',
        dataIndex: 'is_completed',
        key: 'address',
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <a>Delete</a>
          </Space>
        ),
      },
    ];

    const data = [
      {
        key: '1',
        title: 'John Brown',
        description: 32,
      },
      {
        key: '2',
        title: 'Jim Green',
        description: 42,
      },
      {
        key: '3',
        title: 'Joe Black',
        description: 32,
      },
    ];

    return (
      <div className="container">
        <header>
          <h1>Todo Layout</h1>
        </header>
        <section className="content">
          <section className="todo-form">
            <Form
              {...layout}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item label="title" name="title" rules={[{ required: true, message: 'Please input todo title!' }]}>
                <Input placeholder="제목을 입력하세요." />
              </Form.Item>

              <Form.Item
                label="description"
                name="description"
                rules={[{ required: true, message: 'Please input todo description!' }]}
              >
                <Input placeholder="설명을 입력하세요." />
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
            <Table columns={columns} dataSource={data} />,
          </section>
        </section>
        <footer>하단</footer>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
