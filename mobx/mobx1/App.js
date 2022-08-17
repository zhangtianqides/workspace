import React from 'react';
import { Button } from 'antd';
import './App.less';

import { counterstore } from './store/counter'
import { observer } from 'mobx-react-lite'

const App = () => (
  <div className="App">
    {/* 把store中的count渲染一下 */}
    {counterstore.count}
    {/* 绑定点击事件 */}
    <br />
    <Button type="primary" onClick={counterstore.addCount}>自加</Button>
  </div>
);

export default observer(App);