import MenuItem from "./MenuItem"

const Menu = ({ foods }) => {
  return (
    <div className="section-center">
      {foods.map((food) => (
        <MenuItem key={food.id} food={food} />
      ))}
    </div>
  )
}
export default Menu
