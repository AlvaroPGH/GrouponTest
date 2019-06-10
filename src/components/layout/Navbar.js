import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (

    <header class="ht-header">
      <div class="container">
        <nav class="navbar navbar-default navbar-custom">
            <div class="navbar-header logo">
            <Link to="/"><img class="logo" src="images/logo1.png" alt="" width="119" height="58"/>  </Link>
              </div>
            
          </nav>
      </div>
    </header>
  );
}

export default Navbar;
