import { createContext, useContext } from 'react';

const mainContext = createContext();
export const useMainContext = () => useContext(mainContext);

const MainContext = ({ children }) => {
	let values = {};

	return <mainContext.Provider value={values}>{children}</mainContext.Provider>;
};

export default MainContext;
