import App from './App';

type AppErrorBoundaryState = { error: Error | null };

class AppErrorBoundary extends React.Component<React.PropsWithChildren, AppErrorBoundaryState> {
  state: AppErrorBoundaryState = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <main className="app-fallback">
          <h1>Perler Beads Generator</h1>
          <p>出错了，请重新加载页面。</p>
          <p className="app-fallback-en">Something went wrong. Please reload the page.</p>
          <pre>{this.state.error.message}</pre>
          <button onClick={() => window.location.reload()}>重新加载 / Reload</button>
        </main>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppErrorBoundary>
      <App />
    </AppErrorBoundary>
  </React.StrictMode>,
);
