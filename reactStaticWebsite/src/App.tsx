import { AppLayout, BreadcrumbGroup, HelpPanel, Icon, Link, SideNavigation } from '@cloudscape-design/components';
import React, { useState } from 'react';
import Management from './components/management/Management';

const toolsContent = (
  <HelpPanel
    header={<h2>云中照相馆</h2>}
    footer={
      <>
        <h3>
          了解更多{' '}
          <span role="img">
            <Icon name="external" />
          </span>
        </h3>
        <ul>
          <li>
            <Link href="https://aws.amazon.com/cn/campaigns/freecenter/">
              亚马逊云服务
            </Link>
          </li>
          <li>
            <Link href="https://cloudscape.design/">
              Cloudscape Design System
            </Link>
          </li>
        </ul>
      </>
    }
  >
    帮助信息
  </HelpPanel>
);

const App = () => {
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isNavigationOpen, setIsNavigationOpen] = useState(true);

  // TODO: delete
  console.log(window.API_ENDPOINT);
  return (
    <AppLayout
      tools={toolsContent}
      toolsOpen={isToolsOpen}
      onToolsChange={({ detail: { open } }) => setIsToolsOpen(open)}
      contentType="default"
      content={
        <Management />
      }
      navigation={
        <SideNavigation
          activeHref={'#'}
          header={{ href: '#', text: 'Tag 工作台' }}
          items={[
            { type: 'link', text: 'Tag 管理', href: '#' }
          ]}
        />
      }
      navigationOpen={isNavigationOpen}
      onNavigationChange={({ detail: { open } }) => setIsNavigationOpen(open)}
      breadcrumbs={
        <BreadcrumbGroup
          items={[
            { text: 'Tag 工作台', href: '#' },
            { text: 'Tag 管理', href: '#' }
          ]}
        />
      }
    />
  );
}

export default App;
