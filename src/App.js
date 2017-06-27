import React, { Component } from 'react';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="cf flex flex-wrap vh-100 sans-serif fw5 white">
        <div className="flex w-100 w-33-m w-20-l tc vh-25 items-center justify-center bug ">
          Bug
        </div>
        <div className="flex w-100 w-33-m w-20-l tc vh-25 items-center justify-center dark ">
          <div className="bar w-50 relative vh-25 lh-copy-2 overflow-hidden">
               <div className="relative z-100">
                   <span>Dark</span>
                   <span className="fr">1.25</span>
               </div>
               <progress className="db dark h-100 absolute left-0 top-0 w-100" value="1.4" max="1.4"></progress>
          </div>
        </div>

        <div className="flex w-100 w-33-m w-20-l tc vh-25 items-center justify-center dragon">
          Dragon
        </div>

        <div className="flex w-100 w-33-m w-20-l tc vh-25 items-center justify-center electric">
          Electric
        </div>

        <div className="flex w-100 w-33-m w-20-l tc vh-25 items-center justify-center fairy">
          <span>Fairy</span><br/>
          <span>1.25</span>
        </div>

        <div className="flex w-100 w-33-m w-20-l tc vh-25 items-center justify-center fight ">
          Fighting
        </div>

        <div className="flex w-100 w-33-m w-20-l tc vh-25 items-center justify-center fire ">
          Fire
        </div>

        <div className="flex w-100 w-33-m w-20-l tc vh-25 items-center justify-center flying">
          Flying
        </div>

        <div className="flex w-100 w-33-m w-20-l tc vh-25 items-center justify-center ghost ">
          Ghost
        </div>

        <div className="flex w-100 w-33-m w-20-l tc vh-25 items-center justify-center grass ">
          Grass
        </div>

        <div className="flex flex-wrap w-100 w-33-m w-20-l tc vh-25 items-center justify-center ground">
          <div className="bar w-100 relative vh-20 lh-copy-2 overflow-hidden">
               <div className="relative z-100">
                   <span>Electric</span>
                   <span className="fr">.8</span>
               </div>
               <progress className="db electric h-100 absolute left-0 top-0 w-100" value="1.4" max="1.4"></progress>
          </div>
          <div className="bar w-100 relative vh-20 lh-copy-2 overflow-hidden">
               <div className="relative z-100">
                   <span>Grass</span>
                   <span className="fr">1.25</span>
               </div>
               <progress className="db grass vh-100 absolute left-0 top-0 w-100" value="1.4" max="1.4"></progress>
          </div>
          <div className="bar w-100 relative vh-20 lh-copy-2 overflow-hidden">
               <div className="relative z-100">
                   <span>Rock</span>
                   <span className="fr">1.25</span>
               </div>
               <progress className="db rock h-100 absolute left-0 top-0 w-100" value="1.4" max="1.4"></progress>
          </div>
          <div className="bar w-100 relative vh-20 lh-copy-2 overflow-hidden">
               <div className="relative z-100">
                   <span>Poison</span>
                   <span className="fr">1.25</span>
               </div>
               <progress className="db poison h-100 absolute left-0 top-0 w-100" value="1.4" max="1.4"></progress>
          </div>
          <div className="bar w-100 relative vh-20 lh-copy-2 overflow-hidden">
               <div className="relative z-100">
                   <span>Ice</span>
                   <span className="fr">1.25</span>
               </div>
               <progress className="db ice h-100 absolute left-0 top-0 w-100" value="1.4" max="1.4"></progress>
          </div>

        </div>

        <div className="flex w-100 w-33-m w-20-l tc vh-25 items-center justify-center ice ">
          Ice
        </div>

        <div className="flex w-100 w-33-m w-20-l tc vh-25 items-center justify-center normal black">
          Normal
        </div>
        <div className="flex w-100 w-33-m w-20-l tc vh-25 items-center justify-center poison ">
          Poison
        </div>
        <div className="flex w-100 w-33-m w-20-l tc vh-25 items-center justify-center psychic ">
          Psychic
        </div>

        <div className="flex w-100 w-33-m w-20-l tc vh-25 items-center justify-center rock">
          Rock
        </div>
        <div className="flex w-100 w-33-m w-20-l tc vh-25 items-center justify-center steel">
          Steel
        </div>
        <div className="flex w-100 w-33-m w-20-l tc vh-25 items-center justify-center water ">
          Water
        </div>

      </div>

    );
  }
}

export default App;
