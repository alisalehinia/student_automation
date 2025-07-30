import axiosInstance from "./axios";

import { createStudentSchemaType } from "@/lib/validation/students";

export const createStudent = async (data: createStudentSchemaType) => {
  const response = await axiosInstance.post("/students", data);
  return response.data;
}

export const getStudents = async () => {
  const response = await axiosInstance.get("/students");
  console.log(response);
  
  return response.data;
}