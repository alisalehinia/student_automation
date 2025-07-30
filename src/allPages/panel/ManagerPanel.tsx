import CreateStudentModal from "@/components/CreateStudentModal";
import { StudentTable } from "@/components/panel/StudentTable";
import StudentTableSkeleton from "@/components/panel/StudentTableSkeleton";
import { getStudents } from "@/services/api/students";
import { useQuery } from "@tanstack/react-query";


export default function ManagerPanel() {
  const { data: students, isLoading } = useQuery({
    queryFn: getStudents,
    queryKey: ["students"],
  });

  return (
    <div className="container mx-auto py-4">
      <CreateStudentModal />
      
      {isLoading ? (
        <StudentTableSkeleton />
      ) : (
        <StudentTable students={students?.data?.data ?? []} />
      )}
    </div>
  );
}