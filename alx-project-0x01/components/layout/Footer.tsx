import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 text-white py-4 mt-auto">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} ALX Project. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
