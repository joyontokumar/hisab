"use client";
import Link from "next/link";
import { connect } from "react-redux";

const Menu = ({ products }: any) => {
  return (
    <div className="menu-area">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="logo col-span-1">
            <Link href="/">
              <img
                src="https://hishabee.business/wp-content/uploads/2022/11/logo.jpeg"
                alt="ecommerce"
              />
            </Link>
          </div>
          <div className="menu-items col-span-1 float-right text-right">
            <ul>
              <li>
                <Link href="/shops">Shops</Link>
              </li>
              <li>
                <Link href="/cart">
                  <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24.000000pt"
                    height="24.000000pt"
                    viewBox="0 0 24.000000 24.000000"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <metadata>
                      Created by potrace 1.10, written by Peter Selinger
                      2001-2011
                    </metadata>
                    <g
                      transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)"
                      fill="#000000"
                      stroke="none"
                    >
                      <path
                        d="M10 210 c0 -5 5 -10 10 -10 15 0 33 -49 34 -90 l1 -35 68 -3 c42 -2
67 1 67 8 0 6 -25 10 -61 10 -37 0 -58 4 -54 10 3 6 26 10 50 10 42 0 46 2 65
40 11 21 20 42 20 45 0 3 -36 5 -80 5 -47 0 -80 4 -80 10 0 6 -9 10 -20 10
-11 0 -20 -4 -20 -10z m158 -55 c-16 -36 -80 -36 -96 0 l-12 25 60 0 60 0 -12
-25z"
                      />
                      <path
                        d="M54 49 c-10 -17 13 -36 27 -22 12 12 4 33 -11 33 -5 0 -12 -5 -16
-11z"
                      />
                      <path
                        d="M154 49 c-10 -17 13 -36 27 -22 12 12 4 33 -11 33 -5 0 -12 -5 -16
-11z"
                      />
                    </g>
                  </svg>
                </Link>
                <span>{products}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state: any) => {
  const data = state?.cart?.shopping?.length;
  return {
    products: data,
  };
};
export default connect(mapStateToProps, null)(Menu);
