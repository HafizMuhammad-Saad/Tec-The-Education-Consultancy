import CardNav from "../../reactBits/CardNav/CardNav";
import logo from '../assets/logoo.png';

const Navanimated = () => {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company", href: "#" },
        { label: "Careers", ariaLabel: "About Careers", href: "#" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects", href: "#" },
        { label: "Case Studies", ariaLabel: "Project Case Studies", href: "#" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us", href: "#" },
        { label: "Twitter", ariaLabel: "Twitter", href: "#" },
        { label: "LinkedIn", ariaLabel: "LinkedIn", href: "#" }
      ]
    }
  ];

  return (
    <CardNav
      logo={logo}
      logoAlt="Company Logo"
      items={items}
      
      className="absolute top-10 z-50 bg-red-500"
    />
  );
};

export default Navanimated;