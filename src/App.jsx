import { BrowserRouter, Routes, Route } from "react-router-dom";

import IndexData from "./components/dashboard/IndexData";
import Dashboard from "./components/dashboard/dashboard";
import UserList from "./components/dashboard/UserList";
import Student from "./components/dashboard/student";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<IndexData />}>
          <Route index element={<Dashboard />} />
          <Route path="user" element={<UserList />} />
          <Route path="student" element={<Student />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;