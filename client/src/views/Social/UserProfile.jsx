import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import { loadUser } from '../../services/user';
import { loadOrders } from '../../services/order';
import Order from '../../components/Orders';
// import NavBar from "../../components/Navbar";
import './UserProfile.scss';
import photo from './default.png';
import { Link } from 'react-router-dom';

export class UserProfile extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      profile: null,
      loaded: false,
      orders: []
    };
  }
  componentDidMount() {
    loadUser(this.props.match.params.id)
      .then(profile => this.saveProfileToState(profile))
      .catch(error => console.log(error));

    loadOrders().then(data => {
      this.setState({
        orders: data.orders
      });
    });
  }

  saveProfileToState = profile => {
    this.setState({
      profile,
      loaded: true
    });
  };

  render = () => {
    return (
      <div class="profile">
        {this.state.loaded && (
          <div>
            {(this.state.profile.user.photo && (
              <div>
                <img src={this.state.profile.user.photo} alt="UserPhoto" />
              </div>
            )) || (
              <div>
                <img src={photo} alt="UserPhoto" />
              </div>
            )}
            <h1>{this.state.profile.user.name}</h1>

            <h1>
              {' '}
              <span>Credits:</span> {this.state.profile.user.credits}
            </h1>

            <h1>Your orders</h1>
            <br />

            {(this.state.orders.length &&
              this.state.orders.map(order => {
                return <Order {...order} key={order._id} />;
              })) || (
              <div>
                {' '}
                <p>'You have made no orders yet'</p>{' '}
                <Link to="/buycredits"></Link>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };
}

export default UserProfile;
