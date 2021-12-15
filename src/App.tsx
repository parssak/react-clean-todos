import React from "react";
import { RecoilRoot } from "recoil";
import "./App.css";
import TaskList from "./components/TaskList";

function App() {
  return (
    <RecoilRoot>
      <div className="app">
        <TaskList />
      </div>
    </RecoilRoot>
  );
}

export default App;
