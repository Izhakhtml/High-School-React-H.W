import React,{ Routes,Route,BrowserRouter,Link}from 'react-router-dom';
import PageHome from "./PageHome.component"
import Parent from "./Parent.component"
import Student from "./Student.component"
import Teacher from "./Teacher.component"
export default function Routering() {
return(
       <BrowserRouter>
                          <Link to="/">Page Home</Link>
                          <Link to="/Parent">Parent</Link>
                          <Link to="/Student">Student</Link>
                          <Link to="/Teacher">Teacher</Link>
                          <hr/>
                  <Routes>
                         <Route exact path="/" element ={<PageHome/>}/>
                         <Route path="/Parent" element ={<Parent/>}/>
                         <Route path="/Student" element ={<Student/>}/>
                         <Route path="/Teacher" element ={<Teacher/>}/>
                 </Routes>
       </BrowserRouter>
)    
}