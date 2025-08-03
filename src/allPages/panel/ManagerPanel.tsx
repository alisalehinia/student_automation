import CreateStudentModal from "@/components/CreateStudentModal";
import { StudentTable } from "@/components/panel/StudentTable";
import StudentTableSkeleton from "@/components/panel/StudentTableSkeleton";
import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/useDebounce";
import { getStudents } from "@/services/api/students";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function ManagerPanel() {
  const size = 10;
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 500);

  const { data: students, isLoading } = useQuery({
    queryKey: ["students", page, size, debouncedSearch],
    queryFn: () => getStudents({ page, size, search: debouncedSearch }),
    placeholderData: keepPreviousData,
  });

  return (
    <div className="container mx-auto py-4">
      <div className="flex gap-4 flex-col md:flex-row mb-3">
        <Input
          className="w-full md:max-w-[230px]"
          type="text"
          placeholder=" شماره تلفن / کدملی / نام دانش‌آموز"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <CreateStudentModal setSearch={setSearch} />
      </div>
     <div>تعداد دانش پذیر  :  {students?.data?.total} </div>
      {isLoading ? (
        <StudentTableSkeleton />
      ) : (
        <StudentTable
          students={students?.data?.data ?? []}
          total={students?.data?.total}
          page={page}
          size={size}
          onPageChange={setPage}
        />
      )}
    </div>
  );
}