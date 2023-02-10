import './App.css';

import Cat from './components/cat';

const cats = [
  { name: "Носик", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCymWxyHnzJrDkfyNY79oX83oxzRtiM6rOsQ&usqp=CAU", text:"test"},
  { name: "Вася", img: "https://scientificrussia.ru/images/b/teb-full.jpg", isSelected: true},
  { name: "Балу", img: "https://img5.goodfon.ru/wallpaper/nbig/0/c8/kotik-kotenok-fon.jpg"},
];

function App() {
  return (
    <div className="App">
      <div className="App-card">
      {
        cats.map((cat) =>
        <Cat name={cat.name} img={cat.img} text={cat.text} isSelected={cat.isSelected} />)
      }
      </div>
      <button className="App-button">Нажми меня</button>
    </div>
  );
}

export default App;
