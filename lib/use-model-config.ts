"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ModelConfig {
  model: string;
  apiKey: string;
  setModel: (model: string) => void;
  setApiKey: (apiKey: string) => void;
}

export const useModelConfig = create<ModelConfig>()(
  persist(
    (set) => ({
      model: "",
      apiKey: "",
      setModel: (model) => set({ model }),
      setApiKey: (apiKey) => set({ apiKey }),
    }),
    {
      name: "model-config",
    }
  )
);