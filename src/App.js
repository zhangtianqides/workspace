import React from 'react';
import './App.less';

import { observer } from 'mobx-react-lite'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AuthComponents from '@/components/AuthComponents';

// 因为替换了路径，所以，这里可以直接用@替换，方便后面打包
import Login from '@/pages/Login'
import GeekLayout from '@/pages/GeekLayout'


function App() {
  return (
    // 路由配置
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* 创建路由的path路径和组件对应关系 */}
          <Route path='/' element={<AuthComponents><GeekLayout /></AuthComponents>} />
          <Route path='/Login' element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
};

// 从mobx-react-lite中调出，监视数据变化，有变化后更新组件
export default observer(App);