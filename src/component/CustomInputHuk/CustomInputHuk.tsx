import React, {useState} from 'react';

const CustomInputHuk = (props: React.HTMLProps<HTMLInputElement>) => {
	const [value, setValue] = useState<string>('');
	// const [value, setValue] = useState<number>(0);
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
		// setValue(Number(e.target.value));
	};
	return <input onChange={onChange} value={value} type='text' {...props} />;
};

export default CustomInputHuk;
