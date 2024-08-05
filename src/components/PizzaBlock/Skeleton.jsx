import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader
        speed={2}
        width={280}
        height={468}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="140" cy="120" r="120" />
        <rect x="0" y="265" rx="10" ry="10" width="280" height="27" />
        <rect x="0" y="310" rx="10" ry="10" width="280" height="88" />
        <rect x="0" y="425" rx="10" ry="10" width="90" height="27" />
        <rect x="130" y="417" rx="30" ry="30" width="150" height="45" />
    </ContentLoader>
)

export default MyLoader

