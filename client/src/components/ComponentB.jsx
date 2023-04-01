import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchApi } from '../store/actions.reducers';

function ComponentB() {

    const state = useSelector(state => state.apiReducer)
    const dispatch = useDispatch()

    // when api call is made, display loading
    const isLoading = () => {
      if(state.loading) {
        console.log("Loading")
        return <h1>LOADING......</h1>
      }
    }

    // api is called here
    useEffect(() => {
      dispatch(fetchApi()) 
    }, [dispatch])

  return (
    <div className="App">
      <header className="App-header">

        <h1>Animal Details</h1>

        {isLoading()}

        {state.api.map((item, index) => {
            return (
                <div key={index}>
                    <p>{item["Biology"]}</p>
                </div>
            )
        })}
      </header>
    </div>
  );
}

export default ComponentB;
