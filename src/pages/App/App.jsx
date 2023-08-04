import Layout from "../../layout/Layout";
import '../../styles/App.scss';
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchAuthMe} from "../../features/authMeSlice";

function App() {

    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(fetchAuthMe());
        },[]);

  return (
    <>
      <Layout />
    </>
  )
}

export default App;
