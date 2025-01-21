// useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch("http://localhost:3000/bugs");
//         const data = await res.json();
//         setBugs(data);
//       } catch (error) {
//         console.log("There was an error fetching the data.", error);
//       }
//     };
//     fetchData();
//   }, []);

//   // * Post request
//   function addBug(newBug: BugProps) {
//     const postBug = async () => {
//       try {
//         const res = await fetch("http://localhost:3000/bugs", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             ...newBug,
//             dateCreated: new Date().toISOString(),
//           }),
//         });
//         const data = await res.json();
//         setBugs((prevBugs) => [...prevBugs, data]);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     postBug();
//   }

//   // * Patch request

//   function editBug(id: string, updateBug: BugProps) {
//     const submitEdit = async () => {
//       try {
//         const res = await fetch(`http://localhost:3000/bugs/${id}`, {
//           method: "PATCH",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(updateBug),
//         });
//         const data = await res.json();
//         setBugs((prevBug) => {
//           return prevBug.map((bug) => (bug.id === data.id ? data : bug));
//         });
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     submitEdit();
//   }

//   // * Delete request

//   function removeBug(id: string) {
//     const deleteBug = async () => {
//       try {
//         let answer = confirm("Are you sure that you want to delete this task?");
//         if (!answer) return;

//         await fetch(`http://localhost:3000/bugs/${id}`, {
//           method: "DELETE",
//         });

//         setBugs(
//           bugs.filter((bug) => {
//             return bug.id !== id;
//           })
//         );
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     deleteBug();
//   }

///////////////////////////////////////////////////

//  useEffect(() => {
//     const currentBug = async () => {
//       try {
//         const docRef = doc(db, "bugs", id as string);
//         const docSnap = await getDoc(docRef);

//         if (docSnap.exists()) {
//           const data = docSnap.data() as BugProps;
//           setBug(data);
//           setBugToEdit({
//             id: docSnap.id,
//             title: data.title,
//             description: data.description,
//             status: data.status,
//             priority: data.priority,
//             dateCreated: data.dateCreated,
//           });
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     currentBug();
//   }, [id]);
