import { FieldValues, UseFormRegister, Path } from 'react-hook-form';

type InputType = 'text' | 'number' | 'email' | 'password' | 'checkbox' | 'radio' | 'date' | 'file' | 'tel';

type InputProps<T extends FieldValues> = {
    type: InputType;
    placeholder?: string;
    label?: string;
    id?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    pattern?: string;
    title?: string;
    widthClass?: string;
    register: UseFormRegister<T>;
    name: Path<T>;
    required?: boolean;
    otherClass?: string;
    autoComplete?: string;
};

const ZodInput = <T extends FieldValues>({
    type,
    placeholder,
    label,
    id,
    value,
    onChange,
    pattern,
    title,
    widthClass = 'w-full',
    register,
    name,
    otherClass,
    required,
    autoComplete = 'off',
}: InputProps<T>) => {
    return (
        <main className="flex flex-col gap-y-1 text-xs sm:text-sm xl:text-base">
            {label && (
                <label className="cursor-pointer" htmlFor={id}>
                    {label}
                    {required && <span className="text-red-500">*</span>}
                </label>
            )}
            <input
                {...register(name)}
                type={type}
                placeholder={placeholder}
                id={id}
                value={value}
                onChange={onChange}
                pattern={pattern}
                title={title}
                autoComplete={autoComplete}
                className={`px-2 xl:px-4 py-3 border rounded-[4px] border-[#E8E8E8] duration-300 focus:outline-burntOrange focus:outline focus:border-0 ${widthClass} ${otherClass}`}
                required={required}
            />
        </main>
    );
};

export default ZodInput;
