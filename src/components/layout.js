import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="font-redressed text-5xl font-normal">
        <Link className="text-gray-600" to="/">
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <Link
        className="font-redressed text-5xl font-normal text-gray-600"
        to="/"
      >
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="mb-6">{header}</header>
      <main>{children}</main>
      <footer></footer>
    </div>
  )
}

export default Layout
