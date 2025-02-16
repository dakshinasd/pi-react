import { BrowserRouter, Route, Routes } from "react-router-dom";

import { DashboardPage, LoginPage } from "./features";

import { AuthProvider } from "./providers/auth";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={LoginPage} path="/" />
          <Route Component={DashboardPage} path="/dashboard" />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
