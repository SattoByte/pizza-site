import React from 'react'

const categoriesBtn = ['All', 'With Meat', 'Vegeterian', 'Grill', 'Spicy'];


const Categories = ({ value, onChangeCategory }) => {

  return (
    <div className="categories">
      <ul>
        {categoriesBtn.map((item, i) => (
          <li
            key={i}
            onClick={() => { onChangeCategory(i) }}
            className={value === i ? 'active' : ''}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Categories