import { useState } from "react";

export function useInput() {
   const [value, setValue] = useState("");
   const [hasError, setHasError] = useState(false);
   const [errorMessage, setErrorMessage] = useState("");

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
   };

   return {
      value,
      handleChange,
      hasError,
      setHasError,
      errorMessage,
      setErrorMessage,
   };
}
