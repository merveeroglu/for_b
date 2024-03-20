import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodosPage from "./pages/todos-page";
import CommentsPage from "./pages/comments-page";
import ContactPage from "./pages/contact-page";
import TodoHeader from "./components/todo-header/todo-header";
import Merve from "./pages/Merve";
// import { useEffect, useState } from "react";

const App = () => {

// =====useQuery KULLANIMI===
// import { useQuery } from 'react-query'

// function App() {
//   const fetchData=useQuery(['posts'], ()=>{              //posttan gelen şey dizi diye [] içine aldık posts u ('user', ()=>{}) 
//     return fetch('https://jsonplaceholder.org/posts').then(resp=>resp.json())
//   },{
//     enabled: false
//   })             
//   const {data, isLoading, refetch}=fetchData       //enable: false olayı için refetch i de çektik
//   console.log(data, isLoading, 'fetchData');
  
//   if(isLoading){
//     return <div>Loading...</div>
//   }

//   return (
//     <div>
//       <button onClick={()=>refetch()}>veri çek</button> 
//       <div>
//         {
//           data && data.map((dt,i)=>(
//             <div key={i}>{dt.title}</div>
//           ))
//         }
//       </div>
//     </div>
//   )
// }

// export default App

// import { useMutation } from 'react-query'
// import './App.css'

// function App() {
//   const mutateData = useMutation(['users'], (newPost)=>{
//     return fetch('https://jsonplaceholder.org/users', {
//       method:'POST',
//       body: JSON.stringify(newPost),
//       // headers:{
//       //   "Content-Type": "application/json;  charset=UTF-8"
//       // }
//     }).then(resp=>resp.json())
// })  
// const {data, mutate, reset, isLoading} = mutateData
// if(isLoading){
//   return <div>Yükleniyor...</div>
// }

// console.log(data,mutateData,'mutateData');
//   return (
//     <div>
//       <button onClick={()=>mutate({title:"Deneme", body:"deneme-body", userId: 1})}>veri ekle</button> {/*{title:"Deneme", body:"deneme-body", userId: 1} bu kısım newpost oluyor */}
//       <button onClick={()=>reset()}>veri reset</button> 
//       <div>

//       </div>
//     </div>
//   )
// }
  
  return (
      <BrowserRouter>
        <TodoHeader/>
        <Routes>
          <Route path="/" element={<TodosPage />} />
          <Route path="/comments" element={<CommentsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/merve" element={<Merve />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
