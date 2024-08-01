import React from 'react'

const categoriesBtn = ['All', 'With Meat', 'Vegeterian', 'Grill', 'Spicy', 'Закрытые'];


const Categories = () => {

  const [activeCat, setActiveCat] = React.useState(0);

  return (
    <div className="categories">
      <ul>
        {categoriesBtn.map((item, idx) => (
          <li onClick={() => { setActiveCat(idx) }} className={activeCat === idx ? 'active' : ''}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Categories