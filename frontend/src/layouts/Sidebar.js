import { Button, Nav, NavItem } from "reactstrap";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  {
    title: "About",
    href: "/about",
    icon: "bi bi-people",
  },
  {
    title: "Neonatal",
    href: "/NeonatalExamination",
    icon: "bi bi-heart-pulse",
  },
  {
    title: "Immunization",
    href: "/Immunization",
    icon: "bi bi-eyedropper",
  },
  {
    title: "Graphs",
    href: "/Graph",
    icon: "bi bi-graph-up",
  },
  {
    title: "Vision Status",
    href: "/VisionStatus",
    icon: "bi bi-eye",
  },
  {
    title: "Hearing Status",
    href: "/HearingStatus",
    icon: "bi bi-ear",
  },
  {
    title: "Growth Check",
    href: "/GrowthCheck",
    icon: "bi bi-bar-chart",
  },
  {
    title: "GrowthDetails",
    href: "/GrowthDetails",
    icon: "bi bi-card-text",
  },
  {
    title: "FullDetails",
    href: "/FullDetails",
    icon: "bi bi-layout-split",
  },
];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  const backgroundStyle = {
    background: "linear-gradient(100deg, #FF9695 0%, #82D6FF 100%)",
  };

  
  return (
    <div style={backgroundStyle} className="p-3">
      <div className="d-flex align-items-center">
        <Logo />
        <span className="ms-auto d-lg-none">
        <Button
          close
          size="sm"
          className="ms-auto d-lg-none"
          onClick={() => showMobilemenu()}
        ></Button>
        </span>
      </div>
      <div className="pt-4 mt-2">
        <Nav  vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link 
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "text-primary  nav-link py-3"
                    : "nav-link text-secondary  py-3"
                }
              >
                <i className={navi.icon}></i>
                <span  className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
