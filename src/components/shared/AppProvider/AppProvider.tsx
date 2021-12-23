import React from 'react';
import ErrorBoundary from '../ErrorBoundary';

// Add other providers like Redux, global providers, etc

const AppProvider: React.FC = ({ children }) => (
  <ErrorBoundary>{children}</ErrorBoundary>
);

export default AppProvider;
