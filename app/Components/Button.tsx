//Utils
import { twMerge } from 'tailwind-merge'

//Icons
import { Setting2 } from 'iconsax-react';

const Button = ({ type, text, loading, onClick, classNames }: ButtonProps) => {
    return (
        <main className='my-6 font-bold font-comic text-black'>
            <button onClick={onClick} disabled={loading} type={type} className={twMerge("bg-primaryYellow hover:bg-yellow-400 py-3 rounded-[50px] w-full duration-300 disabled:cursor-not-allowed", classNames)}>
                {loading ? <Setting2 size="32" className='mx-auto animate-spin' variant="Bold"/> : text}
            </button>
        </main>
    );
}

export default Button;