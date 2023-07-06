const Categories = ({ catagory, handleFilter }) => {
  return (
    <div className="btn-container">
      {catagory.map((cat) => {
        return (
          <button
            key={cat}
            onClick={() => handleFilter(cat)}
            className="btn-hipster btn"
          >
            {cat}
          </button>
        )
      })}
    </div>
  )
}
export default Categories
