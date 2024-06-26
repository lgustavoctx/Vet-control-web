import React from 'react';
import '../styles/home.css';

//IMAGES
import homeimg from '../assets/home-img.png';
import animal from '../assets/dog.png';
import tutor from '../assets/owner.png';
import veterinario from '../assets/veterinary.png';
import { NavLink } from 'react-router-dom';

const home = () => {
  return (
    <div className="home">
      <div>
        <img className="home-img" src={homeimg} />
      </div>

      <div className="wrapper">
        <img src={tutor} />
        <NavLink to="/cadastrar-tutor">Cadastrar tutor</NavLink>
      </div>

      <div className="wrapper">
        <img src={animal} />
        <NavLink to="/cadastrar-animal">Cadastrar animal</NavLink>
      </div>

      <div className="wrapper">
        <img src={veterinario} />
        <NavLink to="/cadastrar-veterinario">Cadastrar veterinário</NavLink>
      </div>
    </div>
  );
};

export default home;
