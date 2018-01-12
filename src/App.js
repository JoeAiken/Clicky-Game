import React, {Component} from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import friends from "./characters.json";
import "./App.css";

class App extends Component {
  
  state = {
    friends
  };
  
  isClicked = id => {
    console.log(id)
    
    const friends = this.state.friends.filter(friend => friend.id !== id);
    
    this.setState({friends});
    
    
  };
  
  render() {
    return(
     
      <Wrapper>
        
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
    
              <a class="navbar-brand" href="/">Brand</a>
        </div>
        </div>
        </nav>
        
      
        {this.state.friends.map(friend => (
          <CharacterCard
            removeFriend = {this.removeFriend}
            id = {friend.id}
            key = {friend.id}
            name = {friend.name}
            image = {friend.image}
          />
        ) 
      )
    }
      </Wrapper>  
  

    )
  }
}

export default App;
