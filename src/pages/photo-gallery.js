import React from 'react';

const photogallery = () => {
  return (
    <div>
      <h1> Photo Gallery </h1>
      <div className="row">
        <article className="col-1-2">
          <h3>Photo 1</h3>
          <img src="../img/andre-benz-lIa03ti94ec-unsplash.jpg" alt="arb1" />
        </article>
        <article className="col-1-2">
          <h3>Photo 2</h3>
          <img src="../img/flint-blake-4T91C9wDAyI-unsplash.jpg" alt="arb2" />
        </article>
        <article className="col-1-2">
          <h3>Photo 3</h3>
          <img src="../img/lachlan-gowen-Wzm6nQFPY94-unsplash.jpg" alt="arb3" />
        </article>
        <article className="col-1-2">
          <h3>Photo 4</h3>
          <img src="../img/luke-white-jXGxY3Y7mpE-unsplash.jpg" alt="arb4" />
        </article>
        <article>
          <h3>Photo 5</h3>
          <img src="../img/mary-ray-kTYzNElfk-0-unsplash.jpg" alt="arb5"></img>
        </article>
      </div>
    </div>
  )
}

export default photogallery;
