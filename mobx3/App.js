import React from 'react';
import './App.less';

import { Button } from 'antd';

import { observer } from 'mobx-react-lite'
import { useStore } from './store/index'

function App() {

  const { counterStore, ListStore } = useStore()

  return (
    <div className="App">
      {counterStore.count}
      <Button type="primary" onClick={counterStore.addCount}>加一</Button>
      <br />
      {ListStore.list.join('-')}
    </div>
  )
};

export default observer(App);