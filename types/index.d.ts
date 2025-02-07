
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
    uniqueId: string;
    onClose: () => void;
}

//Admin Details
declare type Admin = {
    email: string;
    hashedPassword: string;
    role: string;
    id: string;
    suspended: boolean;
    createdAt: Date;
    updatedAt: Date;
}

//DownBar and SideBar NavItem
declare type NavItem = {
    href: string;
    icon: React.ElementType;
    currentPath: string;
    label: string;
}

//Dashboard Summary Box
declare type SummaryProps = {
    title: string;
    icon: React.ElementType;
    color: string;
    amount: number;
    description: string;
    classNames: string;
}

//Contestant
declare type Contestant = {
    id: string;
    studentId: string;
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
    hasPaid: boolean | null;
    createdAt: Date;
    updatedAt: Date;
};