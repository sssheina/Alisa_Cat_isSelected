import React from 'react';

import './cat.scss';

import cat from '../assets/images/paw.png';

class Cat extends React.Component {
    render() {
      const { name, img, text, isSelected, } = this.props;
      // const classCat=(isSelected?"selected":"");

      let classCat;
      if(isSelected) classCat="selected";

      return (
    
        // <div className={"cat-card "+classCat}>

        <div className={`cat-card ${classCat}`}>
        <img className="cat-pic" src={img} alt="cat"></img>
        <div className="cat-name">{name}</div>
        <div className="cat-text">Центральное понятие в React – компонент. Вся остальная функциональность построена вокруг него</div>
        <div className="cat-text">{text}</div>
        <div><button className="cat-button">Взять домой</button></div>

        {/* { isSelected?<img className="cat-image" src={cat}></img> : <></>} */}

        { isSelected && <img className="cat-image" src={cat}></img>}
        { !isSelected && <div>🙀</div>}

    </div>
    );
}
}

export default Cat;

// function Cat(props) {
//   return (
//     <div className="cat-card">
//         <img className="cat-pic" src={props.img} alt="cat"></img>
//         <div className="cat-name">{props.name}</div>
//         <div className="cat-text">Центральное понятие в React – компонент. Вся остальная функциональность построена вокруг него</div>
//         <div className="cat-text">{props.text}</div>
//         <button className="cat-button">Взять домой</button>
//     </div>
//   );
// }

// export default Cat;