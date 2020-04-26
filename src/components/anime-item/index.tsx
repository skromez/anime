import React from 'react'
import './index.scss'

interface animeItemProps {
  imageURL: string
  desc: string,
  title: string,
}

export const AnimeItem = ({ imageURL, desc, title }: animeItemProps) => {
  return (
    <div className="container">
      <div className="container__left">
        <img src={imageURL} alt="anime"
             className="left__image" />
        <div className="left__background">
          <p className="left__text">
            {title}
          </p>
          <p>
            <span className="blue">
              Lorem ipsum dolor
            </span>
          </p>
        </div>
      </div>
      <div className="container__right">
        <p className="right__header">
          <span className="blue">
            Lorem ipsum dolor sit amet.
          </span>
        </p>
        <div className="right__type">
          <p>TV</p>
          <p>83%</p>
        </div>
        <p className="right__main">
          {desc}
        </p>
        <p className="right__footer">Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  )
}
