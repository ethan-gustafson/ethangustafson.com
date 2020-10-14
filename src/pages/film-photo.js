import React from "react";

import AboutLayout from "../components/AboutLayout";
import Media from "../components/main/Media.js";
import SEO from "../components/seo";

const FilmPhotoPage = () => (
  <AboutLayout>
    <SEO title="Film/Photo" />
    <Media/>
  </AboutLayout>
)

export default FilmPhotoPage;