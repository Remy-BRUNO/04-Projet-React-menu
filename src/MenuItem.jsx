const MenuItem = ({ food }) => {
  const { desc, id, img, price, title } = food
  return (
    <article className="menu-item" id={id}>
      <img src={img} alt={title} className="img" />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          <h5 className="item-price">{price}</h5>
        </header>
        <p className="item-text">{desc}</p>
      </div>
    </article>
  )
}
export default MenuItem
