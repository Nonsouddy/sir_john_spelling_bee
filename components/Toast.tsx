import { useState } from "react";
import { toast } from "sonner";

//Icons
import { Whatsapp, TickCircle, Copy, CopySuccess, CloseSquare } from "iconsax-react";

export default function RegistrationToast({ uniqueId, onClose }: RegistrationToastProps) {

    const [copy, setCopy] = useState<boolean>(false);

    //Functions
    const copyText = () => {
        navigator.clipboard.writeText(uniqueId);
        toast.success(`${uniqueId} was copied to your clipboard.`)
        setCopy(true);
    }

    const handleWhatsAppClick = () => {
        window.open(`https://wa.me/2348144118744?text=My%20Contestant%20Unique%20ID%20is%20${uniqueId}`, "_blank")
    }

    return (
        <main className="z-[3] fixed inset-0 place-content-center grid bg-black/80">
            <div className="border-green-500 bg-white shadow-lg border rounded-lg min-w-[16rem] max-w-[30rem]">
                <div className="flex items-center bg-green-500 px-4 py-3 rounded-t-lg">
                    <TickCircle variant="Bold" size="24" color="#FFF" className="mr-2" />
                    <h3 className="font-semibold text-white">Registration Successful</h3>
                    <button onClick={onClose} className="ml-auto">
                        <CloseSquare color="#FFF" variant="Bold" className="size-4 md:size-5 xl:size-6" />
                    </button>
                </div>
                <div className="p-4">
                    <p className="mb-2 text-gray-700">
                        Congratulations! You have successfully registered. Please copy your Contestant Unique ID and click the WhatsApp icon to
                        proceed with your payment.
                    </p>
                    <div className="flex justify-between items-center my-4">
                        <p className="mb-2 font-semibold text-gray-800">Your Unique ID: {uniqueId}</p>
                        {copy ?
                            <CopySuccess color="#16a34a" className="cursor-pointer size-6" variant="Bold" />
                            :
                            <Copy color="#000" className="cursor-pointer size-6" onClick={copyText} />
                        }
                    </div>
                    <button onClick={handleWhatsAppClick} className="flex justify-center items-center bg-green-500 hover:bg-green-600 px-4 py-2 rounded w-full font-bold text-white">
                        <Whatsapp size="20" variant="Bold" color="#FFF" className="mr-2" />
                        Proceed to WhatsApp
                    </button>
                    <p className="mt-2 text-[10px] text-red-500 xl:text-sm md:text-xs">
                        Disclaimer: Failure to complete the payment process will render this registration null and void.
                    </p>
                </div>
            </div>
        </main>
    )
}

