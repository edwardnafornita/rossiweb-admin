import { UserButton, auth } from "@clerk/nextjs";
import { Nav } from "@/components/nav";
import StoreSwitcher from "@/components/store-switcher";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";
import { ThemeToggle } from "@/components/theme-toggle";

const Navbar = async () => {
    const { userId } = auth();

    if (!userId) {
        redirect("/sign-in");
    }

    const stores = await prismadb.store.findMany({
        where: {
            userId
        },
    });

    return (
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                <StoreSwitcher items={stores} />
                <Nav className="mx-6" />
                <div className="ml-auto flex items-center space-x-4">
                    <ThemeToggle />
                    <UserButton afterSignOutUrl="/" />
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;