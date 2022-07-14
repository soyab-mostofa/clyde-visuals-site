import Link from 'next/link';

const navData = [
  { name: 'services', slug: 'services' },
  { name: 'about', slug: 'about' },
  { name: 'portfolio', slug: 'portfolio' },
  { name: 'blog', slug: 'blog' },
];

const NavLink = ({ item }) => {
  return (
    <Link href={item.slug} passHref>
      <a>{item.name}</a>
    </Link>
  );
};
const Header = () => {
  return (
    <nav className="bg-neutral-900 text-neutral-50 fixed h-[7vh] w-full z-50">
      <div className="container mx-auto flex justify-between items-center uppercase px-4 py-4 h-full">
        <h1 className="font-semibold text-xl tracking-wide">clyde visuals</h1>
        <ul className="space-x-2">
          {navData.map((item) => (
            <NavLink key={item.name} item={item} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
