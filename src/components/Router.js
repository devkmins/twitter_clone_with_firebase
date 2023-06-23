import { Routes, Route, BrowserRouter } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Navigation from "./Navigation";
import Profile from "../routes/Profile";

function Router({ isLoggedIn, userObj, refreshUser }) {
  return (
    <BrowserRouter>
      {isLoggedIn && <Navigation userObj={userObj} />}
      <Routes>
        {isLoggedIn ? (
          <>
            <Route exact path="/" element={<Home userObj={userObj} />}></Route>
            <Route
              exact
              path="/profile"
              element={
                <Profile userObj={userObj} refreshUser={refreshUser} />
              }></Route>
          </>
        ) : (
          <Route exact path="/" element={<Auth />}></Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
