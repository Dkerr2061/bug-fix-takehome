export type BugProps = {
  id: number;
  Title: string;
  Description: string;
  Priority: "Low" | "Medium" | "High";
  Status: "Open" | "In Progress" | "Resolved";
  DateCreated: Date;
};
