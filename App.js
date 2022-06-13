import  { useEffect, useState } from 'react'
import "./App.css";
import axios from 'axios';
import Button from './components/Button/Button';
import Search from './components/Search/Search';
import Show from './components/Show/Show';


function App(){
  const [gitUser, setgitUser] = useState("");
  const [searchedUser, setSearchedUser] = useState ("");
  const [users, setUsers] = useState ([]);
 // const [user, setUser] = useState ({});
console.log (users);

  
  useEffect(()=>{
    try {
      async function fetchData(){
      const githubApiUrl =`https://api.github.com/users/${searchedUser}`; 
      if (gitUser === "")return;
      const {data} = await axios.get(githubApiUrl);
      const {avatar_url, created_at, login, public_repos } = data;
      setUsers ([...users,{avatar_url, created_at, login, public_repos}]);

     console.log(data);
     }
     fetchData();
    }
    catch (e){
      console.log(e);
    }
  },[searchedUser]);
  
  return ( 
     <div className="App"> 
    <Search setGitUser={setgitUser} gitUser={gitUser} />
   <Button
    text = {"search"} 
    clickEvent={() =>{
       console.log("search");
       setSearchedUser(gitUser);
    }}/>
  <Button text = {"reset"} clickEvent={() =>{setUsers([])}}/>


  <div className='showCard'>     
{users.map(user => 
  <Show user={user} users={users} setUsers={setUsers} />
 
   
 )}
   </div> 

       
       
     

   </div>

  ) ;
}

export default App
