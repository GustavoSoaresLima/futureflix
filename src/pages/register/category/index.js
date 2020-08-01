import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';


function RegisterCategory(){
  const [categories, setCategories] = useState([]);

  const initialValues = {
    name: '',
    description: '',
    color: '',
  }
  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value, // name: 'value' / description = 'value'
    })
  }

  function handleChange(eventInfo) {
    const { value } = eventInfo.target;
    setValue(eventInfo.target.getAttribute('name'), value);
  }

  return(
    <PageDefault>
        <h1>Category Register: {values.name}</h1>

        <form onSubmit={function handleSubmit(eventInfo){
          eventInfo.preventDefault();
          setCategories([
            ...categories,
            values
          ]);

          setValues(initialValues);
        }}>

          <div>
            <label>
              Category name:
              <input
                type="text"
                value={values.name}
                name="name"
                onChange={handleChange}
              />
            </label>
          </div>
          
          <div>
            <label>
              Description:
              <textarea
                type="text"
                value={values.description}
                name="description"
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              Color:
              <input
                type="color"
                value={values.color}
                name="color"
                onChange={handleChange}
              />
            </label>
          </div>

          <button>
            Register
          </button>
        </form>

        <ul>
          {categories.map((categories, index) => {
            return (
              <li key={`${categories}${index}`}>
                {categories.name}
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