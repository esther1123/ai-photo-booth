import { Box, Button, Icon, Input, Link, Modal, Pagination, Select, SpaceBetween } from '@cloudscape-design/components';
import React, { useState } from 'react';

const Construct = () => {
  const [showCreate, setShowCreate] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showTagValue, setShowTagValue] = useState(false);

  return (
    <>
      <div style={{ width: '60%', float: 'left' }}>
        <div>
          <span style={{ float: 'left' }}>
            <h2>栏目</h2>
          </span>
          <span style={{ float: 'right' }}>
            <Button onClick={() => setShowCreate(true)}><Icon name='add-plus' />创建</Button>
          </span>
        </div>
        <table>
          <thead>
          <tr>
            <th>栏目名称</th>
            <th>tag-key</th>
            <th>是否由AWS创建</th>
            <th>是否启用</th>
            <th>缩写</th>
            <th>tag-value</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>tag-1</td>
            <td>??</td>
            <td>是</td>
            <td><Icon name="add-plus" />已开启</td>
            <td>T-1</td>
            <td><Button variant='link' onClick={() => setShowTagValue(true)}>详情</Button></td>
            <td><Link href="#">启用地址</Link></td>
          </tr>
          <tr>
            <td>tag-2</td>
            <td>??</td>
            <td>是</td>
            <td><Icon name="add-plus" />已开启</td>
            <td>T-2</td>
            <td><Button variant='link' onClick={() => setShowTagValue(true)}>详情</Button></td>
            <td><Link href="#">启用地址</Link></td>
          </tr>
          <tr>
            <td>tag-3</td>
            <td>??</td>
            <td>是</td>
            <td><Icon name="add-plus" />已开启</td>
            <td>T-3</td>
            <td><Button variant='link' onClick={() => setShowTagValue(true)}>详情</Button></td>
            <td><Link href="#">启用地址</Link></td>
          </tr>
          <tr>
            <td>tag-4</td>
            <td>??</td>
            <td>是</td>
            <td><Icon name="add-plus" />已开启</td>
            <td>T-4</td>
            <td><Button variant='link' onClick={() => setShowTagValue(true)}>详情</Button></td>
            <td><Link href="#">启用地址</Link></td>
          </tr>
          <tr>
            <td>tag-5</td>
            <td>??</td>
            <td>是</td>
            <td><Icon name="add-plus" />已开启</td>
            <td>T-5</td>
            <td><Button variant='link' onClick={() => setShowTagValue(true)}>详情</Button></td>
            <td><Link href="#">启用地址</Link></td>
          </tr>
          </tbody>
        </table>
        <div>
          <h4>说明：</h4>
          <ol>
            <li>说明1</li>
            <li>说明2</li>
            <li>说明3</li>
          </ol>
        </div>
      </div>
      <div style={{ width: '35%', display: 'inline-block', marginLeft: '50px' }}>
        <img src='/images/chart.png' width='95%' height='300px' />
      </div>

      <Modal
        onDismiss={() => setShowTagValue(false)}
        visible={showTagValue}
        closeAriaLabel="Close modal"
        header="栏目：       Tag-value"
        size="large"
      >
        <div style={{ float: 'right', margin: '5px' }}>
          <Button onClick={() => setShowCreateForm(true)}><Icon name="add-plus" />创建</Button>
        </div>
        <table>
          <thead>
          <tr>
            <th>Tag-value</th>
            <th>异常状态</th>
            <th>处理地址</th>
            <th>是否检查</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
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

      <Modal
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
      </Modal>

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
            <td><Input value="" /></td>
          </tr>
          <tr>
            <th>Tag-value</th>
            <td><Input value="" /></td>
          </tr>
          <tr>
            <th>缩写</th>
            <td><Input value="" /></td>
          </tr>
          <tr>
            <th>备注</th>
            <td><Input value="" /></td>
          </tr>
        </table>
      </Modal>
    </>
  );
};

export default Construct;
