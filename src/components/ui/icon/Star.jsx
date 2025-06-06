
import React from 'react';

const Star = ({ width = '17.511719', height = '16.689941' }) => {
	return (
		<svg
			width={width}
			height={height}

			viewBox="0 0 17.5117 16.6899"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
		>
			<path
				d="M8.4 0.25L6.59 5.84C6.54 5.99 6.4 6.09 6.24 6.09L0.36 6.09C0.01 6.09 -0.14 6.54 0.15 6.75L4.9 10.21C5.03 10.3 5.09 10.46 5.04 10.61L3.22 16.21C3.11 16.54 3.49 16.82 3.78 16.61L8.54 13.16C8.66 13.06 8.84 13.06 8.96 13.16L13.72 16.61C14.01 16.82 14.39 16.54 14.28 16.21L12.47 10.61C12.42 10.46 12.47 10.3 12.6 10.21L17.36 6.75C17.64 6.54 17.49 6.09 17.14 6.09L11.26 6.09C11.1 6.09 10.96 5.99 10.91 5.84L9.1 0.25C8.99 -0.09 8.51 -0.09 8.4 0.25Z"
				fill="#EAB308"
				fillOpacity="1.0"
				fillRule="evenodd"
			/>
		</svg>
	);
};

export default Star;