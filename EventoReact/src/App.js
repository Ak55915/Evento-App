// import logo from './logo.svg';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import CustomerRegisterFunctional from './CustomerRegisterFunctional';
// import CustomerRegistration from './CustomerRegistration';
import VendorRegistration from './VendorRegistration'; 
//import AddEvent from './AddEvent';
//import EventRequest from './EventRequest';
import ContactUs from './ContactUs';
import Login from './Login';
import Customer from './Customer';
import Vendor from './Vendor';
import Admin from './Admin';
import Error from './Error';
import ContactUsf from './ContactUsf';
import Home from './Home';
import MainScreen from './Main';
import EventRequest from './EventRequest'
import CustomerUpdate from './CustomerUpdate';
import ViewRequest from './ViewRequest';
import VendorUpdate from './VendorUpdate';
import AddEvent from './AddEvent';
import Report from './Report';
function App() {
  return (
   <div>
       
     {/* < VendorRegistration />*/}
       <MainScreen/>
      
      <BrowserRouter>
   
     
     <Routes>
       <Route path='/' element={<Home/>} />

       <Route path='/customerhome' element={<Customer/>} />
       <Route path='/vendorhome' element={<Vendor/>} />
       <Route path='/adminhome' element={<Admin/>} />
       <Route path='/error' element={<Login/>} />
       <Route path='/login' element={<Login/>} />
       <Route path='/contactus' element={<ContactUsf/>} />
       <Route path='/customerregister' element={<CustomerRegisterFunctional/>} />
       <Route path='/updatecustinfo' element={<CustomerUpdate/>} />
       <Route path='/eventrequest' element={<EventRequest/>} />
       <Route path='/viewrequest' element={<ViewRequest/>} />
       <Route path='/vendorupdate' element={<VendorUpdate/>} />
       <Route path='/addevent' element={<AddEvent/>} />
       <Route path='/vendorreg' element={<VendorRegistration/>} />
       <Route path='/report' element={<Report/>} />
      </Routes>
</BrowserRouter>
        
       
        
   
  </div>   
  );
}

export default App;
