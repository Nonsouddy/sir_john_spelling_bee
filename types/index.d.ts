
// Registration Data
declare type StudentFormData = {
    studentFullName: string;
    studentEmail: string;
    studentPhoneNumber: string;
    gender: "male" | "female" | "";
    studentDateOfBirth: string;
    studentClass: string;
    category: string;
    schoolName: string;
    schoolLocation: string;
    schoolPhoneNumber: string;
    tutorName: string;
    tutorPhoneNumber: string;
};

//Button
declare type ButtonProps = {
    type: "submit" | "reset" | "button";
    text: string;
    loading: boolean;
    onClick?: () => void;
    classNames?: string;
};

//Registration Toast
declare type RegistrationToastProps = {
    uniqueId: string
    onClose: () => void
}