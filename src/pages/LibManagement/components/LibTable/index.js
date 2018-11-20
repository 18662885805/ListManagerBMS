/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Tab } from '@icedesign/base';
import LibTable from './LibTable';
import BorrowTable from './BorrowTable';

const TabPane = Tab.TabPane;

const tabs = [
  { tab: 'List', key: '1', content: <LibTable /> },
  { tab: 'Detail', key: '2', content: <BorrowTable /> },
];

export default class DonationForm extends Component {
  static displayName = 'DonationForm';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <IceContainer style={styles.container}>
        <div style={styles.title}>ListManager</div>
        <Tab>
          {tabs.map((item) => {
            return (
              <TabPane key={item.key} tab={item.tab}>
                {item.content}
              </TabPane>
            );
          })}
        </Tab>
      </IceContainer>
    );
  }
}

const styles = {
  title: {
    marginBottom: '15px',
    fontSize: '18px',
    fontWeight: '500',
    color: 'rgba(0, 0, 0,.85)',
  },
};
