import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Kitchen from "./pages/Kitchen";
import EditRecipe from "./pages/EditRecipe";
import AddRecipe from "./pages/AddRecipe";
import Search from "./pages/Search";
import Protected from "./utils/Protected";
import { HashRouter, Routes, Route } from "react-router-dom";
import Recipe from "./pages/Recipe";

function App() {
  const [authenticated, setAuthenticated] = useState(undefined);
  const [uid, setUid] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route
            path="*"
            element={
              <Protected redirect={authenticated} path="/kitchen">
                <Login
                  authenticated={authenticated}
                  setAuthenticated={setAuthenticated}
                  uid={uid}
                  setUid={setUid}
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                />
              </Protected>
            }
          />
          <Route
            path="/register"
            element={
              <Register
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
                uid={uid}
                setUid={setUid}
              />
            }
          />
          <Route
            path="/kitchen"
            element={
              <Protected redirect={!authenticated} path="/">
                <Kitchen
                  authenticated={authenticated}
                  setAuthenticated={setAuthenticated}
                  uid={uid}
                />
              </Protected>
            }
          />
          <Route
            path="/addRecipe"
            element={
              <Protected redirect={!authenticated} path="/">
                <AddRecipe uid={uid} />
              </Protected>
            }
          />
          <Route
            path="/recipe/:id"
            element={
              <Protected redirect={!authenticated} path="/">
                <Recipe uid={uid} />
              </Protected>
            }
          />
          <Route
            path="/editRecipe/:id"
            element={
              <Protected redirect={!authenticated} path="/">
                <EditRecipe uid={uid} />
              </Protected>
            }
          />
          <Route
            path="/search/:query"
            element={
              <Protected redirect={!authenticated} path="/">
                <Search uid={uid} />
              </Protected>
            }
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
