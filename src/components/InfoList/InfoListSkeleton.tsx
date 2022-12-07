import React, {FC} from 'react';
import ContentLoader from "react-content-loader";

const InfoListSkeleton: FC = () => {
    return (
        <ContentLoader
            speed={2}
            width={640}
            height={420}
            viewBox="0 0 640 420"
            backgroundColor="#839199"
            foregroundColor="#a8b2b8"
        >
            <circle cx="241" cy="23" r="19" />
            <rect x="9" y="9" rx="11" ry="11" width="201" height="26" />
            <rect x="426" y="97" rx="0" ry="0" width="110" height="0" />
            <rect x="13" y="58" rx="10" ry="10" width="551" height="20" />
            <rect x="12" y="87" rx="10" ry="10" width="551" height="20" />
            <rect x="18" y="124" rx="6" ry="6" width="544" height="2" />
            <rect x="12" y="141" rx="10" ry="10" width="551" height="20" />
            <rect x="11" y="170" rx="10" ry="10" width="551" height="20" />
            <rect x="17" y="207" rx="6" ry="6" width="544" height="2" />
            <rect x="16" y="221" rx="10" ry="10" width="551" height="20" />
            <rect x="15" y="250" rx="10" ry="10" width="551" height="20" />
            <rect x="21" y="287" rx="6" ry="6" width="544" height="2" />
            <rect x="15" y="304" rx="10" ry="10" width="551" height="20" />
            <rect x="14" y="333" rx="10" ry="10" width="551" height="20" />
            <rect x="20" y="370" rx="6" ry="6" width="544" height="2" />
        </ContentLoader>
    );
};

export default InfoListSkeleton;