import React from 'react'
import { Link } from 'react-router-dom'
import ScreenHeader from '../../components/ScreenHeader'
import Wrapper from './Wrapper'

const Categories = () => {
  return (
    <Wrapper>
      <ScreenHeader>
        <Link to="/dashboard/create-category" className='btn-dark'>add categories <i className='bi bi-plus'></i></Link>
      </ScreenHeader>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quos ducimus, voluptate suscipit accusantium animi excepturi qui soluta
        dignissimos adipisci esse, dolor praesentium quam sed perferendis magni eos possimus voluptatibus dolore.
      </p>
    </Wrapper>
  )
}

export default Categories