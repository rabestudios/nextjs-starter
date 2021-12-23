import { Component } from 'react';

// This component catches JS errors

class ErrorBoundary extends Component<any, { hasError: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      // @todo replace with nicer error screen
      return <div>Something went wrong</div>;
    }
    return children;
  }
}

export default ErrorBoundary;
