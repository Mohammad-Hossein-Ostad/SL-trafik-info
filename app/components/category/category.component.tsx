import React from "react";
import Link from "next/link";

type Tag = "Tunnelbana" | "Pendeltåg" | "Buss" | "Tvärbana";

type Detail =
  | "Få den senaste informationen om tunnelbanan"
  | "Få den senaste informationen om pendeltågn"
  | "Få den senaste informationen om bussar"
  | "Få den senaste informationen om Tvärbanan";

type Link = "/metro" | "/train" | "/bus" | "/tram";

type CategoryProps = {
  title: Tag;
  detail: Detail;
  link: Link;
  node: React.ReactNode;
};

export default function Category({ title, detail, link, node }: CategoryProps) {
  return (
    <>
      <div className="m-2 bg-white border-gray-200 rounded-lg shadow dark:bg-gray-900 ">
        {node}
        <div className="p-5">
          <Link href={link}>
            <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {detail}
          </p>
          <Link
            href={link}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Läs mer
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}
