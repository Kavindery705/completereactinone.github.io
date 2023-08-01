import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css'
import Navigationbar from './Navigationbar';
import Count1 from './pages/Count1';
import Home from './pages/Home';
import PropsConcept from './pages/PropsConcept';
import Error from './pages/Error';
import ChildRoutes from './pages/ChildRoutes';
import Html1 from './pages/subpages/Html1';
import Css1 from './pages/subpages/Css1';
import Useefffectdemo from './pages/Useefffectdemo';
import FetchApi from './pages/FetchApi';
import AxiosApi from './pages/AxiosApi';
import AsyncAwait from './pages/AsyncAwait';
import FormValidation from './pages/FormValidation';
import CRUDApi from './pages/CRUDApi';
import GetApi from './pages/subpages/GetApi';
import Edit from './pages/subpages/Edit';
import Delete from './pages/subpages/Delete';
import LocalStorage from './pages/LocalStorage';
import LocalStorage2 from './pages/LocalStorage2';
import USeref from './pages/USeref';
import PropsDrilling from './pages/PropsDrilling';
import FirstPropsDril from './pages/FirstPropsDril';
import SecondPropsDril from './pages/SecondPropsDril';
import UseContext from './pages/UseContext';
import CustomHooks from './CustomHooks';
import UseReducer from './pages/UseReducer';
function App() {

  return (
    <>
    <Router>
      <Navigationbar/>
      <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/usestate' element={<Count1/>}/>
    <Route path='/props' element={<PropsConcept />}/>
    <Route path='*' element={<Error/>}/>
    <Route path='/childroute' element={<ChildRoutes/>}/>
    <Route path='/childroute/html1' element={<Html1/>}/>
    <Route path='/childroute/css1' element={<Css1/>}/>
    <Route path='/useeffectd' element={<Useefffectdemo/>}/>
    <Route path='/fetchapi' element={<FetchApi/>}/>
    <Route path='/axiosapi' element={<AxiosApi/>}/>
    <Route path='/asyncawaitapi' element={<AsyncAwait/>}/>
    <Route path='/formvalidation' element={<FormValidation/>}/>
    <Route path='/crudapi' element={<CRUDApi/>}/>
    <Route path='/get' element={<GetApi/>}/>
    <Route path='/edit/:id' element={<Edit/>}/>
    <Route path='/delete/:id' element={<Delete/>}/>
    <Route path='/localstorage' element={<LocalStorage/>}/>
    <Route path='/localstorage2' element={<LocalStorage2/>}/>
    <Route path='/useref' element={<USeref/>}/>
    <Route path='/propsdrilling' element={<PropsDrilling/>}/>
    <Route path='/usecontext' element={<UseContext/>}/>
    <Route path='/customhooks' element={<CustomHooks/>}/>
    <Route path='/usereducer' element={<UseReducer/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
