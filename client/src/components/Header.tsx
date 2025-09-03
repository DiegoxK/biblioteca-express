function Header() {
  return (
    <nav className="bg-gray3b p-5 flex justify-between">
      <div className="flex items-center font-bold text-2xl">
        <h1>MyLibrary</h1>
      </div>
      <div className="flex items-center gap-5">
        <p>Admin</p>
        <div className="w-10 h-10 rounded-full text-gray2b bg-white flex items-center justify-center">
          <p className="text-xl font-extrabold">A</p>
        </div>
      </div>
    </nav>
  );
}

export default Header;
