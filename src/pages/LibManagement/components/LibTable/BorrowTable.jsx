import React, { Component } from 'react';
import { Table, Pagination } from '@icedesign/base';
import BorrowTableFilter from './BorrowTableFilter';

// MOCK 数据，实际业务按需进行替换
const getData = () => {
  return(
    [
      {
      id1: '100001',
      id2: '01A',
      id3: '01B',
      id4: '01C',
      id5: '01D',
      id6: '01E',
      id7: '01F',
      id8: '01G',
    },{
      id1: '100002',
      id2: '02A',
      id3: '02B',
      id4: '02C',
      id5: '02D',
      id6: '02E',
      id7: '02F',
      id8: '02G',
    },{
      id1: '100003',
      id2: '03A',
      id3: '03B',
      id4: '03C',
      id5: '03D',
      id6: '03E',
      id7: '03F',
      id8: '03G',
    },{
      id1: '100004',
      id2: '04A',
      id3: '04B',
      id4: '04C',
      id5: '04D',
      id6: '04E',
      id7: '04F',
      id8: '04G',
    },{
      id1: '100005',
      id2: '05A',
      id3: '05B',
      id4: '05C',
      id5: '05D',
      id6: '05E',
      id7: '05F',
      id8: '05Z',
    }
  ]
  )  
};

export default class BorrowTable extends Component {
  static displayName = 'BorrowTable';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      current: 1,
    };
  }

  handlePaginationChange = (current) => {
    this.setState({
      current,
    });
  };

  onChange = (selectedItems) => {
    console.log('onChange callback', selectedItems);
  };

  renderOper = () => {
    return <a style={{ ...styles.button, ...styles.detailButton }}>Operation</a>;
  };

  renderState = (value) => {
    return <span style={styles.state}>{value}</span>;
  };

  render() {
    const dataSource = getData();
    const { current } = this.state;
    return (
      <div style={styles.container}>
        <BorrowTableFilter />
        <Table dataSource={dataSource} hasBorder={false} style={styles.table}>
          <Table.Column title="Type1" dataIndex="id1" />
          <Table.Column title="Type2" dataIndex="id2" />
          <Table.Column title="Type3" dataIndex="id3" />
          <Table.Column title="Type4" dataIndex="id4" />
          <Table.Column title="Type5" dataIndex="id5" />
          <Table.Column title="Type6" dataIndex="id6" />
          <Table.Column title="Type7" dataIndex="id7" />
          <Table.Column title="Type8" dataIndex="id8" />
          <Table.Column title="Operation" cell={this.renderOper} />
        </Table>
        {/* 
          <Pagination
            style={styles.pagination}
            current={current}
            onChange={this.handlePaginationChange}
          />
        */}
        
      </div>
    );
  }
}

const styles = {
  table: {
    marginTop: '10px',
  },
  button: {
    display: 'inline-block',
    padding: '6px 12px',
    fontSize: '12px',
    borderRadius: '4px',
    color: '#fff',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  detailButton: {
    background: '#41cac0',
    marginRight: '8px',
  },
  pagination: {
    margin: '20px 0',
    textAlign: 'right',
  },
};
