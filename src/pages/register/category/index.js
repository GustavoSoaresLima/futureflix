import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';


function RegisterCategory(){
  return(
    <PageDefault>
        <h1>Category Register</h1>

        <Link to="/register/video">
          Back to video register
        </Link>
    </PageDefault>
  )
}

export default RegisterCategory;