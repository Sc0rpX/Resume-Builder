function Header() {
    return (
        <nav className="px-6 py-4 flex justify-between bg-gray-100 shadow-md shrink-0">
            <h1 className="font-heading font-bold text-2xl text-blue-600">ResumeBuilder</h1>
            <button className="px-6 py-2 text-sm text-white font-medium bg-blue-600 rounded-sm flex items-center gap-2">
                <span className="icon-[mdi--download] text-xl"></span>
                Export to PDF
            </button>
        </nav>
    )
}

export default Header;