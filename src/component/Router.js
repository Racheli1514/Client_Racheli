import Form from './Form';
import ChildForm from './ChildForm';
import Context from './Context';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Instractions from './Instractions';
import Excel from './Excel';


export default function Router()
{
    return(<div>       
        <Routes>
        <Route path='/' element={<Context><Home/></Context>} />
        <Route path='/Form' element={<Context><Form/></Context>} />
        <Route path='/Instractions' element={<Context><Instractions/></Context>} />
        <Route path="/Excel" element={<Context><Excel/></Context>}></Route>

        </Routes>
    </div>)
}

