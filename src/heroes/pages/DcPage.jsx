import React from 'react'
import { HeroList } from '../components/HeroList'

export const DcPage = () => {
  return (
    <div>
      <h1>DC Heroes</h1>
      <hr />
      < HeroList publisher='DC Comics' />
    </div>
  )
}
