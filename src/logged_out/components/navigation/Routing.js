import React, { memo } from "react";
import PropTypes from "prop-types";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "../../../components/Home";
import Inmate from "../../inmate/Inmate";
import Pricing from "../../../components/Pricing";



function Routing(props) {
  const { blogPosts, selectBlog, selectHome } = props;
  const navigate = useNavigate();

  return (
    <Routes>
      
      <Route
        path="/"
        element={< Home  navigate={navigate}/>}
      />
          <Route
        path="/Inmate"
        element={<Inmate  navigate={navigate} />}
      />
      <Route
        path="/Pricing"
        element={<Pricing   navigate={navigate}/>}
      />
     
    </Routes>
  );
}

Routing.propTypes = {
  blogPosts: PropTypes.arrayOf(PropTypes.object),
  selectHome: PropTypes.func.isRequired,
  selectBlog: PropTypes.func.isRequired,
};

export default memo(Routing);