import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import WatchList from "./Pages/WatchList";
import Movies from "./Pages/Movies";
import Banner from "./components/Banner";
import { Navigate } from "react-router-dom";

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies />
              </>
            }
          />
          <Route
            path="/WatchList"
            element={
              <WatchList />
            }
          />
          <Route path="/Movies" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
