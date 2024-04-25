import React from "react";
import { BrowserRouter, Routes as RouteWrapper, Route } from "react-router-dom";
// import { Dashboard } from "../pages/Dashboard";
import { DashboardLayout } from "../layouts";
import { Dashboard } from "../pages/Dashboard";
import { CreateCustomer, UpdateCustomer } from "../pages/Customer";
const Routes = () => {
  return (
    <BrowserRouter>
      <RouteWrapper>
        <Route path="/createCustomer" element={<CreateCustomer />} />
        <Route path="/edit/:id" element={<UpdateCustomer />} />
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </RouteWrapper>
    </BrowserRouter>
  );
};

export default Routes;
