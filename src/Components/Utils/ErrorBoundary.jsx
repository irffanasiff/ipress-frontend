import { Container, Heading } from '@chakra-ui/react';
import { Component } from 'react';
import { ErrorPage } from './ErrorPage';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    console.log('error');
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <ErrorPage />;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
