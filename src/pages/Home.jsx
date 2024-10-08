import React from 'react';
import axios from 'axios';
import { SearchContext } from '../App';
import { useSelector, useDispatch } from 'react-redux'

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import { setCategoryId } from '../redux/slices/filterSlice';
import User from '../components/User';


const Home = () => {    // =================>>>

  const dispatch = useDispatch();
  const categoryId = useSelector(state => state.filter.categoryId);
  const sortType = useSelector(state => state.filter.sort.sortProperty);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id))
  }

  const { searchValue } = React.useContext(SearchContext)
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  // const [categoryId, setCategoryId] = React.useState(0);

  const URL = `https://66a9d064613eced4eba64a7f.mockapi.io/items?`;

  React.useEffect(() => {
    setIsLoading(true);

    axios
      .get(`${URL}${categoryId > 0 ? `category=${categoryId}` : ""}&sortBy=${sortType.sortProperty}&order=desc`).then((response) => {
        setPizzas(response.data);
        setIsLoading(false);
      })

    window.scrollTo(0, 0);
  }, [categoryId, sortType])

  return (

    <>
      <User />
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>

      <h2 className="content__title">Pizza menu:</h2 >

      <div className="content__items">
        {isLoading
          ? [...new Array(10)].map((_, index) => <Skeleton key={index} />) : pizzas
            .filter((itemName) => itemName.title.toLowerCase().includes(searchValue.toLowerCase()) ? true : false)
            .map((item) => <PizzaBlock key={item.id} {...item} />)}
      </div>
    </>

  )
}

export default Home