import React from 'react'
import ContentLoader from "react-content-loader"

const Skeleton = () => {
  return (
    <ContentLoader
      className='pizza-block'
      speed={0}
      width={280}
      height={465}
      viewBox="0 0 280 465"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="136" cy="140" r="112" />
      <rect x="0" y="286" rx="10" ry="10" width="276" height="23" />
      <rect x="1" y="323" rx="10" ry="10" width="273" height="77" />
      <rect x="3" y="424" rx="10" ry="10" width="108" height="27" />
      <rect x="116" y="416" rx="20" ry="20" width="160" height="41" />
    </ContentLoader>
  )

}

export default Skeleton;






