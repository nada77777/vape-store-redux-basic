









// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './store/store';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
// 	<Provider store={store}>
// 		<BrowserRouter basename={process.env.PUBLIC_URL}>
// 			<App />
// 		</BrowserRouter>
// 	</Provider>
// );





















// import { useSelector, useDispatch } from "react-redux";


// function Main() {
// 	const dispatch = useDispatch()

// 	const { value } = useSelector(state => state.value)
// 	const { count } = useSelector(state => state.count)

// 	const addValue = () => {
// 		dispatch({ type: 'increment' })
// 	}
// 	const subValue = () => {
// 		dispatch({ type: 'decrement' })
// 	}
// 	const resetValue = () => {
// 		dispatch({ type: 'reset' })
// 	}
// 	const pushButton = () => {
// 		dispatch({ type: 'push' })
// 	}

// 	return (
// 		<div className="App">
// 			<div>
// 				value: {value}
// 			</div>
// 			<button onClick={addValue}> + </button>
// 			<button onClick={subValue}> - </button>
// 			<button onClick={resetValue}> reset </button>
// 			<div>
// 				count: {count}
// 			</div>
// 			<button onClick={pushButton}> click </button>
// 		</div>
// 	);
// }

// export default Main;