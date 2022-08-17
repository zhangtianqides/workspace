import React from 'react';
import './App.less';
import { observer } from 'mobx-react-lite'

import { BrowserRouter, Routes, Route } from 'react-router-dom'


// 因为替换了路径，所以，这里可以直接用@替换，方便后面打包
import Login from '@/pages/Login'
import Layout from '@/pages/Layout'

import { Button } from 'antd';



function App() {
  return (
    // 路由配置
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* 创建路由的path路径和组件对应关系 */}
          <Route path='/' element={<Layout />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
        <Button type="primary">Primary Button</Button>
      </div>
    </BrowserRouter>
  )
};

export default observer(App);