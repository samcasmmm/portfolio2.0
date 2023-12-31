import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate an error has occurred
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error or perform additional actions here
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can customize the error UI here
      return <div>Something went wrong.</div>;
    }

    // Render the child components normally if no error occurred
    return this.props.children;
  }
}

export default ErrorBoundary;
