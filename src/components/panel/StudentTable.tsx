"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

type Student = {
  id: string;
  id_number: string;
  full_name: string;
  phone_number: string;
  last_login: string | null;
  student_profile: {
    parent_phone_number: string;
    birth_date: string;
    home_phone_number: string | null;
  };
};

interface Props {
  students: Student[];
  total: number;
  page: number;
  size: number;
  onPageChange: (page: number) => void;
}

export function StudentTable({
  students,
  total,
  page,
  size,
  onPageChange,
}: Props) {
  const totalPages = Math.ceil(total / size);

  return (
    <div className="overflow-x-auto border rounded-md mt-4">
     
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-right">نام </TableHead>
            <TableHead className="text-right">کد ملی</TableHead>
            <TableHead className="text-right">شماره تماس</TableHead>
            <TableHead className="text-right">تلفن والد</TableHead>
            <TableHead className="text-right">تلفن منزل</TableHead>
            <TableHead className="text-right">تاریخ تولد</TableHead>
            <TableHead className="text-right">تاریخ آخرین ورود</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell>{student.full_name}</TableCell>
              <TableCell>{student.id_number}</TableCell>
              <TableCell>{student.phone_number}</TableCell>
              <TableCell>
                {student.student_profile.parent_phone_number}
              </TableCell>
              <TableCell>
                {student.student_profile.home_phone_number || "—"}
              </TableCell>
              <TableCell>
                {new Date(
                  student.student_profile.birth_date
                ).toLocaleDateString("fa-IR", {
                  year: "numeric",
                  month: "long",
                  day: "2-digit",
                })}
              </TableCell>
              <TableCell>
                {student.last_login
                  ? new Date(student.last_login).toLocaleDateString("fa-IR", {
                      year: "numeric",
                      month: "long",
                      day: "2-digit",
                    })
                  : "—"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-center py-4">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => page > 1 && onPageChange(page - 1)}
                // disabled={page === 1}
              />
            </PaginationItem>

            {Array.from({ length: totalPages }).map((_, index) => {
              const pageNumber = index + 1;
              return (
                <PaginationItem key={pageNumber}>
                  <button
                    className={`h-9 w-9 rounded-md border text-sm font-medium ${
                      page === pageNumber
                        ? "bg-primary text-white dark:bg-primary-dark dark:text-zinc-800"
                        : "hover:bg-muted"
                    }`}
                    onClick={() => onPageChange(pageNumber)}
                  >
                    {pageNumber}
                  </button>
                </PaginationItem>
              );
            })}

            <PaginationItem>
              <PaginationNext
                onClick={() => page < totalPages && onPageChange(page + 1)}
                // disabled={page === totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
