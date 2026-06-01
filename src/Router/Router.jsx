import React from "react";
import { createBrowserRouter } from "react-router";
import HomeLayout from "./../Layouts/HomeLayouts/HomeLayout";
import Home from "./../Pages/Home";
import AllPlants from "./../Components/features/AllPlants";

import AuthLayout from "./../Layouts/AuthLayouts/AuthLayout";
import Login from "./../Pages/Login";
import Register from "./../Pages/Register";
import ForgetPassword from "./../Pages/ForgetPassword";
import Error from "./../Pages/Error";
import Faqs from "./../Pages/Faqs";
import Terms from "./../Pages/Terms";
import Privacy from "./../Pages/Privacy";
import AddPlantsWrapper from "./../Components/features/AddPlantsWrapper";
import MyPlantsWrapper from "./../Components/features/MyPlantsWrapper";
import PlantDetails from "../Pages/PlantDetails";

import UpdatePlants from "../Pages/UpdatePlants";
import MyPlants from "../Components/features/MyPlants";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,

        Component: Home,
      },

      {
        path: "/allPlants",
        
        Component: AllPlants,
      },
      {
        path: "/addPlantsWrapper",
        Component: AddPlantsWrapper,
      },
      {
        path: "/myPlants",
        Component: MyPlants,
      },
     

      {
        path: "/myPlantsWrapper",

        Component: MyPlantsWrapper,
      },
      {
        path: "/faqs",
        Component: Faqs,
      },
      {
        path: "/terms",
        Component: Terms,
      },
      {
        path: "/privacy",
        Component: Privacy,
      },
      {
        path: "/updatePlants/:id",
        Component: UpdatePlants,
      },


      {
        path: "/plantdetails/:_id",
        
        
        Component: PlantDetails,
      },
      
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
      {
        path: "/auth/forgetPassword",
        Component: ForgetPassword,
      },
    ],
  },
  {
    path: "/*",
    Component: Error,
  },
]);

export default Router;
