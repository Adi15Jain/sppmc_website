export default function Container({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={`
        mx-auto
        w-full
        px-3
        lg:px-6
        xl:px-12
        ${className}
      `}
        >
            {children}
        </div>
    );
}
