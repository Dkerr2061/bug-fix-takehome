import { BugProps } from "../types/bugTypes";
import BugForm from "./BugForm";

interface Props {
  bugs: BugProps[];
  addBug: (bug: BugProps) => void;
}

const BugList = ({ bugs, addBug }: Props) => {
  // console.log(bugs);
  return (
    <div>
      <BugForm addBug={addBug} />
    </div>
  );
};

export default BugList;
