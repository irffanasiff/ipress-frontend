import './ErrorPage.css';
export const ErrorPage = () => {
  return (
    <div className="error-container">
      <div className="error-box">
        <h1 className="error-main">Error 404</h1>
        <h2 className="error-sub">Something went wrong !</h2>
        <p className="error-text">
          We are very sorry for the inconvnience. Try to refresh the page or go
          to home and try again.
        </p>
        <div className="error-btn">
          <a href="/">Home</a>
        </div>
      </div>
    </div>
  );
};
