import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function RegisterCategory() {
  const [categories, setCategories] = useState([]);

  const initialValues = {
    name: '',
    description: '',
    color: '',
  };
  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value, // name: 'value' / description = 'value'
    });
  }

  function handleChange(eventInfo) {
    const { value } = eventInfo.target;
    setValue(eventInfo.target.getAttribute('name'), value);
  }

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = window.location.hostname.includes('localhost')
        ? 'http://localhost:8080/categories'
        : 'https://futureflix.herokuapp.com/categories';
      fetch(URL)
        .then(async (serverResponse) => {
          if (serverResponse.ok) {
            const response = await serverResponse.json();
            setCategories(response);
            return;
          }
          throw new Error('Não foi possível pegar os dados');
        });
    }
  }, []);

  return (
    <PageDefault>
      <h1>
        Category Register:
        {values.name}
      </h1>

      <form
        onSubmit={function handleSubmit(eventInfo) {
          eventInfo.preventDefault();

          setCategories([...categories, values]);

          setValues(initialValues);
        }}
      >
        <FormField
          label="Category name"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        {/* <div>
          <label>
            Category name:
            <input
              type="text"
              value={values.name}
              name="name"
              onChange={handleChange}
            />
          </label>
        </div> */}

        <FormField
          label="Description"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />
        {/* <div>
          <label>
            Description:
            <textarea
              type="text"
              value={values.description}
              name="description"
              onChange={handleChange}
            />
          </label>
        </div> */}

        <FormField
          label="Color"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />
        {/* <div>
          <label>
            Color:
            <input
              type="color"
              value={values.color}
              name="color"
              onChange={handleChange}
            />
          </label>
        </div> */}

        <Button>Register</Button>
      </form>

      <ul>
        {categories.map((category) => (
          <li key={`${category.id}`}>
            {category.title}
          </li>
        ))}
      </ul>

      <Link to="/register/video">Back to video register</Link>
    </PageDefault>
  );
}

export default RegisterCategory;
