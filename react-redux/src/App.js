import {useSelector,useDispatch} from 'react-redux'
import {actions} from './store/index'

function App() {
  const counter = useSelector((state)=> state.counter)
  const dispatch = useDispatch();
  const increment = () =>{
    //action is INC
      //dispatch({type: 'INC'})      
      dispatch(actions.increment())//redux toolkit method
  }
  const decrement =()=>{
    //action is DEC
    //dispatch({type:'DEC'})
    dispatch(actions.decrement())//reduct toolkit metho

  }
  const add = ()=>{
    //this sends data from the app.js to the reducerfn
    //dispatch({type:'ADD', payload:10})
    dispatch(actions.addBy(20))
  }
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={add}>Add by 10</button>
      
    </div>
  );
}

export default App;
