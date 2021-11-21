import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Teams from "./routes/Teams";
import Team from "./routes/Team";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="teams" element={<Teams />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select a Team</p>
              </main>
            }
          />
          <Route path=":teamId" element={<Team />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
