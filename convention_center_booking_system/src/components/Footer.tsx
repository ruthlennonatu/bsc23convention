import React from 'react';


interface FooterProps {
  companyName: string;
  year: number;
}

const Footer: React.FC<FooterProps> = ({ companyName, year }) => {
  return (
    <footer className="footer">
      <hr className="footer-line" />
      <div className="footer-content">
        <p>&copy; {year} {companyName}</p>
      </div>
    </footer>
  );
};

export default Footer;
