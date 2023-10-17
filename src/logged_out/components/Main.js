import React, { memo, useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import AOS from "aos/dist/aos";
import ResponsiveAppBar from '../../components/Navbar'
import Footer from "./footer/Footer";
import Contact from "./footer/Contact"
import Routing from "./navigation/Routing";
import "aos/dist/aos.css";
import Home from '../../components/Home';
import smoothScrollTop from "../../shared/functions/smoothScrollTop";
AOS.init({ once: true });


function Main(props) {
  const { classes } = props;
  const [selectedTab, setSelectedTab] = useState(null);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [blogPosts, setBlogPosts] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(null);

  const selectHome = useCallback(() => {
    smoothScrollTop();
    document.title =
      "WS";
    setSelectedTab("Home");
  }, [setSelectedTab]);

  const selectBlog = useCallback(() => {
    smoothScrollTop();
    document.title = "WaVer - Blog";
    setSelectedTab("Blog");
  }, [setSelectedTab]);

  const openLoginDialog = useCallback(() => {
    setDialogOpen("login");
    setIsMobileDrawerOpen(false);
  }, [setDialogOpen, setIsMobileDrawerOpen]);


  return (
    <div>

< ResponsiveAppBar/>
<Routing/>
<Contact/>
{/* <Footer /> */}
    </div>
  )
}

export default Main