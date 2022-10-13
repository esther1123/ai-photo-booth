import { Box, Button, Icon, Input, Link, Modal, Pagination, Select, SpaceBetween } from '@cloudscape-design/components';
import React, { useState } from 'react';

const Construct = () => {
  const [showCreate, setShowCreate] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showTagValue, setShowTagValue] = useState(false);
  const [name, setName] = useState("");
  const [pin, setPin] = useState("");

  return (
    <>
      <div style={{ width: '60%', float: 'left' }}>
        <div>
          <span style={{ float: 'left' }}>
            <h2>成本标签</h2>
          </span>
          <span style={{ float: 'right' }}>
            <Button onClick={() => setShowCreate(true)}><Icon name='add-plus' />创建</Button>
          </span>
          <a href="https://us-east-1.console.aws.amazon.com/billing/home#/tags" target="_blank" rel="noreferrer" style={{ float: 'right' }}>
            <Button>启用地址</Button>
          </a>
        </div>
        <table>
          <thead>
          <tr>
            <th>栏目名称</th>
            <th>Tag-key</th>
            <th>是否启用</th>
            <th>缩写</th>
            <th>Tag-value</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>新房</td>
            <td>chengbenA</td>
            <td><Icon name="add-plus" />已开启</td>
            <td>CA</td>
            <td><Button variant='link' onClick={() => setShowTagValue(true)}>详情</Button></td>
          </tr>
          </tbody>
        </table>
      </div>
      <div style={{ width: '35%', display: 'inline-block', marginLeft: '50px' }}>
        <img src='/images/chart.png' width='95%' height='300px' />
      </div>

      <Modal
        onDismiss={() => setShowTagValue(false)}
        visible={showTagValue}
        closeAriaLabel="Close modal"
        header="成本标签 value"
        size="large"
      >
        {/* <div style={{ float: 'right', margin: '5px' }}>
          <Button onClick={() => setShowCreateForm(true)}><Icon name="add-plus" />创建</Button>
        </div> */}
        <table>
          <thead>
          <tr>
            <th>Tag-key</th>
            <th>Name</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>CA-loupan</td>
            <td>楼盘</td>
          </tr>
          <tr>
            <td>test</td>
            <td>测试</td>
          </tr>
          </tbody>
        </table>
        <div style={{ marginLeft: '80%' }}>
          <Pagination
            currentPageIndex={1}
            pagesCount={3}
          />
        </div>
      </Modal>

      {/* <Modal
        onDismiss={() => setShowCreateForm(false)}
        visible={showCreateForm}
        header="创建新Tag-value"
        size="medium"
        footer={
          <Box float="right">
            <SpaceBetween direction="horizontal" size="xs">
              <Button variant="link" onClick={() => setShowCreateForm(false)}>取消</Button>
              <Button variant="primary" onClick={() => setShowCreateForm(false)}>确定</Button>
            </SpaceBetween>
          </Box>
        }
      >
        <table>
          <tr>
            <th>Tag-value</th>
            <td><Input value="" /></td>
          </tr>
          <tr>
            <th>备注</th>
            <td><Input value="" /></td>
          </tr>
          <tr>
            <th>是否检查</th>
            <td>
              <Select
                selectedOption={{ label: '是', value: 'y' }}
                options={[
                  { label: '是', value: 'y' },
                  { label: '否', value: 'n' }
                ]} />
            </td>
          </tr>
        </table>
      </Modal> */}

      <Modal
        onDismiss={() => setShowCreate(false)}
        visible={showCreate}
        header="创建新栏目"
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
            <th>栏目名称</th>
            <td><Input onChange={({ detail }) => setName(detail.value)} value={name}/></td>
          </tr>
          <tr>
            <th>Tag-key</th>
            <td>
              <Select
                selectedOption={{ label: 'chengbenA', value: 't' }}
                options={[
                  { label: 'chengbenA', value: 'a' },
                  { label: 'chengbenB', value: 'b' },
                  { label: 'costA', value: 'cA' },
                  { label: 'costAA', value: 'cAA' },
                  { label: 'Description', value: 'd' },
                  { label: 'name', value: 'n' },
                  { label: 'Name', value: 'N' },
                  { label: 'Owner', value: 'O' }
                ]} />
            </td>
          </tr>
          <tr>
            <th>缩写</th>
            <td><Input onChange={({ detail }) => setPin(detail.value)} value={pin}/></td>
          </tr>
          {/* <tr>
            <th>备注</th>
            <td>
              <Select
                selectedOption={{ label: 'Resource Type', value: 't' }}
                options={[
                  { label: 'Resource Type', value: 'type' },
                  { label: 'Resource ID', value: 'id' }
                ]} />
            </td>
          </tr> */}
        </table>
      </Modal>
    </>
  );
};

export default Construct;
