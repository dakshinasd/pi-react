import { BrowserRouter, Route, Routes } from "react-router-dom";

import { DashboardPage, LoginPage } from "./features";

import { ProtectedRoute } from "./components/";

import { AuthProvider } from "./providers/auth";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={LoginPage} path="/" />
          <Route Component={ProtectedRoute}>
            <Route Component={DashboardPage} path="/dashboard" />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
