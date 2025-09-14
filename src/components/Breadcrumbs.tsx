import React from "react";
import { Link } from "react-router-dom";
import { useBreadcrumbs } from "../context/useBreadcrumbs";

const Breadcrumbs: React.FC = () => {
  const { crumbs } = useBreadcrumbs();

  return (
    <nav className="flex justify-center items-center gap-2 my-4 text-sm text-gray-600 mb-4">
      {crumbs.map((crumb, idx) => (
        <span key={idx} className="pt-4">
          {idx > 0 && " / "}
          <Link
            className={`py-2 px-3 bg-gray-500/10 hover:bg-gray-500/20 cursor-pointer text-slate-900/60 font-semibold rounded-xl ${idx === crumbs.length - 1 ? "text-slate-900/80!" : ""}`}
            to={crumb.path}
          >
            {crumb.label}
          </Link>
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
