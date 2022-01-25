import React, {
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState,
} from 'react';

// type ThreeDogProps = Record<'prop1' | 'prop2' | 'prop3', Dog>;
//
// // эквивалентно
// type ThreeDogProps = {
// 	prop1: Dog;
// 	prop2: Dog;
// 	prop3: Dog;
// }

interface Theme {
	color: string;
	background: string;
}

type AvailableThemes = 'light' | 'dark';
const themes: Record<AvailableThemes, Theme> = {
	// const themes: Record<AvailableThemes, React.CSSProperties> = {
	light: {
		color: '#000000',
		background: '#eeeeee',
	},
	dark: {
		color: '#ffffff',
		background: '#222222',
	},
};

// const ThemeContext = createContext<Theme>(theme.light);
const ThemeContext = createContext<{
	theme: Theme;
	toggle: () => void;
	setTheme?: (t: AvailableThemes) => void;
}>({
	theme: themes.dark,
	toggle: () => {
		return;
	},
});

export const ThemeProvider: React.FC = ({children}) => {
	const [currentTheme, setCurrentTheme] = useState<AvailableThemes>('dark');

	const toggle = useCallback<() => void>(() => {
		setCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark');
	}, [currentTheme]);
	const setTheme = useCallback<(theme: AvailableThemes) => void>((theme) => {
		setCurrentTheme(theme);
	}, []);
	const memoizedTheme = useMemo<Theme>(() => {
		return themes[currentTheme];
	}, [currentTheme]);
	return (
		<ThemeContext.Provider
			value={{
				setTheme: setTheme,
				toggle: toggle,
				// theme: themes[currentTheme],
				theme: memoizedTheme,
			}}>
			{children}
		</ThemeContext.Provider>
	);
};

const UseContextHuk = () => {
	const {theme, toggle} = useContext(ThemeContext);
	return (
		<div>
			<button
				onClick={toggle}
				style={{background: theme.background, color: theme.color}}>
				simple button
			</button>
		</div>
	);
};

export default UseContextHuk;
