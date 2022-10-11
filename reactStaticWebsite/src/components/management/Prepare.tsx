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
          <th>当前状态</th>
          <th>开启时间</th>
          <th>开启地址</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Config</td>
          <td>否</td>
          <td><Icon name="add-plus" />已开启</td>
          <td>2022-08-01</td>
          <td><Link href="https://us-east-1.console.aws.amazon.com"
                    target="_blank">us-east-1.console.aws.amazon.com</Link></td>
        </tr>
        <tr>
          <td>Cost and Explorer</td>
          <td>否</td>
          <td><Icon name="add-plus" />已开启</td>
          <td>2022-07-26</td>
          <td><Link href="https://us-east-1.console.aws.amazon.com"
                    target="_blank">us-east-1.console.aws.amazon.com</Link></td>
        </tr>
        </tbody>
      </table>
      <Box margin={'l'}>
        <h4>说明：</h4>
        <ol>
          <li>说明1</li>
          <li>说明2</li>
          <li>说明3</li>
        </ol>
      </Box>
    </Box>
  );
};

export default Prepare;
