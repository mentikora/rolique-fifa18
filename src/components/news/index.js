import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const news = [
  {
    title: 'title 1',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt sapiente, ullam a vitae praesentium commodi cum mollitia vero consectetur in expedita ipsam beatae, magni repellat debitis, rerum aperiam ad corporis.',
    status: '1',
    date: 'Wed Jun 20 2018 17:20:13 GMT+0300 (EEST)'
  },
  {
    title: 'title 2',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt sapiente, ullam a vitae praesentium commodi cum mollitia vero consectetur in expedita ipsam beatae, magni repellat debitis, rerum aperiam ad corporis.',
    status: '1',
    date: 'Wed Jun 20 2018 17:20:13 GMT+0300 (EEST)'
  },
  {
    title: 'title 3',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt sapiente, ullam a vitae praesentium commodi cum mollitia vero consectetur in expedita ipsam beatae, magni repellat debitis, rerum aperiam ad corporis.',
    status: '2',
    date: 'Wed Jun 20 2018 17:20:13 GMT+0300 (EEST)'
  },
  {
    title: 'title 4',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt sapiente, ullam a vitae praesentium commodi cum mollitia vero consectetur in expedita ipsam beatae, magni repellat debitis, rerum aperiam ad corporis.',
    status: '3',
    date: 'Wed Jun 20 2018 17:20:13 GMT+0300 (EEST)'
  },
]

export default () => (
  <div className="news">
    {
      news.map( item => (
        <div 
          className="news__item"
        >
          <p>
            { item.date }
          </p>
          <h2>
            { item.title }
          </h2>
          <p>
            { item.text }
          </p>
        </div>
      ))
    }
  </div>
)