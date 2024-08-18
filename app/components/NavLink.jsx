import Link from "next/link";

const NavLink = ({ href, title, isSelected, onClick }) => {
  return (
    <li
      className={`${isSelected ? "text-primary-400" : "text-[#808080]"}`}
      onClick={onClick}
    >
      <Link
        href={href}
        className="block py-2 pl-3 md:pr-4 sm:text-xl rounded md:p-0"
      >
        {title}
      </Link>
    </li>
  );
};

export default NavLink;
