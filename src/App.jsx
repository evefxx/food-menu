import { useState } from 'react'
import './App.css'
import data from "./data"
import Categories from './compponents/Categories'
import Menu from "./compponents/Menu"

function App() {
  const [menuItem, setMenuItem] = useState(data);
  const allCategories = [
    "All",
    ...new Set(
      data.map((item) => {
        return item.category;
      })
    ),
  ];
const filterItems = (category) =>{
  if(category === 'All'){
    setMenuItem(data);
  } else {
    const newItems = data.filter((item) => item.category === category)
    setMenuItem(newItems);
  }
};
  return (
    <div>
      <h2>Workshop 2: Food Menu</h2>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>Our Menu</h2>
            <div className="underline"></div>
          </div>
          <Categories allCategories={allCategories} filterItems={filterItems}/>
          <Menu items={menuItem} />
        </section>
      </main>
    </div>
  );
}

export default App
