import { Tabs } from '@cloudscape-design/components';
import React from 'react';
import Construct from './Construct';
import Prepare from './Prepare';
import Whitelist from './Whitelist';

const Management = () => {
  return (
    <Tabs
      tabs={[
        {
          label: '准备',
          id: 'prepare',
          content: <Prepare />
        },
        {
          label: '建设',
          id: 'construct',
          content: <Construct />
        },
        {
          label: '白名单',
          id: 'whitelist',
          content: <Whitelist />
        }
      ]}
    />
  );
}

export default Management;