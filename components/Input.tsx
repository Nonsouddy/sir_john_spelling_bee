
type InputType = 'text' | 'number' | 'email' | 'password' | 'checkbox' | 'radio' | 'date' | 'file' | 'tel';

type InputProps = {
    type: InputType;
    placeholder?: string;
    label?: string;
    id?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    pattern?: string;
    title?: string;
    widthClass?: string;
    required?: boolean;
    otherClass?: string;
    autoComplete?: string;
};

const Input = ({ type, placeholder, label, id, value, onChange, pattern, title, widthClass = 'w-full', otherClass, required, autoComplete = 'off'}: InputProps) => {
    return (
        <main className="flex flex-col gap-y-2 font-inter text-xs sm:text-sm xl:text-base">
            {label && (
                <label className="font-semibold cursor-pointer" htmlFor={id}>
                    {label}
                    {required && <span className="text-red-500">*</span>}
                </label>
            )}
            <input type={type} placeholder={placeholder} id={id} value={value} onChange={onChange} pattern={pattern} title={title} autoComplete={autoComplete}
                className={`px-2 xl:px-4 py-3 border rounded-[10px] border-[#6E6E5E] duration-300 focus:outline-accentOrange focus:outline focus:border-0 ${widthClass} ${otherClass}`}
                required={required} />
        </main>
    );
};

export default Input;
