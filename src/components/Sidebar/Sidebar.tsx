import React from "react";

import styles from "./_sidebar.scss";

import image from '@images/sidebar-bg.jpg';

interface IState {
  isExpanded: boolean;
}

export default class Sidebar extends React.Component<{}, IState> {
  public readonly state: IState = {
    isExpanded: false
  };

  onEnter = event => {
    this.setState(prevState => ({
      isExpanded: !prevState.isExpanded
    }));
  };

  onLeave = event => {
    this.setState(prevState => ({
      isExpanded: !prevState.isExpanded
    }));
  };

  render() {
    const { isExpanded } = this.state;
    const { mainNavigation, expanded, closed, sidebarBg } = styles;
    return (
      <nav
        onMouseEnter={this.onEnter}
        onMouseLeave={this.onLeave}
        className={`${mainNavigation} ${isExpanded ? expanded : closed}`}
      >
        <img src={image} className={sidebarBg}/>
      </nav>
    );
  }
}
