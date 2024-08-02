import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';


const Home = () => {

  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);


  React.useEffect(() => {
    fetch('https://66a9d064613eced4eba64a7f.mockapi.io/items')
      .then(response => response.json())
      .then((json) => {
        setPizzas(json);
        setIsLoading(false);
      })
  }, [])
  return (

    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Pizza menu:</h2 >
      <div className="content__items">
        {isLoading ? [...new Array(10)].map((_, index) => <Skeleton key={index} />) : pizzas.map((item) => <PizzaBlock key={item.id} {...item} />)}

        {/* {pizzas.map((item, index) => (isLoading ? <Skeleton key={index} /> : <PizzaBlock key={item.id} {...item}
              // title={item.title}
              // image={item.imageUrl}
              // price={item.price}
              // sizes={item.sizes}
              // types={item.types} 

              // if we don't change key names or manipulate them,
              //and using same keys names in othe components, 
              //we can use spread operator !!! make code shorter; lines 26 - 30

              />
              ))} */}
      </div>
    </>

  )
}

export default Home