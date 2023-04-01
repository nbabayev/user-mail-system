import logo from "./logo.svg";
import "./App.css";
import Register from "./pages/register";
import Login from "./pages/login";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Routes,
  useNavigate,
} from "react-router-dom";
import { useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import Post from "./pages/Post";
import CampaignMenu from "./pages/CampaignMenu";
import MailThread from "./pages/MailThread";

const MyRoute = () => {
  // let credentials = sessionStorage.getItem("credentials") ?? {};
  // // let { access_token } = JSON.parse(credentials);
  // // console.log(access_token);
  // let navigate = useNavigate();
  // useEffect(() => {
  //   if (access_token === "") {
  //     navigate("/login");
  //   }
  // }, []);

  return (
    <Routes>
      <Route path="/" exact element={<CampaignMenu />}></Route>
      <Route path="/mail-thread" exact element={<MailThread />}></Route>
    </Routes>
  );
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <MyRoute />
      </BrowserRouter>
    </div>
  );
}

export default App;




// {
//   access_token === "" && (
//     <>
//       <Route path="/login" element={<Login />}></Route>
//       <Route path="/register" element={<Register />}></Route>
//     </>
//   )
// }

//       <Route path="/" exact element={<Dashboard />}></Route>
//       <Route path="/create-post" element={<Post />}></Route>
// {/* <Route path="/profile/:username" element={<Profile />}></Route> */ }

// {/* <Route
//             path="/password-reset/:token"
//             element={<Login resetView />}
//           ></Route> */}