import React, {Component}  from 'react';
import './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{

    state = {
        showSideDrawer: true
    }

    sideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false
        });
    }

    SideDrawerToggleHandler =() => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.state.showSideDrawer }
        });
    }

    render() {
        return (
            <React.Fragment>
                <Toolbar drawerToggleClicked={this.SideDrawerToggleHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <main className="Content">
                    {this.props.children}
                </main>
            </React.Fragment>
        )
    }
};

export default Layout;