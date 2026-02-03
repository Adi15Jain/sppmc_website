export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <div
            className="
        mx-auto
        w-full
        px-3
        lg:px-6
        xl:px-12
      "
        >
            {children}
        </div>
    );
}
