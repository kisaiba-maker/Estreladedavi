interface PropsHeaderTitle {
    title: string;
    backgroundClass?: string|null;
}

export default function HeaderTitle(props: PropsHeaderTitle) {
    const classBg = props.backgroundClass ? props.backgroundClass : " bg-zinc-100 ";
    return (
        <div className={` ${classBg} bg-cover flex items-center justify-center py-8 md:py-10 lg:py-12 `}>
            <div className="container mx-auto px-4 text-blue-500 text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl uppercase font-bold">
                    {props.title}
                </div>  
            </div>
        </div>
    );
}
