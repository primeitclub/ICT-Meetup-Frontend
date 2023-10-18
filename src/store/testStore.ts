import { create } from 'zustand';

type TestStore = {
 test: string[];
 setTest: (test: string[]) => void;
};

export const useTestStore = create<TestStore>((set) => ({
 test: [],
 setTest: (test) => set({ test })
}));
