import React from 'react';

const CustomInput = (props: React.HTMLProps<HTMLInputElement>) => {
	//--var1--//
	// const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	console.log(e.target.value);
	// };

	//--var2--//

	const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		console.log(e.target.value);
	};
	//--var1--//
	// const onClick: React.MouseEventHandler = (e) => {
	// 	e.preventDefault();
	// };

	//--var2--//
	const onClick: React.ReactEventHandler = (e) => {
		e.preventDefault();
	};
	return (
		<input
			placeholder='...customInput'
			onChange={onChange}
			onClick={onClick}
			{...props}
		/>
	);
};

export default CustomInput;
