import { useParams } from "react-router-dom";
import { BugProps } from "../types/bugTypes";
import { useState } from "react";

const BugDetail = () => {
  const [bug, setBug] = useState<BugProps | null>(null);
  const [bugToEdit, setBugToEdit] = useState<BugProps>({
    id: "",
    title: "",
    description: "",
    status: "",
    priority: "",
    dateCreated: "",
  });
  const { id } = useParams();

  return (
    <div>
      <div>{id}</div>
      <h1></h1>
    </div>
  );
};

export default BugDetail;
