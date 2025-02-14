import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./features";
import { AuthProvider } from "./providers/auth";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={LoginPage} path="/" />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
