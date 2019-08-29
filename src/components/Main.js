import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home/Home';
import Tuijian from './Tuijian/Tuijian';
import Publish from './Publish/Publish';
import Personal from './Personal/Personal';
import Loading from './Loading/Loading';
import Index from './Index/Index';
import Setting from './Personal/Setting';
import ShowContent from './Index/ShowContent';
import ZhanWenContent from './Tuijian/ZhanWenContent';
import UserInfon from './Personal/UserInfo';
import Login from './Loading/Login';
const Main = () => {
  return (
    <div>
      <Route path="/" component={Loading} exact />
      <Route path="/home" component={Home} />
      <Route path="/home" component={Index} exact />
      <Route path="/home/tuijian" component={Tuijian} />
      <Route path="/home/Publish" component={Publish} />
      <Route path="/home/personal" component={Personal} />
      <Route path="/personal/setting" component={Setting} />
      <Route path="/show/:id" component={ShowContent} />
      <Route path="/zhanwen/:id" component={ZhanWenContent} />
      <Route path="/userinfo" component={UserInfon} />
      <Route path="/login" component={Login} />
    </div>
  );
};
export default Main;
