import * as React from "react";
import useSwr from "swr";
export interface IStudentDetailProps {
  studentId: any;
}

export function StudentDetail({ studentId }: IStudentDetailProps) {
  const { data, error, mutate, isValidating } = useSwr(
    `/students/${studentId}`,
    {
      ...{ revalidateOnFocus: false, dedupingInterval: 2000 },
    }
  );
  if (error) return <div>Error</div>;
  if (!data) return <div>Loading</div>;
  function handleMutate() {
    mutate({ name: `Hung-${new Date().toISOString()}` }, false);
  }
  return (
    <div>
      <p>Name: {data?.name || "#"}</p>
      <button onClick={handleMutate}>Mutate</button>
    </div>
  );
}
