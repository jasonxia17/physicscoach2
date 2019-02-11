import React, { Fragment, Component } from "react";

import PropTypes from "prop-types";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { withStyles } from "@material-ui/core/styles";
import { logout } from "../../helpers/auth";
import { signOut } from "../../actions";
import { connect } from "react-redux";
import { withRouter } from "react-router";

const styles = {
  buttonRoot: {
    color: "white"
  }
};

class AccountMenu extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillUpdate(nextProps) {
    if (nextProps.auth) {
      this.context.router.history.push("/");
    }
  }
  render() {
    return (
      <IconButton
        aria-haspopup="true"
        onClick={this.props.signOut}
        //classes={{root: classes.buttonRoot}}
      >
        <AccountCircle />
      </IconButton>
    );
  }
}

/* 
export const AccountMenu =({
    avatarUrl,
    displayName,
    goToAccount,
    onLogoutClick,
    closeAccountMenu,
    anchorEl,
    handleMenu
}) => (
    <Fragment>
        <IconButton
        aria-owns={anchorEl ? "menu-appbar": null}
        aria-haspopup = "true"
        onClick = {this.props.signOut}
        //classes={{root: classes.buttonRoot}}
        >
        <AccountCircle/>
        </IconButton>

        <Menu 
        id = "menu-appbar"
        anchorEl = {anchorEl}
        anchorOrigin = {{vertical: "top", horizontal: "right"}}
        transformOrigin = {{vertical: "top", horizontal: "right"}}
        open = {Boolean(anchorEl)}
        onClose={closeAccountMenu}>
        <MenuItem onClick ={logout}>Sign Out</MenuItem>
</Menu>
    </Fragment>
) */

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(
  mapStateToProps,
  { signOut }
)(AccountMenu);
