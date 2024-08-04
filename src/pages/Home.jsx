import React from 'react';
import { SearchContext } from '../App';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

const URL = `https://66a9d064613eced4eba64a7f.mockapi.io/items?`;

const Home = () => {
  const { searchValue } = React.useContext(SearchContext)

  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: 'Popular',
    sortProperty: 'rating'
  });

  React.useEffect(() => {
    setIsLoading(true)

    fetch(`${URL}${categoryId > 0 ? `category=${categoryId}` : ""}&sortBy=${sortType.sortProperty}&order=desc`)
      .then(response => response.json())
      .then((json) => {
        setPizzas(json);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType])

  return (

    <>
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={(i) => setCategoryId(i)} />
        <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
      </div>

      <h2 className="content__title">Pizza menu:</h2 >

      <div className="content__items">
        {isLoading ? [...new Array(10)].map((_, index) => <Skeleton key={index} />) : pizzas
          .filter((itemName) => itemName.title.toLowerCase().includes(searchValue.toLowerCase()) ? true : false)
          .map((item) => <PizzaBlock key={item.id} {...item} />)}
        {/* {pizzas.map((item, index) => (isLoading ? <Skeleton key={index} /> : <PizzaBlock key={item.id} {...item}
              // title={item.title}
              // image={item.imageUrl}
              // price={item.price}
              // sizes={item.sizes}
              // types={item.types} 

              // if we don't change key names or manipulate them,
              //and using same keys names in other components, 
              //we can use spread operator !!! make code shorter; lines 26 - 30

              />
              ))} */}
      </div>
    </>

  )
}

export default Home