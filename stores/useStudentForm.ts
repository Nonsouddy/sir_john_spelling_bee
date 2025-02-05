import { create } from "zustand"

type StudentFormStore = {
    data: StudentFormData;
    updateField: (field: keyof StudentFormData, value: string) => void;
    resetForm: () => void;
};

export const useStudentFormStore = create<StudentFormStore>((set) => ({
    data: {
        studentFullName: "",
        studentEmail: "",
        studentPhoneNumber: "",
        gender: "",
        studentDateOfBirth: "",
        studentClass: "",
        category: "",
        schoolName: "",
        schoolLocation: "",
        schoolPhoneNumber: "",
        tutorName: "",
        tutorPhoneNumber: "",
    },
    updateField: (field, value) => set((state) => ({
        data: { ...state.data, [field]: value }
    })),
    resetForm: () => set(() => ({
        data: {
            studentFullName: "",
            studentEmail: "",
            studentPhoneNumber: "",
            gender: "",
            studentDateOfBirth: "",
            studentClass: "",
            category: "",
            schoolName: "",
            schoolLocation: "",
            schoolPhoneNumber: "",
            tutorName: "",
            tutorPhoneNumber: "",
        }
    }))
}));
