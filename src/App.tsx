import { BrowserRouter, Route, Routes } from "react-router-dom";

import { DashboardPage, LoginPage } from "./features";

import { ProtectedRoute } from "./components/";

import { AuthProvider } from "./providers/auth";
import { AdminLayout, MainLayout } from "./layouts";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={MainLayout}>
            <Route Component={LoginPage} path="/" />
            <Route Component={ProtectedRoute}>
              <Route Component={AdminLayout} path="/">
                <Route Component={DashboardPage} path="/dashboard" />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
