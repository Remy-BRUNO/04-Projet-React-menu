import Title from "./Title"
import Categories from "./Categories"
import Menu from "./Menu"
import { useState } from "react"
import menu from "./data"

// tableau de categories
const tempSet = new Set(menu.map((food) => food.category))
const tempCatagory = ["all", ...tempSet]

function App() {
  const [foods, setFoods] = useState(menu)
  const [category, setCategory] = useState(tempCatagory)

  const handleFilter = (cat) => {
    cat === "all"
      ? setFoods(menu)
      : setFoods(menu.filter((food) => food.category === cat))
  }

  return (
    <main>
      <section className="menu section">
        <Title title="Our menu" />

        <Categories catagory={category} handleFilter={handleFilter} />
        <Menu foods={foods} />
      </section>
    </main>
  )
}

export default App
