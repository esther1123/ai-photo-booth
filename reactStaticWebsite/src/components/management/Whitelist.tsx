import { Box, Button, Icon, Input, Modal, Select, SpaceBetween } from '@cloudscape-design/components';
import React, { useState } from 'react';

const Whitelist = () => {
  const [showCreate, setShowCreate] = useState(false);
  const [content, setContent] = useState("");

  return (
    <>
      <div>
          <span style={{ float: 'left' }}>
            <h2>白名单列表</h2>
          </span>
        <span style={{ float: 'right' }}>
            <Button onClick={() => setShowCreate(true)}><Icon name='add-plus' />创建</Button>
          </span>
      </div>
      <table>
        <thead>
        <tr>
          <th>内容</th>
          <th>类型</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>arn:aws:sns:us-west-2:764142575323:config-topic</td>
          <td>ResoureId</td>
        </tr>
        </tbody>
      </table>

      <Modal
        onDismiss={() => setShowCreate(false)}
        visible={showCreate}
        header="添加白名单成员"
        size="medium"
        footer={
          <Box float="right">
            <SpaceBetween direction="horizontal" size="xs">
              <Button variant="link" onClick={() => setShowCreate(false)}>取消</Button>
              <Button variant="primary" onClick={() => setShowCreate(false)}>确定</Button>
            </SpaceBetween>
          </Box>
        }
      >
        <table>
          <tr>
            <th>内容</th>
            <td><Input onChange={({ detail }) => setContent(detail.value)} value={content}/></td>
          </tr>
          <tr>
            <th>类型</th>
            <td>
              <Select
                selectedOption={{ label: 'ResourceId', value: 't' }}
                options={[
                  { label: 'ResourceId', value: 'id' },
                  { label: 'ResourceType', value: 'type' }
                ]} />
            </td>
          </tr>
        </table>
      </Modal>
    </>
  );
};

export default Whitelist;
