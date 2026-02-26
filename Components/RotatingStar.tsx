import * as React from "react";

const RotatingStar = (props: any) => (
    <svg
        className="star"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-1.3 -1.6 54.7 46.8"
        style={{
            fill: "#000",
        }}
        width={1782}
        height={1522.8}
        {...props}
    >
        <g
            fillRule="evenodd"
            style={{
                fill: "#000",
            }}
        >
            <g id="rotating-star-group">
                <path
                    id="rotating-star"
                    d="M25.95 37.945h.25c0-14.918 2.417-16 16-16v-.25c-13.583 0-16-1.086-16-16h-.25c0 14.914-2.419 16-16 16v.25c13.581 0 16 1.082 16 16"
                    style={{
                        fill: "inherit",
                    }}
                />
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 26.075 21.82"
                    to="90 26.075 21.82"
                    dur="2s"
                    repeatCount="indefinite"
                />
            </g>

        </g>
    </svg>
);

export default RotatingStar;