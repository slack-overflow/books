import React from "react"

class Navbar extends React.Component {

  render() {
    return (
      <nav className='navbar navbar-default navbar-static-top'>
        <div className='navbar-header'>
          <p className='h4'>Flashcards Application!</p>
        </div>
      </nav>
    );
  }
}

export default Navbar;