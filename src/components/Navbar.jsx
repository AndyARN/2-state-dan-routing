export default function Navbar() {
    return (
        <nav className="container flex justify-between h-20 items-center">
            {/* logo */}
            <a href="#" className="text-xl font-bold">
                Logo
            </a>

            {/* link menus */}
            <ul className="flex gap-3">
                <li><a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </nav>
    )
}