import { useDispatch, useSelector } from "react-redux";
import { createBrowserRouter, Navigate, Outlet, useParams } from "react-router-dom";

const Home = () => (
  <>
    <h1>home</h1>
    <Outlet />
  </>
);

const About = () => <h1>about</h1>;

const Team = () => (
  <>
    <h1>team</h1>
    <Outlet />
  </>
);

const Login = () => <h1>login</h1>;

const Details = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  console.log(data, "data");
  return (
    <>
      <h1>Details</h1>
      {data.name}
      <h1>{data.count}</h1>
      <button onClick={() => dispatch({ type: "add" })}>add</button>
      <Outlet />
    </>
  );
};
const Product = () => {
  const { productId } = useParams(); // Correctly use useParams to get productId
  return <h1>Product ID: {productId}</h1>; // Display the productId
};

const isAuthenticated = () => {
  // Logic to check if the user is authenticated
  return true; // Replace this with actual authentication logic
};

// eslint-disable-next-line react/prop-types, react-refresh/only-export-components
const PrivateRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute element={<Home />} />,
    children: [
      {
        path: "team",
        element: <Team />,
      },
    ],
  },
  {
    path: "/details",
    element: <PrivateRoute element={<Details />} />,
    children: [
      {
        path: ":productId",
        element: <Product />,
      },
    ],
  },
  {
    path: "/about",
    element: <PrivateRoute element={<About />} />,
  },
  {
    path: "/task",
    element: <PrivateRoute element={<h1>task</h1>} />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
