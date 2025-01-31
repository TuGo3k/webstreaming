   {/* Mobile Dropdown Menu */}
   {isMobileMenuOpen && (
    <div className="transition-all duration-1000 ease-in-out left-0 w-full bg-[#252631] text-white flex flex-col gap-4 p-4 z-30 md:hidden">
      {categories.map((category, index) => (
        <Link
          key={index}
          to={category.route}
          className={`text-white font-semibold p-2 ${
            active === category.title ? "text-yellow-300" : "text-white"
          }`}
          onClick={() => {
            setActive(category.title);
            setIsMobileMenuOpen(false);
          }}
        >
          {category.title}
        </Link>
      ))}
      </div>)}