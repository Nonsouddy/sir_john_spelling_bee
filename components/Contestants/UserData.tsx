
//Icons
import { User, MedalStar, Sms, Calendar, Location, Clock, Call } from "iconsax-react";

//Utils
import { formatDate } from "@/lib/format"


export default function UserDataDisplay({ contestant }: { contestant: Contestant }) {

    return (
        <div className="bg-white shadow-lg mx-auto rounded-lg max-w-2xl overflow-hidden">
            <div className="bg-blue-600 px-6 py-4 text-white">
                <h2 className="flex items-center font-bold text-2xl">
                    <User className="mr-2" /> Student Information
                </h2>
            </div>
            <div className="space-y-4 p-6">
                <div className="gap-4 grid grid-cols-2">
                    <InfoItem icon={<User />} label="Full Name" value={contestant.studentFullName} />
                    <InfoItem icon={<User />} label="Gender" value={contestant.gender} />
                    <InfoItem icon={<MedalStar />} label="Category" value={contestant.category} />
                    <InfoItem icon={<MedalStar />} label="Class" value={contestant.studentClass} />
                    <InfoItem icon={<Calendar />} label="Date of Birth" value={contestant.studentDateOfBirth} />
                    <InfoItem icon={<Sms />} label="Email" value={contestant.studentEmail} />
                    <InfoItem icon={<Call />} label="Phone Number" value={contestant.studentPhoneNumber} />
                    <InfoItem icon={<User />} label="Student ID" value={contestant.studentId} />
                </div>

                <div className="pt-4 border-t">
                    <h3 className="flex items-center mb-2 font-semibold text-lg">
                        <MedalStar className="mr-2" /> School Information
                    </h3>
                    <div className="gap-4 grid grid-cols-2">
                        <InfoItem icon={<MedalStar />} label="School Name" value={contestant.schoolName} />
                        <InfoItem icon={<Call />} label="School Phone" value={contestant.schoolPhoneNumber} />
                        <InfoItem icon={<Location />} label="School Location" value={contestant.schoolLocation} span={2} />
                    </div>
                </div>

                <div className="pt-4 border-t">
                    <h3 className="flex items-center mb-2 font-semibold text-lg">
                        <User className="mr-2" /> Tutor Information
                    </h3>
                    <div className="gap-4 grid grid-cols-2">
                        <InfoItem icon={<User />} label="Tutor Name" value={contestant.tutorName} />
                        <InfoItem icon={<Call />} label="Tutor Phone" value={contestant.tutorPhoneNumber} />
                    </div>
                </div>

                <div className="pt-4 border-t">
                    <h3 className="flex items-center mb-2 font-semibold text-lg">
                        <Clock className="mr-2" /> Additional Information
                    </h3>
                    <div className="gap-4 grid grid-cols-2">
                        <InfoItem icon={<Clock />} label="Created At" value={formatDate(contestant.createdAt)} span={2} />
                        <InfoItem icon={<Clock />} label="Updated At" value={formatDate(contestant.updatedAt)} span={2} />
                        <InfoItem
                            icon={<User />}
                            label="Payment Status"
                            value={contestant.hasPaid ? "Paid" : "Not Paid"}
                            valueClass={contestant.hasPaid ? "text-green-600 font-semibold" : "text-red-600 font-semibold"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

interface InfoItemProps {
    icon: React.ReactNode
    label: string
    value: string | boolean
    span?: number
    valueClass?: string
}

function InfoItem({ icon, label, value, span = 1, valueClass = "" }: InfoItemProps) {
    return (
        <div className={`flex items-start space-x-2 col-span-${span}`}>
            <div className="text-blue-600">{icon}</div>
            <div>
                <p className="text-gray-600 text-sm">{label}</p>
                <p className={`font-medium ${valueClass}`}>{value.toString()}</p>
            </div>
        </div>
    )
}

