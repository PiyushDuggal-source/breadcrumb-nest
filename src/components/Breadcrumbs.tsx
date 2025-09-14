import React from "react";
import { Link } from "react-router-dom";
import { useBreadcrumbs } from "../context/useBreadcrumbs";

const Breadcrumbs: React.FC = () => {
  const { crumbs } = useBreadcrumbs();

  return (
    <nav className="flex justify-center items-center my-4 text-sm text-gray-600 mb-4">
      {crumbs.map((crumb, idx) => (
        <span key={idx}>
          {idx > 0 && " / "}
          <Link
            to={crumb.path}
            className="hover:underline text-blue-600 font-medium"
          >
            {crumb.label}
          </Link>
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
