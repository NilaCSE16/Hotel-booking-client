import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import { ParallaxProvider } from "react-scroll-parallax";
import AddRoom from "../Pages/AddRoom";
import SingleRoom from "../Pages/SingleRoom";
import AddBlogs from "../Pages/AddBlogs";
import Booking from "../Pages/Booking";
import PrivateRoute from "./PrivateRoute";
import MyBookings from "../Pages/MyBookings";
import UpdateBookings from "../Pages/UpdateBookings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: (
          <ParallaxProvider>
            <Home></Home>
          </ParallaxProvider>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/addRoom",
        element: <AddRoom></AddRoom>,
      },
      {
        path: "/rooms/:id",
        element: <SingleRoom></SingleRoom>,
      },
      {
        path: "/addBlogs",
        element: <AddBlogs></AddBlogs>,
      },
      {
        path: "/booking/:id",
        element: (
          <PrivateRoute>
            <Booking></Booking>
          </PrivateRoute>
        ),
      },
      {
        path: "/myBookings",
        element: (
          <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateBooking",
        element: (
          <PrivateRoute>
            <UpdateBookings></UpdateBookings>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
