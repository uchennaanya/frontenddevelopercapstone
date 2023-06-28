import React from "react"
const Cards = ({name, testimony,img, title, desc}) => {
  return (
    <section>
      <div className="card">
        <img src={img} alt='menu' />
        <h5>{title}</h5>
        <p>{desc}</p>
        <p>{testimony}</p>
        <small>{name}</small>
      </div>
    </section>
  )
}

export default Cards
