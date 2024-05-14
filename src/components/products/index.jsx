import React, { useEffect, useState } from 'react'
import './products.scss'
import axios from '../../api'


const Products = () => {

  const [products, setProducts] = useState(null)
  const [offset, setOffset] = useState(1)
  let count = 8

  useEffect(() => {
    axios.get("/products", {
      params: {
          limit: offset * count
      }})
        .then(res => setProducts(res.data))
        .catch(err => console.log(err))
  }, [offset])

  let productCard = products?.map((el) => (

    <div className="products__cards__card" key={el.id}>
                <div className="products__cards__card__img">
                    <img className="card__img" src={el.image} alt="" />
                </div>
                <div className="products__cards__card__desc">
                    <h1 title={el.title} className="products__line__clamp">{el.title}</h1>
                    <div className="products__cards__card__dDesc">
                        <p className="products__cards__card__price">${el.price}</p>
                        <p>({el.rating.count})</p>
                    </div>
                </div>
      </div>
  ))

  return (
    <section className="products container">
            <div className="products__top">
                <div className="products__top__box"></div>
                <h3>Categories</h3>
            </div>
            <h2>Browse By Category</h2>
            <div className="products__wrapper">
                <div className="products__cards">
                  {productCard}
                </div>
            </div>
            <div className="products__btns">
                <button className='products__btns__seeMore'  onClick={()=> setOffset(p => p + 1)}>View More Products</button>
            </div>
    </section>
  )
}

export default Products