import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Error from "./pages/Error.jsx";
import NavBar from "./components/NavBar";
import "./App.css";
// import UserProfile from './components/UserProfile';
import Repositories from "./components/Repositories";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<NavBar />} />
            <Route path="repos" element={<Repositories />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
