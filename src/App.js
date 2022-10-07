import LeftBar from "./components/LeftBar";
import TopBar from "./components/TopBar";
import HomeLayout from "./Layout/HomeLayout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserPage from "./pages/UserPage";
import Completed from "./pages/Completed";

function App() {
  return (
    <div className="">
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/completed" element={<Completed />}></Route>
          <Route path="/user" element={<UserPage />}></Route>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
