import { Skeleton } from "@/components/ui/skeleton"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"

export default function StudentTableSkeleton() {
  return (
    <div className="overflow-x-auto border rounded-md mt-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>نام کامل</TableHead>
            <TableHead>کد ملی</TableHead>
            <TableHead>شماره تماس</TableHead>
            <TableHead>تلفن والد</TableHead>
            <TableHead>تلفن منزل</TableHead>
            <TableHead>تاریخ تولد</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[...Array(5)].map((_, i) => (
            <TableRow key={i}>
              {Array.from({ length: 6 }).map((_, j) => (
                <TableCell key={j}>
                  <Skeleton className="h-4 w-full" />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
