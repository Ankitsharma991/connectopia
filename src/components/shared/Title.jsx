import React from "react";
import { Helmet } from "react-helmet-async";

const Title = ({
  title = "Connectopia",
  description = "This is the Chat App called Connectopia",
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Helmet>
);

export default Title;
