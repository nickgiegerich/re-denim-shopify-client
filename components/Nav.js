import { useState, useEffect } from "react";
import Link from "next/link";
import { useCartContext } from "@/context/Store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  const cart = useCartContext()[0];
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    let numItems = 0;
    cart.forEach((item) => {
      numItems += item.variantQuantity;
    });
    setCartItems(numItems);
  }, [cart]);

  return (
    <header className="border-b border-palette-lighter relative sm:sticky top-0 z-20 bg-white">
      <div className="flex items-center justify-between mx-auto max-w-6xl px-6 pb-2 pt-4 md:pt-6">
        <div className="max-w-lg">
          <Link href="/" passHref>
            <a className=" cursor-pointer">
              <h1 className="flex no-underline">
                <img
                  height="64"
                  width="64"
                  alt="logo"
                  className="h-10 w-10 mr-1 object-contain"
                  src="/logo-re-denim.svg"
                />
                <span className="text-xl font-primary font-bold tracking-tight pt-1">
                  {process.env.siteTitle}
                </span>
              </h1>
            </a>
          </Link>
        </div>
        <div className="max-w-sm w-full text-center sm:text-right">
          {/* Added Link Comp */}
          <Link href="/contact" passHref>
            <h1>
              <a className=" cursor-pointer">
                <span className="text-xl font-primary font-bold tracking-tight pt-1 hover:underline">
                  Contact
                </span>
              </a>
            </h1>
          </Link>
        </div>
        <div className="max-w-sm">
          <Link href="/cart" passHref>
            <a className=" relative" aria-label="cart">
              <FontAwesomeIcon
                className="text-palette-primary w-6 m-auto"
                icon={faShoppingCart}
              />
              {cartItems === 0 ? null : (
                <div className="absolute top-0 right-0 text-xs bg-yellow-300 text-gray-900 font-semibold rounded-full py-1 px-2 transform translate-x-10 -translate-y-3">
                  {cartItems}
                </div>
              )}
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Nav;
