import axiosInstance from "./axios";

import { createStudentSchemaType } from "@/lib/validation/students";

export const createStudent = async (data: createStudentSchemaType) => {
  const response = await axiosInstance.post("/students", data);
  return response.data;
}

interface GetStudentsParams {
  page: number;
  size: number;
  search: string;
}

export const getStudents = async ({page, size, search} : GetStudentsParams) => {
  const response = await axiosInstance.get("/students", {
    params: {page, size, search}
  });
  return response.data;
}