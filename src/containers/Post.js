import React from "react"
import { withRouteData, Head } from "react-static"
import moment from "moment"

import "./Post.css"

export default withRouteData(({ post }) => (
  <>
    <Head>
      <title>{post.title} - OpenSAGE</title>
    </Head>
    <h1>{post.title}</h1>
    <div className="post-metadata">
      <span className="post-metadata__author">{post.author}</span>
      <span className="post-metadata__date">
        {moment(post.publishedDate).format("DD MMMM YYYY")}
      </span>
    </div>
    <div
      className="post-content"
      dangerouslySetInnerHTML={{ __html: post.html }}
    />
  </>
))
