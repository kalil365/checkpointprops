import './App.css';
import MyProfile from './profile/MyProfile';
import Picture from './profile/Picture';


function App() {
  const fullName= "Jimmy White";
  const info = {
    profession : 'engineer',
    bio :'Engineering is my superpower, and I use it to improve the world'
  };
  
  const handleName = name => alert(fullName);
  const styleObject = {
    fontFamily: 'Verdana, sans-serif' ,
    color : '#9C7FCC ' ,
    
  }

  return (
    <div className="App"  style={styleObject}>
      <Picture><img src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
            </Picture>
      <MyProfile fullName={fullName} info ={info} handleName={handleName}/>
      
      
    </div>
  );
}

export default App;
