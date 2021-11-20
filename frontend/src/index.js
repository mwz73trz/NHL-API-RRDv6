import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Teams from "./routes/Teams";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="teams" element={<Teams />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
