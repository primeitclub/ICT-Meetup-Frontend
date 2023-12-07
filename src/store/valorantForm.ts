import { create } from 'zustand';

const maxStep = 4

type ValorantFormStore = {
    activeStep:  number;
    maxStep: number;
    nextStep: () => void;
    prevStep: () => void;
    setStep: (step: number) => void;
};

type teamMembers = {
    name: string;
    image?: File;
}

type teamData = {
     teamName: string;
    teamLogo: File | null;
    teamLeaderName: string;
    teamLeaderImage: File | null;
    teamSubName: string;
    teamSubImage: any;
    teamMembers: teamMembers[];
}

type ValorantFormData = {
   formData: teamData;
   setFormData: (formData: teamData) => void;
}

export const useValorantFormDataStore = create<ValorantFormData>((set) => ({
    formData: {
        teamName: "",
        teamLogo: null,
        teamLeaderName: "",
        teamLeaderImage: null,
        teamSubName: "",
        teamSubImage: null,
        teamMembers: [],
    },
    setFormData: (formData) => set({ formData })
}));


export const useValorantFormStore = create<ValorantFormStore>((set) => ({
    activeStep: 0,
    maxStep: 2,
     nextStep: () => {
        set((state) => (
            maxStep === state.activeStep
                ? { activeStep: maxStep }
                : { activeStep: state.activeStep + 1 }
        ));
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
            });
    },
    prevStep: () => {
        set((state) => (
            state.activeStep === 0
                ? { activeStep: 0 }
                : { activeStep: state.activeStep - 1 }
        ));
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
            });
    }
    ,
    setStep: (step) => {
        set({ activeStep: step });
    },
}));