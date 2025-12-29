import React from "react";

import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";
import {
  BlogCard,
  BlogContainer,
  BlogDate,
  BlogGrid,
  BlogHeader,
  BlogTitle,
  BlogWord,
  Breadcrumb,
} from "./Blog.styled";
import arrow from "../../assets/vector1.svg";
import { Link } from "react-router-dom";
import { Arrow } from "../../components/icons";

function Blog(props) {
  return (
    <div>
      <BlogContainer>
        <Breadcrumb>
          <Link to="/">Главная</Link>
          <img src={arrow} alt="" />
          <span>Блог</span>
        </Breadcrumb>

        <BlogHeader>
          <BlogTitle>Блог</BlogTitle>
        </BlogHeader>

        <BlogGrid>
          {[blog1, blog2, blog3].map((img, i) => (
            <BlogCard key={i}>
              <img src={img} alt="" />
              <BlogWord>
                <p>Как правильно осветить дом снаружи?</p>
                <Arrow />
              </BlogWord>
              <BlogDate>01.01.2024</BlogDate>
            </BlogCard>
          ))}
        </BlogGrid>
        <BlogGrid>
          {[blog1, blog2, blog3].map((img, i) => (
            <BlogCard key={i}>
              <img src={img} alt="" />
              <BlogWord>
                <p>Как правильно осветить дом снаружи?</p>
                <Arrow />
              </BlogWord>
              <BlogDate>01.01.2024</BlogDate>
            </BlogCard>
          ))}
        </BlogGrid>
      </BlogContainer>
    </div>
  );
}

export default Blog;
