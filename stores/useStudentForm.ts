import { create } from "zustand"

type StudentFormStore = {
    formData: StudentFormData;
    updateField: (field: keyof StudentFormData, value: string) => void;
    resetForm: () => void;
};

export const useStudentFormStore = create<StudentFormStore>((set) => ({
    formData: {
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
        formData: { ...state.formData, [field]: value }
    })),
    resetForm: () => set(() => ({
        formData: {
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
