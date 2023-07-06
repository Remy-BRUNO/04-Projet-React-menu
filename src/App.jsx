import Title from "./Title"
import Categories from "./Categories"
import Menu from "./Menu"
import { useEffect, useState } from "react"
import menu from "./data"
function App() {
  const [foods, setFoods] = useState(menu)
  const [category, setCategory] = useState([])

  // categories

  useEffect(() => {
    const tempSet = new Set(foods.map((food) => food.category))
    const tempCatagory = ["all", ...tempSet]
    setCategory(tempCatagory)
  }, [])
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
