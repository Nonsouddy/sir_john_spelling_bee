import { useMutation } from "@tanstack/react-query";

//Functions
import { registerUserFn } from "./api.service";


//Hook for the student registration
export function useStudentRegistration() {

    return useMutation({
        mutationFn: (data: StudentFormData) => registerUserFn(data),
        onError: (error) => {
            console.error("User Registration failed:", error);
        },
    })
}