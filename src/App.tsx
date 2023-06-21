import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import resets from './components/_resets.module.css';

import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';

import { Home } from './components/Home/Home.js';
import { Chat } from './components/Chat/Chat.js';


interface Props {
  className?: string;
}

export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/chat"} element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </>
    // <div className={`${resets.clapyResets} ${classes.root}`}>
    //   <Home1 />
    // </div>
  );
});
