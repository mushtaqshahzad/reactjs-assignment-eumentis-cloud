import React from "react";
import { useRoutes } from "react-router-dom";

// Importing Screens
import { UsersModule } from "../screens";

export default function Routes() {
  return useRoutes([
    {
      path: "/",
      element: <UsersModule />,
    },
  ]);
}
