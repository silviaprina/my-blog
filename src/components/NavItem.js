import Link from "next/link";
const NavItem = ({ text, path, active }) => {
  return (
    <Link href={path} className="text-2xl no-decoration">
      <div className={active?"font-semibold":"text-blue-primary"}> {text}</div>
    </Link>
  );
};

export default NavItem;