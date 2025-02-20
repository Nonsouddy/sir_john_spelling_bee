"use client"

import { toast } from "sonner";
import Link from "next/link";
import { useRouter } from "next/navigation";

//Utils and Actions
import { formatDate } from "@/lib/format";
import toggleHasPaid from "@/actions/server/toggleHasPaid";
import { deleteContestant } from "@/actions/server/deleteContestant";

//Icons
import { User, MedalStar, Sms, Calendar, Location, Clock, Call, TagUser, Man, Woman, Book, Tag2, Building, Teacher, Note, UserTick, Edit, Trash, UserEdit, Edit2 } from "iconsax-react";

export default function UserDataDisplay({ contestant }: { contestant: Contestant }) {

    const router = useRouter();

    const toggleFn = async (id: string, status: boolean) => {
        toast.info("Updating the user payment information");

        const { success, message } = await toggleHasPaid(id, status);
        if (!success) {
            toast.error("Couldn't update contestant's payment status, try again later.")
            return;
        }
        toast.success(message);
        window.location.reload();
    }

    const deleteFn = async (id: string) => {
        toast.info("Deleting Contestant...")
        const { success, message } = await deleteContestant(id);
        if (!success) {
            toast.error("Couldn't delete contestant, try again later.");
            return
        }
        toast.success(message);
        router.push("/admin/contestants")
    }

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
                    <InfoItem icon={<UserTick size={20} color="#FFF" variant="Bold" />} label="Payment Status" value={contestant.hasPaid ? "Paid" : "Not Paid"} />
                </InfoGrid>
            </Section>
            <Section title="Actions" icon={<Edit size={24} color="#FFF" variant="Bold" />}>
                <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center gap-x-2 gap-y-2 p-2 md:p-4 xl:p-6">
                    <button onClick={() => deleteFn(contestant.studentId)} className="inline-flex justify-center items-center bg-red-600 px-4 py-3 rounded-3xl text-white"><Trash color="#fff" className="mr-1" size={20} />Delete Contestant</button>
                    <button onClick={() => toggleFn(contestant.studentId, contestant.hasPaid ?? false)} className="inline-flex justify-center items-center bg-blue-600 px-4 py-3 rounded-3xl text-white"><Edit2 color="#fff" className="mr-1" size={20} />Update Status</button>
                    <button className="inline-flex justify-center items-center bg-primaryYellow px-4 py-3 rounded-3xl text-textBlack"><UserEdit color="#1c1b17" className="mr-1" size={20} />Edit Contestant Details</button>
                </div>
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
};

function InfoItem({ icon, label, value, span = 1 }: InfoItemProps) {
    return (
        <div className={`flex items-start space-x-2 col-span-${span}`}>
            <div>{icon}</div>
            <div>
                <p className="text-gray-500">{label}</p>
                <p className={`font-medium capitalize text-white break-all`}>{value.toString()}</p>
            </div>
        </div>
    );
}
