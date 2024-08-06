import React from 'react';
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock";

const Home = ( {searchValue} ) => {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [categoryId, setCategoryId] = React.useState(0);
    const [sortType, setSortType] = React.useState(
        {name: "популярности", sortProperty: 'rating'}
    );

    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.sortProperty.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';

    React.useEffect(() => {
        setIsLoading(true);
        fetch(`https://66abf324f009b9d5c730c4e6.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`)
            .then((res) => {
                return res.json();
            }).then((arr) => {
            setItems(arr);
            setIsLoading(false)
        });
        window.scrollTo(0, 0);
    }, [categoryId, sortType])

    const skeletons = [...new Array(6)].map((_, index) => (<Skeleton key={index}/>));
    const pizzas = items
        .filter((obj) => {
            if (obj.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
                return true;
            }

            return false;
        })
        .map((objPizza) => (<PizzaBlock key={objPizza.id} {...objPizza} />));

    return (
        <div className='container'>
            <div className="content__top">
                <Categories value={categoryId} onChangeCategory={(id) => setCategoryId(id)}/>
                <Sort value={sortType} onChangeType={(obj) => setSortType(obj)}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading ? skeletons : pizzas
                }
            </div>
        </div>

    )
}

export default Home;