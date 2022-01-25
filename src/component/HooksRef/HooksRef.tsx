import React, {useEffect, useRef} from 'react';

const HooksRef = () => {
	const ref = useRef<HTMLDivElement>(null);
	const value = useRef<number>(0);
	useEffect(() => {
		const interval = setInterval(() => (value.current += 1), 100);
		setTimeout(() => clearInterval(interval), 1000);
	}, []);
	return <div ref={ref}>HTML</div>;
};

export default HooksRef;
