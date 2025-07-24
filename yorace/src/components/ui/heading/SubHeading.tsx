import React from "react"

const SubHeading: React.FC<{
  title: string
  className?: string
}> = ({ title, className = "" }) => {
  return (
    <h1
      className={`title ${ className }`}
    >
      { title }
    </h1>
  )
}

export default SubHeading

