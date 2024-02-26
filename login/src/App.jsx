import { Suspense } from "react";

import Routes from "../src/routes/index";
import "./App.css";

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes />
    </Suspense>
  );
};

export default App;
