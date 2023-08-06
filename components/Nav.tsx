"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getProviders, signIn, signOut, useSession } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropDown, setToggleDropDown] = useState(false);

  useEffect(() => {
    const fetchProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    fetchProviders();
  }, []);

  return (
    <div className="text-text flex-between border-black">
      <Link href="/">
        <Image
          alt="logo"
          src="./assets/images/logo.svg"
          height={60}
          width={60}
        />
      </Link>


      {/* desktop view */}
      <div className="md:flex hidden">
        {session?.user ? (
          <div className="flex-between ">
            <Link href="/create-post" className="black_btn">
              New Post
            </Link>
            <button
              type="button"
              onClick={()=>signOut()} 
              className="outline_btn mx-2"
            >
              SignOut
            </button>
            <Link href="/profile">
              <Image
                alt="profile"
                src={session? session?.user.image : "./assets/images/logo.svg"}
                height={40}
                width={40}
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <div>
            {providers &&
              Object.values(providers).map((provider: any) => (
                <button
                  className="black_btn"
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                >
                  Sign In
                </button>
              ))}
          </div>
        )}
      </div>

      {/* mobile view */}
      <div className="md:hidden flex relative">
        {session?.user  ? (
          <div className="flex ">
            <Image
              alt="profile"
              src={session? session?.user.image : "./assets/images/logo.svg"}
              height={40}
              width={40}
              className="rounded-full"
              onClick={() => setToggleDropDown((prev) => !prev)}
            />
            {toggleDropDown ? (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdawn_link"
                  onClick={() => setToggleDropDown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-post"
                  className="dropdawn_link"
                  onClick={() => setToggleDropDown(false)}
                >
                  New Post
                </Link>
                <button
                  type="button"
                  className="outline_btn my-2"
                  onClick={() => {setToggleDropDown(false);
                    signOut();
                }}
                >
                  SignOut
                </button>
              </div>
            ) : null}
          </div>
        ) : (
          <div>
            {providers &&
              Object.values(providers).map((provider: any) => (
                <button
                  className="black_btn"
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                >
                  Sign In
                </button>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
