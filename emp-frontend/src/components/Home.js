import React from 'react';
import { UserList } from "../components/UserList";
import {Header  } from "../components/Header";

export const Home = () => {
  return (
    <div>
      <Header />
      <UserList />
    </div>
  )
}
