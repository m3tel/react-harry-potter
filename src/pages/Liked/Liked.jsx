import React from 'react'
import { Link } from 'react-router-dom';
import s from "./Liked.module.css"

export function Liked  () {
  return (
    <div className={s.liked}>
      <Link to="/liked">
        <button>← Back To All</button>
      </Link>
      <h1>Liked ones</h1>
      <p>Your favorite characters from the Harry Potter universe.</p>
    </div>
  );
}
