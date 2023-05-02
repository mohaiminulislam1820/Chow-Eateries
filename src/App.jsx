import React from 'react';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
    <ToastContainer hideProgressBar={true} autoClose={1500}></ToastContainer>
    </>
  );
};

export default App;