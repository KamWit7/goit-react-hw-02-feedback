import React from "react"

const Section = (props) => {
  const { title } = props
  return (
    <section>
      <h1>{title}</h1>
      {props.children}
    </section>
  )
}

export default Section
