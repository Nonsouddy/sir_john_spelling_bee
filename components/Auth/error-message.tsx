

const ErrorText = ({ message }: { message: string }) => {
    return (
        <p className="mx-auto mt-1 max-w-[50ch] text-center text-red-600 text-xs lg:text-sm dark:text-red-400">{message}</p>
    );
}

export default ErrorText;