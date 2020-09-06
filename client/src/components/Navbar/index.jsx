import React from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';
import { slide as Navbar } from 'react-burger-menu';
class NavBar extends React.Component {
  constructor(props) {
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
        <Link onClick={() => this.closeMenu()} to="/" class="home">
          Lucky LootBox
        </Link>

        <Link onClick={() => this.closeMenu()} to="/" class="home">
          Home
        </Link>
        <Link onClick={() => this.closeMenu()} to="/shop">
          Shop
        </Link>
        <Link onClick={() => this.closeMenu()} to="/social/newsfeed">
          Social Area
        </Link>

        {(this.props.user && (
          <>
            <Link
              class="bm-item white-link"
              onClick={() => this.closeMenu()}
              to="/post/create"
            >
              Create a post
            </Link>
            <Link
              class="bm-item white-link"
              onClick={() => this.closeMenu()}
              to="/credits"
            >
              Credits: {this.props.user.credits}
            </Link>
            <Link
              class="bm-item white-link"
              onClick={() => this.closeMenu()}
              to="/checkout"
            >
              Checkout
            </Link>

            {this.props.user.admin && (
              <Link onClick={() => this.closeMenu()} to="/admin">
                Admin
              </Link>
            )}
            <>
              <Link
                class="bm-item white-link"
                onClick={() => this.closeMenu()}
                to={`/user/${this.props.user._id}`}
              >
                {this.props.user.name}
              </Link>
              <button id="signout" onClick={this.props.onSignOut}>
                <span>Sign Out</span>
              </button>
            </>
          </>
        )) || (
          <>
            <Link
              onClick={() => this.closeMenu()}
              id="authentication-link"
              to="/authentication/sign-up"
            >
              Sign Up
            </Link>
            <Link
              onClick={() => this.closeMenu()}
              id="authentication-link"
              to="/authentication/sign-in"
            >
              Sign In
            </Link>
          </>
        )}
      </Navbar>
    );
  }
}
export default NavBar;
