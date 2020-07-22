import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import Dashboard from './Components/Dashboard/Dashboard';
import Calendar from './Components/Dashboard/Calendar/ReactCalendar';
import Boards from './Components/Dashboard/Boards/Boards';
import BoardTwo from './Components/Dashboard/Boards/BoardTwo';
import BoardThree from './Components/Dashboard/Boards/BoardThree';
import Teams from './Components/Dashboard/Teams/Teams';
import Profile from './Components/Dashboard/Profile/Profile';

export default (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route path="/dashboard/calendar" component={Calendar} />
    <Route path="/dashboard/boards" component={Boards} />
    <Route path="/dashboard/boards" component={Boards} />
    <Route path="/dashboard/boardstwo" component={BoardTwo} />
    <Route path="/dashboard/boardsthree" component={BoardThree} />
    <Route path="/dashboard/teams" component={Teams} />
    <Route path="/dashboard/profile" component={Profile} />
  </Switch>
);
