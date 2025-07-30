"use client";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import CustomButton from "@/components/customComponents/CustomButton";
import FormInput from "@/components/customComponents/formInput";

import {  useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import {
  createStudentSchema,
  createStudentSchemaType,
} from "@/lib/validation/students";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createStudent } from "@/services/api/students";
import JalaliDateInput from "./customComponents/JalaliDateInput";

export default function CreateStudentModal() {
  const [open, setOpen] = useState(false);
const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<createStudentSchemaType>({
    resolver: zodResolver(createStudentSchema),
  });

  const { mutate } = useMutation({
    mutationFn: createStudent,
    onSuccess: (data) => {
      console.log("Student created successfully:", data);
      setOpen(false);
      queryClient.invalidateQueries({ queryKey: ['students'] });
    },
  });

  const onSubmit = (data: createStudentSchemaType) => {
    mutate(data);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <CustomButton text="ساخت دانش‌آموز جدید" type="button" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>ایجاد دانش‌آموز</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormInput
              id="full_name"
              label="نام و نام خانوادگی"
              register={register("full_name")}
              error={errors.full_name}
            />
            <FormInput
              id="id_number"
              label="کد ملی"
              register={register("id_number")}
              error={errors.id_number}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <JalaliDateInput<createStudentSchemaType>
              name="birth_date"
              label="تاریخ تولد"
              control={control}
              error={errors.birth_date}
            />
            <FormInput
              id="home_phone_number"
              label="شماره تلفن منزل"
              register={register("home_phone_number")}
              error={errors.home_phone_number}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormInput
              id="phone_number"
              label="شماره تلفن دانش‌آموز"
              register={register("phone_number")}
              error={errors.phone_number}
            />
            <FormInput
              id="parent_phone_number"
              label="شماره والدین"
              register={register("parent_phone_number")}
              error={errors.parent_phone_number}
            />
          </div>
          <FormInput
            id="password"
            label="رمز عبور"
            type="password"
            register={register("password")}
            error={errors.password}
          />

          <CustomButton
            type="submit"
            text="ایجاد دانش‌آموز"
            className="w-full"
            disabled={isSubmitting}
            showLoading={isSubmitting}
          />
        </form>
      </DialogContent>
    </Dialog>
  );
}
