import { NextPage } from "next"

type Props = {}

const IndexPage: NextPage<Props> = ({ children, ...props }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  )
}

export default IndexPage;