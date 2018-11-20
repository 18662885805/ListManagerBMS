/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import { Grid, Input, Select } from '@icedesign/base';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
} from '@icedesign/form-binder';

const { Row, Col } = Grid;
const { Option } = Select;

export default class TableHead extends Component {
  static displayName = 'TableHead';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {},
    };
  }

  formChange = (value) => {
    console.log('value', value);
    this.setState({
      value,
    });
  };

  render() {
    return (
      <IceFormBinderWrapper
        value={this.state.value}
        onChange={this.formChange}
        ref="form"
      >
        <Row wrap gutter="20" style={styles.formRow}>
          <Col l="8">
            <div style={styles.formItem}>
              <span style={styles.formLabel}>ListFilter1：</span>
              <IceFormBinder triggerType="onBlur">
                <Input placeholder="Please input" name="id1" size="large" />
              </IceFormBinder>
            </div>
          </Col>
          <Col l="8">
            <div style={styles.formItem}>
              <span style={styles.formLabel}>ListFilter2：</span>
              <IceFormBinder triggerType="onBlur">
                <Input placeholder="Please input" name="id2" size="large" />
              </IceFormBinder>
            </div>
          </Col>
          <Col l="8">
            <div style={styles.formItem}>
              <span style={styles.formLabel}>ListFilter3：</span>
              <IceFormBinder triggerType="onBlur">
                <Input placeholder="Please input" name="id3" size="large" />
              </IceFormBinder>
            </div>
          </Col>
          <Col l="8">
            <div style={styles.formItem}>
              <span style={styles.formLabel}>ListFilter4：</span>
              <IceFormBinder triggerType="onBlur">
                <Select
                  placeholder="Please select"
                  multiple
                  name="id4"
                  size="large"
                  style={{ minWidth: '200px' }}
                >
                  <Option value="technology">Option1</Option>
                  <Option value="professional">Option2</Option>
                  <Option value="management">Option3</Option>
                  <Option value="other">Option4</Option>
                </Select>
              </IceFormBinder>
            </div>
          </Col>
          <Col l="8">
            <div style={styles.formItem}>
              <span style={styles.formLabel}>ListFilter5：</span>
              <IceFormBinder triggerType="onBlur">
                <Input placeholder="Please input" name="id5" size="large" />
              </IceFormBinder>
            </div>
          </Col>
        </Row>
      </IceFormBinderWrapper>
    );
  }
}

const styles = {
  container: {
    margin: '20px',
    padding: '0',
  },
  title: {
    margin: '0',
    padding: '20px',
    fonSize: '16px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    color: 'rgba(0,0,0,.85)',
    fontWeight: '500',
    borderBottom: '1px solid #eee',
  },
  formRow: {
    padding: '10px 20px',
  },
  formItem: {
    display: 'flex',
    alignItems: 'center',
    margin: '10px 0',
  },
  formLabel: {
    minWidth: '70px',
  },
};
