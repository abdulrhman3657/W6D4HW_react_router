import React from "react";
import { Link } from "react-router";

function Navbar() {
  return (
    <div className="flex justify-center absolute bottom-0 w-full">
      <nav className="lg:w-8/12">
        <ul className="flex flex-wrap gap-4 mx-3 lg:gap-0 lg:justify-around my-5">
          <li>
            <Link to="/">
              <a
                href="#"
                class="block max-w-sm p-6 border w-40 rounded-lg shadow-sm text-center bg-blue-800 border-black hover:bg-blue-900 hover:-translate-y-3"
              >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Mountain
                </h5>
              </a>
            </Link>
          </li>
          <li>
            <Link to="animals">
              <a
                href="#"
                class="block max-w-sm p-6 border w-40 rounded-lg shadow-sm text-center bg-blue-800 border-black hover:bg-blue-900 hover:-translate-y-3"
              >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Animal
                </h5>
              </a>
            </Link>
          </li>
          <li>
            <Link to="forest">
              <a
                href="#"
                class="block max-w-sm p-6 border w-40 rounded-lg shadow-sm text-center bg-blue-800 border-black hover:bg-blue-900 hover:-translate-y-3"
              > 
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Forest
                </h5>
              </a>
            </Link>
          </li>
          <li>
            <Link to="sea">
              <a
                href="#"
                class="block max-w-sm p-6 border w-40 rounded-lg shadow-sm text-center bg-blue-800 border-black hover:bg-blue-900 hover:-translate-y-3"
              >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Sea
                </h5>
              </a>
            </Link>
          </li>
          <li>
            <Link to="/space">
              <a
                href="#"
                class="block max-w-sm p-6 border w-40 rounded-lg shadow-sm text-center bg-blue-800 border-black hover:bg-blue-900 hover:-translate-y-3"
              >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Space
                </h5>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
