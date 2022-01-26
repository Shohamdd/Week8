import './App.css';
import ErrorBoundary from './components/ErrorBoundary'
import BuggyCounter from './components/BuggyCounter'

function App() {
  return (
      <>
     <h5>Simulation 1:</h5>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>

    <h5>Simulation 2:</h5>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

    <h5>Simulation 3:</h5>
       <BuggyCounter />
      </>

  );
}

export default App;
