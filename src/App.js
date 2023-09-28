import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Users from './components/Users';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';
import Detail from './components/Detail';
import Header from './components/Header';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Router>
                <Routes>
                    <Route path="/" element={<Users />} />
                    <Route path="/detail/:id" element={<Detail />} />
                    <Route path="/create" element={<CreateUser />}></Route>
                    <Route path="/update/:id" element={<UpdateUser />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

<ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"
/>;

export default App;
