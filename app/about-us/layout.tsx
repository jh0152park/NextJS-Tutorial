export const metadata = {
    title: "About Us",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
            This is aboutus page loyout
        </div>
    );
}
