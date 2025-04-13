import React from 'react'
import PageLayout from '../PageLayout'
import Hero from '../Hero'
import Categories from '../Categories'
import Promotion from '../Promotion'
import Store from '../Store'
import Sale from '../Sale'
import Special from '../Special'
import Blogs from '../Blogs'
import Features from '../Features'

const Home = () => {
  return (
    <PageLayout>
      <Hero/>
      <Categories/>
      <Promotion/>
      <Store/>
      <Sale/>
      <Special/>
      <Blogs/>
      <Features/>
    </PageLayout>
  )
}

export default Home
