import React from 'react'
import PageLayout from '../PageLayout'
import PageBanner from '../PageBanner'
import CardSection from '../CardSection'

const Blog = () => {
  return (
    <PageLayout>
      <PageBanner title='Blog'/>
      <CardSection count={6}/>
    </PageLayout>
  )
}

export default Blog
