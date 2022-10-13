import { Box, Icon, Link } from '@cloudscape-design/components';
import React from 'react';

const Prepare = () => {
  return (
    <Box>
      <h2>Review</h2>
      <table>
        <thead>
        <tr>
          <th>AWS服务</th>
          <th>需要开启</th>
          <th>开启地址</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Config</td>
          <td>否</td>
          <td><Link href="https://us-east-1.console.aws.amazon.com/console/home?region=us-east-1#"
                    target="_blank">us-east-1.console.aws.amazon.com</Link></td>
        </tr>
        <tr>
          <td>AWS Cost Explorer</td>
          <td>否</td>
          <td><Link href="https://us-east-1.console.aws.amazon.com/cost-management/home?region=us-east-1#"
                    target="_blank">us-east-1.console.aws.amazon.com</Link></td>
        </tr>
        </tbody>
      </table>
    </Box> 
  );
};

export default Prepare;
