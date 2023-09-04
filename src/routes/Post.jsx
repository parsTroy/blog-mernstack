import React from 'react'

const Post = () => {
  return (
    <div className="post">
        <div>
          <img src="https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg" />
        </div>
        <div className="copy">
          <h2>TEST HEADER 1</h2>
          <p className="info">
            <a className="author">Troy Parsons</a>
            <time className="">2023-09-04 13:54</time>
          </p>
          <p className="content">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        </div>
    </div>
  )
}

export default Post