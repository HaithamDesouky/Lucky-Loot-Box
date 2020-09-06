import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Order = props => {
  console.log('lolol', props);
  return (
    <Link to={`/order/${props._id}`} className="individual-order">
      <div>
        <strong>
          {' '}
          <span>Total Credits</span>:{props.total}
        </strong>
        <strong>
          <span>Order</span>:{' '}
          <ul>
            {props.basket.length &&
              props.basket.map(item => {
                return <li>{item.quantity + 'x ' + item.lootBox.name}</li>;
              })}
          </ul>
        </strong>
        {
          /* <p>{description}</p>*/
          <small>
            {' '}
            <span>Date:</span> {new Date(props.creationDate).toGMTString()}
          </small>
        }

        <span>
          <Link
            to={`/order/${props._id}`}
            className="home-links"
            id="view-order"
          >
            View more details
          </Link>
        </span>
      </div>
    </Link>
  );
};

export default Order;
