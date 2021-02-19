import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

import "../styles.scss";

const IndexPage = () => {
  return (
    <Layout>
      <Link to="/about" className="link">
        About Page
      </Link>
      <br />
      <Link to="/contact-us" className="link">
        contact Page
      </Link>
    </Layout>
  );
};

export default IndexPage;
