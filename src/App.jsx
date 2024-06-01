import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import SingleMovie from "./SingleMovie";
import Error from "./Error";
import Login from "./Login";
import Signup from "./Signup";
import MyList from "./MyList";  // Import MyList component
import PrivateRoute from "./PrivateRoute"; // You'll create this component

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="movie/:id" element={<PrivateRoute><SingleMovie /></PrivateRoute>} />
        <Route path="my-list" element={<PrivateRoute><MyList /></PrivateRoute>} /> 
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
