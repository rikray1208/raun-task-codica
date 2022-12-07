import React from "react"
import ContentLoader from "react-content-loader"

const ForecastChartSkeleton = () => (
    <ContentLoader
        speed={2}
        width={640}
        height={420}
        viewBox="0 0 640 420"
        backgroundColor="#839199"
        foregroundColor="#a8b2b8"
    >
        <rect x="0" y="0" rx="22" ry="22" width="640" height="420" />
    </ContentLoader>
)

export default ForecastChartSkeleton