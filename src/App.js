import React, {Component} from "react";
import CharacterCard from "./components/CharacterCard";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";
import "./App.css";

let correctGuesses = 0;
let topScore = 0;
let clickMessage = "Click an image to start!";

class App extends Component {
  
  state = {
    characters,
    correctGuesses,
    clickMessage,
    topScore
    
  };
  
  setClicked = id => {
    console.log(id)
    
    const characters = this.state.characters;
     // Filter for the clicked match
    const clickedMatch = characters.filter(character => character.id === id);
    
        // If the matched image's clicked value is already true, 
        // do the game over actions
        if (clickedMatch[0].clicked){

            console.log ("Correct Guesses: " + correctGuesses);
            console.log ("Top Score: " + topScore);

            correctGuesses = 0;
            clickMessage = "Game Over! You've already clicked that image!";
            

            for (let i = 0 ; i < characters.length ; i++){
                characters[i].clicked = false;
            }

            this.setState({clickMessage});
            this.setState({ correctGuesses });
            this.setState({characters});

        // Otherwise, ff clicked = false
        }
    
        else {

            // Set its value to true
            clickedMatch[0].clicked = true;

            // increment the appropriate counter
            correctGuesses++;
            clickMessage ="Correct! Keep clicking!"
            

            if (correctGuesses > topScore){
                topScore = correctGuesses;
                this.setState({ topScore });
            }

            // Shuffle the array to be rendered in a random order
            characters.sort(function(a, b){return 0.5 - Math.random()});

            // Set this.state.characters equal to the new characters array
            this.setState({ characters });
            this.setState({correctGuesses});
            this.setState({clickMessage});
        }
    };
    
    
    

  
  render() {
    return(
    
      <Wrapper>
      <Title>
        <div className ="header-container">
          <header>
            
              <p className ="score"><a href ="../../public">Start Over</a></p> &nbsp; &nbsp; &nbsp; &nbsp;
              <h3 className = "score">{this.state.clickMessage}</h3>&nbsp;&nbsp;&nbsp;
              <p className ="score">Score: {this.state.correctGuesses}</p> &nbsp; &nbsp;
              <p className ="score">Top Score: {this.state.topScore} </p>
            
          </header>
        </div>
      </Title>
        
      
        {this.state.characters.map(character => (
          <CharacterCard
            setClicked = {this.setClicked}
            id = {character.id}
            key = {character.id}
            name = {character.name}
            image = {character.image}
          />
        ) 
      )
    }
      </Wrapper>  
  

    )
  }
}

export default App;
