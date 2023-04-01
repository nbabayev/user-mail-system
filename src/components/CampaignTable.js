import { Space, Table, Tag } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import { Content } from 'antd/lib/layout/layout';
import moment from 'moment';
import { Button } from 'antd/lib/radio';

const columns = [
  {
    title: '#',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Count',
    key: 'count',
    dataIndex: 'count',
    render: (counts) => {
      console.log(counts)
      return <div className='d-flex flex-column'>
        {counts?.map((c) => {
          // let color = c.length > 5 ? 'geekblue' : 'green';
          // if (tag === 'loser') {
          //   color = 'volcano';
          // }
          return (
            <Tag color={"geekblue"} key={c?.value} className="mb-2 w-25">
              {c?.value} {c?.status}
            </Tag>
          );
        })}
      </div>
    },
  },
  {
    title: 'Created by',
    dataIndex: 'created_by',
    key: 'created_by',
  },
  {
    title: 'Date',
    dataIndex: "date",
    key: 'date',
    render: (_, record) => (
      <Space size="middle">
        {moment(_).format("MMM Do YY")}
      </Space>
    ),
  },
  {
    title: 'Action',
    dataIndex: "action",
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Button>View</Button>
      </Space>
    ),
  },
];


const data = [
  {
    key: '1',
    id: 1,
    name: 'John Brown',
    type: "Email",
    count: [{
      value: 0,
      status: "sent"
    },
    {
      value: 0,
      status: "opened"
    },
    {
      value: 0,
      status: "rated"
    }],
    created_by: "Mesti Nesibov",
    date: new Date(),
    action: "view"
  },
  {
    key: '1',
    id: 1,
    name: 'Jim Green',
    type: "Sms",
    count: undefined,
    created_by: "Mesti Nesibov",
    date: new Date(),
    action: "view"
  },
  {
    key: '1',
    id: 1,
    name: 'Joe Black',
    type: "Email",
    count: undefined,
    created_by: "Mesti Nesibov",
    date: new Date(),
    action: "edit"
  },
];


const CampaignTable = () => {
  return (
    <Table columns={columns} dataSource={data} />
  )
}



export default CampaignTable;