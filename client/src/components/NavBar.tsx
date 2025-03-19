import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { House, Clock, Utensils, Clipboard } from "lucide-react"

export default function NavBar({}) {
    const activeRoute = window.location.pathname
    const isActiveRoute = (route: string) => activeRoute === route;

    return (
        <nav className="flex flex-col md:fixed md:left-0 md:top-0 md:h-full md:w-20 items-center">
        <img src="/yescheflogo.png" alt="Black frying pan with yellow and orange flames coming out. On top of bold words reading Yes Chef" className="h-16 my-2 md:hidden" />


            <NavigationMenu>
                <NavigationMenuList >        
                    <div className="hidden md:flex flex-col items-center">
                        <img
                        src="/yescheflogo.png"
                        alt="Black frying pan with yellow and orange flames coming out. On top of bold words reading Yes Chef"
                        className="h-16"
                        />
                    </div>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="/" data-active={isActiveRoute("/")}>
                            <House />
                            Menu
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="/orders" data-active={isActiveRoute("/orders")}>
                            <ShoppingBag />
                            Orders
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    
                    <NavigationMenuItem>
                        <NavigationMenuLink href="/reports" data-active={isActiveRoute("/reports")}>
                            <Clock />
                            Reports
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="/kitchen" data-active={isActiveRoute("/kitchen")}>
                            <Utensils />
                            Kitchen
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="/inventory" data-active={isActiveRoute("/inventory")}>
                            <Clipboard />
                            Inventory
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    )
}