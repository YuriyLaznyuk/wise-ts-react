import React from 'react';
import './app.scss';
import HeadLine from './component/headline/HeadLine';
import CustomInput from './component/CustomInput/CustomInput';
import CustomInputHuk from './component/CustomInputHuk/CustomInputHuk';
import Hooks from './component/Hooks/Hooks';
import UseContextHuk, {
	ThemeProvider,
} from './component/UseContextHuk/UseContextHuk';

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
			<CustomInputHuk disabled={true} value='hello' />
			<Hooks />
			<ThemeProvider>
				<UseContextHuk />
			</ThemeProvider>
		</div>
	);
};

export default App;
