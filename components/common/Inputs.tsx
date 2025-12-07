"use client";

import { useId, useState } from "react";

interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  className?: string;
}

export function DateInput({
  label,
  placeholder = "Select a date",
  value,
  onChange,
  error,
  className = "",
}: InputProps) {
  const id = useId();
  const [type, setType] = useState<"text" | "date">("text");
  const [internalValue, setInternalValue] = useState("");

  const currentValue = value ?? internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (onChange) onChange(newValue);
    setInternalValue(newValue);
  };

  return (
    <div className={`flex flex-col gap-px ${className}`}>
      {label && (
        <label className="text-sm font-medium text-[#161117]" htmlFor={id}>
          {label}
        </label>
      )}

      <input
        type={type}
        id={id}
        value={currentValue}
        placeholder={placeholder}
        onFocus={() => setType("date")}
        onBlur={(e) => {
          if (!e.target.value) setType("text"); // revert if empty
        }}
        onChange={handleChange}
        className={`w-[100px] rounded-md py-1 outline-none text-xs placeholder:text-[#BEBEBE]     
          ${error ? "border-red-500" : "border-gray-300"}
        `}
      />

      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
}

export function NumberInput({
  label,
  placeholder = "",
  value,
  onChange,
  error,
  className = "",
}: InputProps) {
  const id = useId();
  const [type, setType] = useState<"text" | "number">("text");
  const [internalValue, setInternalValue] = useState("");

  const currentValue = value ?? internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (onChange) onChange(newValue);
    setInternalValue(newValue);
  };

  return (
    <div className={`flex flex-col gap-px ${className}`}>
      {label && (
        <label className="text-sm font-medium text-[#161117]" htmlFor={id}>
          {label}
        </label>
      )}

      <input
        type={type}
        id={id}
        value={currentValue}
        placeholder={placeholder}
        onFocus={() => setType("number")}
        onBlur={(e) => {
          if (!e.target.value) setType("text"); // revert if empty
        }}
        onChange={handleChange}
        className={`w-14 rounded-md py-1 outline-none text-xs placeholder:text-[#BEBEBE]     
          ${error ? "border-red-500" : "border-gray-300"}
        `}
      />

      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
}
export function TextInput({
  label,
  placeholder = "",
  value,
  onChange,
  error,
  className = "",
}: InputProps) {
  const id = useId();
  const [internalValue, setInternalValue] = useState("");

  const currentValue = value ?? internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (onChange) onChange(newValue);
    setInternalValue(newValue);
  };

  return (
    <div className={`flex flex-col gap-px ${className}`}>
      {label && (
        <label className="text-sm font-medium text-[#161117]" htmlFor={id}>
          {label}
        </label>
      )}

      <input
        type="text"
        id={id}
        value={currentValue}
        placeholder={placeholder}
        onChange={handleChange}
        className={`rounded-md py-1 outline-none text-xs placeholder:text-[#BEBEBE]     
          ${error ? "border-red-500" : "border-gray-300"}
        `}
      />

      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
}
