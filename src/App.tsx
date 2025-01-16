import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import BugDetail from "./pages/BugDetail";
import BugList from "./components/BugList";
import { BugProps } from "./types/bugTypes";

function App() {
  const [bugs, setBugs] = useState<BugProps[]>([]);

  // API functions go here
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/bugs");
        const data = await res.json();
        setBugs(data);
      } catch (error) {
        console.log("There was an error fetching the data.", error);
      }
    };
    fetchData();
  }, []);

  console.log(bugs);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="/" index element={<BugList bugs={bugs} />} />
        <Route path="/bugs/:id" element={<BugDetail />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
