"use client";

import DatePicker from "react-multi-date-picker";
import type { Value } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Controller, Control, FieldError, FieldValues, Path } from "react-hook-form";

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
  return (
    <div className="grid gap-2">
      <label className="text-sm font-medium">{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <DatePicker
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
