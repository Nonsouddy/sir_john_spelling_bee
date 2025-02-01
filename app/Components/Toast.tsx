import { useState } from "react";

//Icons
import { Whatsapp, TickCircle, Copy, CopySuccess } from "iconsax-react";

export function RegistrationToast({ uniqueId, onClose }: RegistrationToastProps) {

    const [copy, isCopied] = useState<boolean>(false)

    const handleWhatsAppClick = () => {
        window.open(`https://wa.me/your_number_here?text=My%20Unique%20ID%20is%20${uniqueId}`, "_blank")
    }

    return (
        <main className="z-[3] fixed inset-0 place-content-center grid bg-black/70">
            <div className="border-green-500 bg-white shadow-lg border rounded-lg min-w-[16rem] max-w-96">
                <div className="flex items-center bg-green-500 px-4 py-2">
                    <TickCircle size="24" className="mr-2 text-white" />
                    <h3 className="font-semibold text-white">Registration Successful</h3>
                    <button onClick={onClose} className="ml-auto text-white hover:text-green-200">
                        &times;
                    </button>
                </div>
                <div className="p-4">
                    <p className="mb-2 text-gray-700">
                        Congratulations! You have successfully registered. Please copy your unique ID and click the WhatsApp icon to
                        proceed with your payment.
                    </p>
                    <div className="flex justify-between items-center">
                        <p className="mb-2 font-semibold text-gray-800">Your Unique ID: {uniqueId}</p>
                        {copy ?
                            <Copy className="size-6" />
                            :
                            <CopySuccess className="text-green-600 size-6" variant="Bold" />
                        }
                    </div>
                    <button onClick={handleWhatsAppClick} className="flex justify-center items-center bg-green-500 hover:bg-green-600 px-4 py-2 rounded w-full font-bold text-white">
                        <Whatsapp size="20" className="mr-2" />
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

