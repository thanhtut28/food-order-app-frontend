import create from "zustand";
import { combine } from "zustand/middleware";

export const useErrorMessage = create(
   combine({ errorMessage: "" }, set => ({
      setErrorMessage: (msg: string) => set(() => ({ errorMessage: msg })),
   }))
);
