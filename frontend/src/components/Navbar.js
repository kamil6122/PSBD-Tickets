import { Menu, Ticket, Route, TramFront, CircleHelp } from "lucide-react"

export const Navbar = () => {
    return (
        <div className="bg-yellow-300 flex flex-row justify-between">
            <Menu className="w-16 h-16" />
            <div className="flex flex-row gap-6">
                <Ticket className="w-16 h-16"/>
                <Route className="w-16 h-16"/>
                <TramFront className="w-16 h-16"/>
                <CircleHelp className="w-16 h-16"/>
            </div>
        </div>
    );
}