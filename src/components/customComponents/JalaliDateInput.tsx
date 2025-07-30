"use client";

import DatePicker from "react-multi-date-picker";
import type { DatePickerRef, Value } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Controller, Control, FieldError, FieldValues, Path } from "react-hook-form";
import { useRef } from "react";

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  control: Control<T>;
  error?: FieldError;
};

export default function JalaliDateInput<T extends FieldValues>({
  name,
  label,
  control,
  error,
}: Props<T>) {

  const datePickerRef = useRef<DatePickerRef | null>(null);

  return (
    <div className="grid gap-1">
      <label className="text-sm font-medium cursor-pointer"  onClick={() => datePickerRef.current?.openCalendar()}>{label}</label>
      <Controller
    
        name={name}
        control={control}
        render={({ field }) => (
          <DatePicker
            ref={datePickerRef}
            inputClass="p-1.5 rounded-md w-full"
            calendar={persian}
            locale={persian_fa}
            format="YYYY/MM/DD"
            value={field.value as Value}
            onChange={(date) =>
              field.onChange(date ? new Date(date.toDate()) : null)
            }
          />
        )}
      />
      {error?.message && (
        <p className="text-red-600 text-xs">{error.message}</p>
      )}
    </div>
  );
}
