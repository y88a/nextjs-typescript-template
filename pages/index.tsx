import { NextPage } from 'next'
import React, { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const IndexPage: NextPage<Props> = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  )
}

export default IndexPage
