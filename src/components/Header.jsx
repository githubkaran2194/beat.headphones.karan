import Link from "next/link";

function Header() {
  return (
    <div className="max-w-full mx-auto">
      <div className="flex justify-evenly items-center p-3">
        <h2 className="text-2xl font-bold tracking-wide text-gray-700">
          Beats <span className="text-red-700 text-2xl animate-pulse">❤️</span>
        </h2>

        <ul className="flex justify-center items-center gap-8">
          <li>
            <Link href={"/"} className="font-semibold text-md text-gray-700 tracking-wide">Home</Link>
          </li>
          <li>
            <Link href={"#product"} className="font-semibold text-md text-gray-700 tracking-wide">Product</Link>
          </li>
          <li>
            <Link href={"#feature"} className="font-semibold text-md text-gray-700 tracking-wide">Features</Link>
          </li>
        </ul>

        <ul>
        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        </ul>
      </div>
    </div>
  );
}

export default Header;
