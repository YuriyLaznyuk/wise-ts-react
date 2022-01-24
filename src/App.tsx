import React from 'react';
import './app.scss';
import HeadLine from './component/headline/HeadLine';
import CustomInput from './component/CustomInput/CustomInput';

const title: JSX.Element = <h1 className='text-center py-2'>React + TS</h1>;

const App = () => {
	return (
		<div className='app'>
			<h1>Wise -ts - react</h1>
			{title}
			<HeadLine>Hello children</HeadLine>
			<div>
				<CustomInput disabled={true} value='123' type='text' />
			</div>
		</div>
	);
};

export default App;
