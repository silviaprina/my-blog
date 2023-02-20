import Link from "next/link";
const NavItem = ({ text, path, active }) => {
  return (
    <>
      {
        active
          ? <div className="text-2xl font-semibold"> {text}</div>
          : <Link href={path} className="text-2xl no-decoration">
            <div className="text-blue-primary"> {text}</div>
          </Link>
      }
    </>
  );
};

export default NavItem;