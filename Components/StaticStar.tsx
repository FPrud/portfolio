import * as React from "react";

const StaticStar = (props: any) => (
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
            <path
                id="star"
                d="M25.95 37.945h.25c0-14.918 2.417-16 16-16v-.25c-13.583 0-16-1.086-16-16h-.25c0 14.914-2.419 16-16 16v.25c13.581 0 16 1.082 16 16"
                style={{
                    fill: "inherit",
                }}
            />
            <path
                id="circle"
                d="M21.719 2.121C7.934-1.602-1.293 4.203 1.117 15.082 3.523 25.961 16.648 37.797 30.43 41.52c13.785 3.722 23.008-2.079 20.601-12.961C48.625 17.679 35.5 5.844 21.72 2.12m.133.61C8.492-.876-.445 4.745 1.887 15.288s15.05 22.012 28.41 25.621c13.355 3.606 22.297-2.015 19.965-12.558S35.21 6.34 21.852 2.73"
                style={{
                    fill: "inherit",
                }}
            />
        </g>
    </svg>
);

export default StaticStar;