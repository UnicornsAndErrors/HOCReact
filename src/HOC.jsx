import React from 'react'

const HOC = (Component) => {
const uzorakObjekt ={
    ime:"Igor",
    prezime:"JevremoviÄ‡",
    posao:"Sam svoj rob",
}
  return ()  => <Component vrijednost={uzorakObjekt}/>;
  
  
};

export default HOC;