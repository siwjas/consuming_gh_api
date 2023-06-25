import React from "react";
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from "react-router-dom";

import NotFound from "./pages/NotFound";
import Main from "./pages/Main";
import Repos from "./pages/Repos";

function Navigation() {
  return(
    <Router>
      <Routes>

        <Route path="/" element={ <Main /> } exact >
          <Route index element={ <Main /> } />
        </Route>
        <Route path="/repos/:name" element={ <Repos /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </Router>
  )
}

export default Navigation