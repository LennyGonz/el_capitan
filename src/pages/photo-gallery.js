import React from 'react';

const photogallery = () => {
  return (
    <div>
      <h1> Photo Gallery </h1>
      <div className="row">
        <article className="col-1-2">
          <h3>Photo 1</h3>
          <img src="../img/andre-benz-lIa03ti94ec-unsplash.jpg" />
        </article>
        <article className="col-1-2">
          <h3>Photo 2</h3>
          <img src="../img/flint-blake-4T91C9wDAyI-unsplash.jpg" />
        </article>
        <article className="col-1-2">
          <h3>Photo 3</h3>
          <img src="../img/lachlan-gowen-Wzm6nQFPY94-unsplash.jpg" />
        </article>
        <article className="col-1-2">
          <h3>Photo 4</h3>
          <img src="../img/luke-white-jXGxY3Y7mpE-unsplash.jpg" />
        </article>
      </div>
    </div>
  )
}

export default photogallery;
