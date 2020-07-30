import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';


function RegisterCategory(){
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState('Food');

  return(
    <PageDefault>
        <h1>Category Register: {categoryName}</h1>

        <form onSubmit={function handleSubmit(eventInfo){
          eventInfo.preventDefault();
          setCategories([
            ...categories,
            categoryName
          ]);
        }}>
          {/* State */}
          <label>
            Category name:
            <input
              type="text"
              value={categoryName}
              onChange={  function handleFunction(eventInfo) {
                setCategoryName(eventInfo.target.value);
              }}
            />
          </label>

          <button>
            Register
          </button>
        </form>

        <ul>
          {categories.map((categories, index) => {
            return (
              <li key={`${categories}${index}`}>
                {categories}
              </li>
            )
          })}
        </ul>

        <Link to="/register/video">
          Back to video register
        </Link>
    </PageDefault>
  )
}

export default RegisterCategory;