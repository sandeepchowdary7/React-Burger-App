import React, { Component } from 'react'
import Aux from '../Aux/Aux'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import classes from './Layout.css'

class Layout extends Component {
    state = {
        showSideDrawer: true
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    drawerToggledClosedHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer}
        })
    }

    render() {
        return (
            <Aux>
                <Toolbar drawerToggledClicked={this.drawerToggledClosedHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;