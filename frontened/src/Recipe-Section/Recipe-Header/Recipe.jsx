import React from 'react';
import "./Recipe.scss"
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const items = [
    {
      key: '1',
      label: (
        <a >
          A to Z
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a>
          Relevance
        </a>
      ),
      icon: <SmileOutlined />,
    },
    {
      key: '3',
      label: (
        <a>
          Newest
        </a>
      ),
    },
    {
      key: '4',
      label: 'Top Rated',
    },
  ];

function Recipe() {
  return (
    <div className='Recipe-Header'>
      <h2>Recipe</h2>
      <Dropdown
    menu={{
      items,
    }}
  >
    <a >
      <Space>
        Hover me
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
    </div>
  )
}

export default Recipe
