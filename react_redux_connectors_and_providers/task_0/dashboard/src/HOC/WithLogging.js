import React, { Component } from 'react';

function WithLogging(WrappedComponent) {
  return class extends Component {
    componentDidMount() {
      const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
      console.log(`Component ${componentName} is mounted`);
    }

    componentWillUnmount() {
      const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
      console.log(`Component ${componentName} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default WithLogging;
