import React from "react";

function Footer() {
  const curYear = new Date().getFullYear();
  return (
    <div className="flex w-full justify-center bg-yellow-600/70 py-4 text-lg">
      &copy; {curYear} Joshua Rose
    </div>
  );
}

export default Footer;
