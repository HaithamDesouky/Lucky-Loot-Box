import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.scss';
import { slide as Navbar } from 'react-burger-menu';
class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      menuOpen: false
    };
  }
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }
  closeMenu() {
    this.setState({ menuOpen: false });
  }

  // export default props => {
  render() {
    return (
      <Navbar
        onClick={() => this.closeMenu()}
        isOpen={this.state.menuOpen}
        onStateChange={state => this.handleStateChange(state)}
        {...this.props}
      >
        <NavLink
          activeClassName="selected"
          onClick={() => this.closeMenu()}
          to="/"
          class="home"
        >
          Lucky LootBox
        </NavLink>

        <NavLink
          activeClassName="selected"
          onClick={() => this.closeMenu()}
          to="/"
          class="home"
        >
          Home
        </NavLink>
        <NavLink
          activeClassName="selected"
          onClick={() => this.closeMenu()}
          to="/shop"
        >
          Shop
        </NavLink>
        <NavLink
          activeClassName="selected"
          onClick={() => this.closeMenu()}
          to="/social/newsfeed"
        >
          Social Area
        </NavLink>

        {(this.props.user && (
          <>
            <NavLink
              activeClassName="selected"
              class="bm-item white-NavLink"
              onClick={() => this.closeMenu()}
              to="/post/create"
            >
              Create a post
            </NavLink>
            <NavLink
              activeClassName="selected"
              class="bm-item white-NavLink"
              onClick={() => this.closeMenu()}
              to="/credits"
            >
              Credits: {this.props.user.credits}
            </NavLink>
            <NavLink
              activeClassName="selected"
              class="bm-item white-NavLink"
              onClick={() => this.closeMenu()}
              to="/checkout"
            >
              Checkout
            </NavLink>

            {this.props.user.admin && (
              <NavLink
                activeClassName="selected"
                onClick={() => this.closeMenu()}
                to="/admin"
              >
                Admin
              </NavLink>
            )}
            <>
              <NavLink
                activeClassName="selected"
                class="bm-item white-NavLink"
                onClick={() => this.closeMenu()}
                to={`/user/${this.props.user._id}`}
              >
                {this.props.user.name}
              </NavLink>
              <button id="signout" onClick={this.props.onSignOut}>
                <span>Sign Out</span>
              </button>
            </>
          </>
        )) || (
          <>
            <NavLink
              onClick={() => this.closeMenu()}
              id="authentication-NavLink"
              to="/authentication/sign-up"
            >
              Sign Up
            </NavLink>
            <NavLink
              onClick={() => this.closeMenu()}
              id="authentication-NavLink"
              to="/authentication/sign-in"
            >
              Sign In
            </NavLink>
          </>
        )}
      </Navbar>
    );
  }
}
export default NavBar;
