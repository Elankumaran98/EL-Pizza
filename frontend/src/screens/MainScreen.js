import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'

const MainScreen = () => {
  return (
      <Layout title={"Main Menu ..."}>
          <div className='text-center'>
              <Link to="/">Shop Pizza</Link>
              <Link to="/">Shop Grocery</Link>
          </div>
    </Layout>
  )
}

export default MainScreen