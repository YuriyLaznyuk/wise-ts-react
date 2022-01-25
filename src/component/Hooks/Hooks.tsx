import React, {useEffect, useReducer} from 'react';

interface Person {
	name: string;
	mass: string;
	hair_color: string;
	skin_color: string;
	eye_color: string;
	birth_year: string;
	gender: string;
	homeworld: string;
	films: string[];
	species: any[];
	vehicles: string[];
	starships: string[];
	created: Date;
	edited: Date;
	url: string;
}
type State = {
	data: Person | null;
	loading: boolean;
	error: Error | null;
};
type Action = {type: 'request'} | {type: 'response'; payload: Person};

function reducer(state: State, action: Action): State {
	switch (action.type) {
		case 'response':
			return {...state, data: action.payload};
		default:
			return state;
	}
}

const fetchPerson = async (id = 1): Promise<Person> => {
	const response = await fetch(`https://swapi.dev/api/people/${id}`);
	return response.json();
};

const Hooks = () => {
	// const [person, setPerson] = useState<Person | null>(null);
	// useEffect(() => {
	// 	fetchPerson().then((data) => setPerson(data));
	// }, []);

	const [state, dispatch] = useReducer(reducer, {} as State);
	useEffect(() => {
		fetchPerson().then((data) => dispatch({type: 'response', payload: data}));
	}, []);

	// return <div>{person?.name}</div>;
	return <div>{state?.data?.name}</div>;
};

export default Hooks;
