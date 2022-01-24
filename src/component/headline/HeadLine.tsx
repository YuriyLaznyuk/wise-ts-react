import React from 'react';

interface Props {
	children?: React.ReactNode;
}

const HeadLine = ({children}: Props) => {
	return (
		<div>
			<h1>{children}</h1>
		</div>
	);
};

export default HeadLine;
