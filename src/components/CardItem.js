// ini adalah komponen CardItem yang menampilkan list (isi dari cards)
// komponen ini nanti akan dipanggil di komponen Cards secara berulang (dgn data yang berbeda)
// komponen ini berisi parameter props, sehingga komponen ini dapat diisi data yang dinamis
// props-nya (datanya) akan diisi di dalam komponen Cards
// props adalah kata lain dari property
// karena CardItem nanti dianggil di komponen Cards, maka komponen ini bisa tidak perlu import Cards.css,
// karena disana sudah diimport.

import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <div>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img src={props.src} alt="Travel Image" className="cards__item__img" />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </div>
  );
}

export default CardItem;
