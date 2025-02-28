
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
    encryptedPassword: string | null;
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
    category: string;
    createdAt: Date;
    gender: string;
    hasPaid: boolean | null;
    id: string;
    schoolLocation: string;
    schoolName: string;
    schoolPhoneNumber: string;
    studentClass: string;
    studentDateOfBirth: string;
    studentEmail: string;
    studentFullName: string;
    studentId: string;
    studentPhoneNumber: string;
    tutorName: string;
    tutorPhoneNumber: string;
    updatedAt: Date;
};

//Events
declare type EventProperties = {
    id: string;
    venue: string;
    name: string;
    otherDetails: string | null;
    images: string[];
    date: Date;
    createdAt: Date;
    updatedAt: Date;
}

//Gallery
declare type Gallery = {
    id: string;
    images: string[];
    description: string | null;
    createdAt: Date;
    updatedAt: Date;
}

//Edit Admin
declare type EditProps = {
    isOpen: boolean;
    onClose: () => void;
    admin: Admin;
}

declare type InitialStateProps = {
    email: string;
    role: boolean
    password: string;
    suspended: boolean;
    [key: string]: string | boolean;
    id: string
};

declare type Material = {
    id: string;
    title: string;
    author: string | null;
    body: string | null;
    downloadLink: string;
    type: string;
    size: number;
    createdAt: Date;
    updatedAt: Date;
}

declare type MaterialsDisplayProps = {
    materials: Material[];
}