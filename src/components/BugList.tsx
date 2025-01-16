import { BugProps } from "../types/bugTypes";
import BugForm from "./BugForm";

interface Props {
  bugs: BugProps[];
}

const BugList = ({ bugs }: Props) => {
  console.log(bugs);
  return (
    <div>
      <BugForm />
    </div>
  );
};

export default BugList;
