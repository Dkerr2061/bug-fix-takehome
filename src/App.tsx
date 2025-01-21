import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import BugDetail from "./pages/EditBug";
import BugList from "./components/BugList";
import { BugProps } from "./types/bugTypes";
import { db } from "./config/firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function App() {
  const [bugs, setBugs] = useState<BugProps[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const bugsCollectionRef = collection(db, "bugs");

  // API functions go here

  // * Get request

  useEffect(() => {
    const getBugList = async () => {
      try {
        const data = await getDocs(bugsCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...(doc.data() as BugProps),
          id: doc.id,
        }));
        setBugs(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    getBugList();
  }, [bugs]);

  // * Post request
  function addBug(newBug: BugProps) {
    const postBug = async () => {
      try {
        await addDoc(bugsCollectionRef, {
          ...newBug,
          dateCreated: new Date().toISOString(),
        });
      } catch (err) {
        console.error(err);
      }
    };
    postBug();
  }

  // * Patch request

  function editBug(id: string, updateBug: BugProps) {
    const submitEdit = async () => {
      try {
        const bugDoc = doc(db, "bugs", id);
        await updateDoc(bugDoc, { ...updateBug });
        setBugs((prevBugs) =>
          prevBugs.map((bug) =>
            bug.id === id ? { ...bug, ...updateBug } : bug
          )
        );
      } catch (error) {
        console.log(error);
      }
    };
    submitEdit();
  }

  // * Delete request

  function removeBug(id: string) {
    const deleteBug = async () => {
      try {
        let answer = confirm("Are you sure that you want to delete this task?");
        if (!answer) return;
        const bugDoc = doc(db, "bugs", id);
        await deleteDoc(bugDoc);
      } catch (error) {
        console.error(error);
      }
    };
    deleteBug();
  }

  // * Search bar functionality
  const filteredBugs = bugs
    .filter((bug) => {
      return (
        searchText === "" ||
        bug.priority.toLowerCase().includes(searchText.toLowerCase()) ||
        bug.status.toLowerCase().includes(searchText.toLowerCase())
      );
    })
    .sort((a, b) => {
      if (sortOrder === "") return 0;
      const dateA = new Date(a.dateCreated).getTime();
      const dateB = new Date(b.dateCreated).getTime();
      return sortOrder === "Newest" ? dateB - dateA : dateA - dateB;
    });

  // * Search text
  function updateSearchText(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { value } = e.target;
    setSearchText(value);
  }

  // * Filter by dates
  function sortByDate(
    e: React.ChangeEvent<
      HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement
    >
  ) {
    const { value } = e.target;
    setSortOrder(value);
    const bugsToSort = [...bugs];
    const sortedBugs = bugsToSort.sort((a, b) => {
      const dateA = new Date(a.dateCreated).getTime();
      const dateB = new Date(b.dateCreated).getTime();

      return value === "Newest" ? dateB - dateA : dateA - dateB;
    });

    setBugs(sortedBugs);
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route
          path="/"
          index
          element={
            <BugList
              bugs={filteredBugs}
              addBug={addBug}
              removeBug={removeBug}
              updateSearchText={updateSearchText}
              sortByDate={sortByDate}
            />
          }
        />
        <Route path="/bugs/:id" element={<BugDetail editBug={editBug} />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
