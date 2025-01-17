export type BugProps = {
  id: string;
  title: string;
  description: string;
  priority: "" | "Low" | "Medium" | "High";
  status: "" | "Open" | "In Progress" | "Resolved";
  dateCreated: string;
};
