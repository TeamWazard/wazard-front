import { useState } from "react";

export function useInputNum(initialValue) {
  const [number, setNumber] = useState(initialValue);

  const handleNumber = (e) => {
    const currentNumber = e.target.value.replace(/[^0-9]/g, "");
    e.target.value = currentNumber;
    setNumber(currentNumber);
  };

  return [number, handleNumber];
}
