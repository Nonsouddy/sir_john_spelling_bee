import { useMutation } from "@tanstack/react-query";

//Functions
import { registerUserFn } from "./api.service";


//Hook for the registration
export function useAuthAdmin() {

    return useMutation({
        mutationFn: (data: StudentFormData) => registerUserFn(data),
        onError: (error) => {
            console.error("User Registration failed:", error);
        },
    })
}