

const SummaryBox = ({ title, icon: Icon, color, amount, description, classNames }: SummaryProps) => {
    return (
        <main className="flex flex-col gap-y-3 border-slate-800 bg-lightBlack p-4 border rounded-xl w-[24%] min-w-[18rem]">
            <div className="flex justify-between items-center">
                <p>{title}</p>
                <Icon size="26" color={color} variant="Bold" />
            </div>
            <div className="flex items-baseline gap-x-1">
                <p className="font-semibold text-white text-xl md:text-2xl xl:text-3xl">{amount}</p>
                <p className={`text-[10px] md:text-xs xl:text-sm ${classNames}`}>{description}</p>
            </div>
        </main>
    );
}

export default SummaryBox;