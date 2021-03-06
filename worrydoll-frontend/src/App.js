import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';

const App = () => {
  return (
    <>
      <Helmet>
        <title>WorryDoll</title>
      </Helmet>
      <Switch>
        <Route component={HomePage} path="/" exact />
        <Route component={PostListPage} path={['/@:username', '/main']} exact />
        <Route component={LoginPage} path="/login" />
        <Route component={RegisterPage} path="/register" />
        <Route component={WritePage} path="/write" />
        <Route component={PostPage} path="/@:username/:postId" />
      </Switch>
    </>
  );
};

export default App;
