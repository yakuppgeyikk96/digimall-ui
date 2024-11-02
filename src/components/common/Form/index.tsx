"use client";

import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { useState } from "react";

type ValueModel = Record<string, string>;

export interface IFormItem<T = ValueModel> {
  label: string;
  name: keyof T;
  type: "text" | "email" | "password" | "number" | "textarea" | "select";
  placeholder?: string;
  errorMessage?: string;
}

export interface IFormProps<T = ValueModel> {
  defaultValues?: T;
  items: IFormItem<T>[];
  onConfirm: (values: T | undefined) => void;
}

export default function Form<T>({
  items,
  defaultValues,
  onConfirm,
}: IFormProps<T>) {
  const [values, setValues] = useState<T | undefined>(defaultValues);

  const handleChange = (name: keyof T, value: string) => {
    setValues((prev) =>
      prev ? { ...prev, [name]: value } : ({ [name]: value } as T)
    );
  };

  const getInputByType = (item: IFormItem<T>) => {
    const defaultValueForItem = defaultValues
      ? (defaultValues[item.name] as string)
      : undefined;

    switch (item.type) {
      case "text":
      case "email":
      case "password":
        return (
          <Input
            type={item.type}
            label={item.label}
            placeholder={item.placeholder}
            defaultValue={defaultValueForItem}
            isInvalid={!!item.errorMessage}
            errorMessage={item.errorMessage}
            onChange={(e) => handleChange(item.name, e.target.value)}
          />
        );
      default:
        return null;
    }
  };

  const handleConfirm = () => {
    onConfirm(values);
  };

  return (
    <form className="pt-4">
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <div key={item.name as string}>{getInputByType(item)}</div>
        ))}

        <Button
          color="primary"
          onPress={handleConfirm}
          className="w-full"
          size="lg"
        >
          Confirm
        </Button>
      </div>
    </form>
  );
}
