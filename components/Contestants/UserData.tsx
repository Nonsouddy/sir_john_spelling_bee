import Link from "next/link";
import { formatDate } from "@/lib/format";
import {
    User, MedalStar, Sms, Calendar, Location, Clock, Call, TagUser, Man, Woman, Book, Tag2, Building, Teacher, Note, UserTick
} from "iconsax-react";

export default function UserDataDisplay({ contestant }: { contestant: Contestant }) {
    return (
        <main className="mt-6">
            <div className="flex justify-between items-center mb-4">
                <p>View Contestants?</p>
                <Link href="/admin/contestants" className="bg-primaryYellow hover:bg-inherit px-8 py-3 hover:border border-primaryYellow rounded-3xl w-fit text-black hover:text-white duration-300">Contestants</Link>
            </div>
            
            <Section title="Student Information" icon={<User size={24} color="#FFF" variant="Bold" />}>
                <InfoGrid>
                    <InfoItem icon={<TagUser size={20} color="#FFF" variant="Bold" />} label="Full Name" value={contestant.studentFullName} />
                    <InfoItem icon={contestant.gender === "male" ? <Man size={20} color="#FFF" variant="Bold" /> : <Woman size={20} color="#FFF" variant="Bold" />} label="Gender" value={contestant.gender} />
                    <InfoItem icon={<MedalStar size={20} color="#FFF" variant="Bold" />} label="Category" value={contestant.category} />
                    <InfoItem icon={<Book size={20} color="#FFF" variant="Bold" />} label="Class" value={contestant.studentClass} />
                    <InfoItem icon={<Calendar size={20} color="#FFF" variant="Bold" />} label="Date of Birth" value={contestant.studentDateOfBirth} />
                    <InfoItem icon={<Sms size={20} color="#FFF" variant="Bold" />} label="Email" value={contestant.studentEmail} />
                    <InfoItem icon={<Call size={20} color="#FFF" variant="Bold" />} label="Phone Number" value={contestant.studentPhoneNumber} />
                    <InfoItem icon={<Tag2 size={20} color="#FFF" variant="Bold" />} label="Student ID" value={contestant.studentId} />
                </InfoGrid>
            </Section>
            
            <Section title="School Information" icon={<Building size={24} color="#FFF" variant="Bold" />}>
                <InfoGrid>
                    <InfoItem icon={<MedalStar size={20} color="#FFF" variant="Bold" />} label="School Name" value={contestant.schoolName} />
                    <InfoItem icon={<Call size={20} color="#FFF" variant="Bold" />} label="School Phone" value={contestant.schoolPhoneNumber} />
                    <InfoItem icon={<Location size={20} color="#FFF" variant="Bold" />} label="School Location" value={contestant.schoolLocation} span={2} />
                </InfoGrid>
            </Section>
            
            <Section title="Tutor Information" icon={<Teacher size={24} color="#FFF" variant="Bold" />}>
                <InfoGrid>
                    <InfoItem icon={<User size={20} color="#FFF" variant="Bold" />} label="Tutor Name" value={contestant.tutorName} />
                    <InfoItem icon={<Call size={20} color="#FFF" variant="Bold" />} label="Tutor Phone" value={contestant.tutorPhoneNumber} />
                </InfoGrid>
            </Section>
            
            <Section title="Additional Information" icon={<Note size={24} color="#FFF" variant="Bold" />}>
                <InfoGrid>
                    <InfoItem icon={<Clock size={20} color="#FFF" variant="Bold" />} label="Created At" value={formatDate(contestant.createdAt)} span={2} />
                    <InfoItem icon={<Clock size={20} color="#FFF" variant="Bold" />} label="Updated At" value={formatDate(contestant.updatedAt)} span={2} />
                    <InfoItem icon={<UserTick />} label="Payment Status" value={contestant.hasPaid ? "Paid" : "Not Paid"} valueClass={contestant.hasPaid ? "text-green-600 font-semibold" : "text-red-600 font-semibold"} />
                </InfoGrid>
            </Section>
        </main>
    );
}

function Section({ title, icon, children }: { title: string, icon: React.ReactNode, children: React.ReactNode }) {
    return (
        <div className="pt-4 border-t">
            <h3 className="flex items-center bg-normalBlue mb-2 px-6 py-4 font-semibold text-white text-base md:text-lg xl:text-xl">
                {icon} <span className="ml-2">{title}</span>
            </h3>
            {children}
        </div>
    );
}

function InfoGrid({ children }: { children: React.ReactNode }) {
    return <div className="gap-4 grid grid-cols-2 p-2 md:p-4 xl:p-6">{children}</div>;
}

type InfoItemProps = {
    icon: React.ReactNode;
    label: string;
    value: string | boolean;
    span?: number;
    valueClass?: string;
};

function InfoItem({ icon, label, value, span = 1, valueClass = "" }: InfoItemProps) {
    return (
        <div className={`flex items-start space-x-2 col-span-${span}`}>
            <div>{icon}</div>
            <div>
                <p className="text-gray-500">{label}</p>
                <p className={`font-medium capitalize text-white break-all ${valueClass}`}>{value.toString()}</p>
            </div>
        </div>
    );
}
