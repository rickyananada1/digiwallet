import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import NotFound from './pages/not_found/NotFound';
import Register from './pages/register/Register';
import TopUp from './pages/top_up/TopUp';
import Transfer from './pages/transfer/Transfer';
import TopUpSuccess from './pages/top_up/TopUpSuccess';
import TransferSuccess from './pages/transfer/TransferSuccess';
import Games from './pages/games/Games';

function App(): JSX.Element {
    return (
        <div className='App'>
            <Router>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/topup' element={<TopUp />} />
                    <Route path='/topup/:refId' element={<TopUpSuccess />} />

                    <Route path='/transfer' element={<Transfer />} />
                    <Route
                        path='/transfer/:refId'
                        element={<TransferSuccess />}
                    />
                    <Route path='/games' element={<Games />} />

                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
