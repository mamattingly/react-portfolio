const ErrorPage = ({ errorCode, errorMessage }) => {
    return (
      <div className="error-page">
        <div className="error-container">
          <h1 className="error-code">{errorCode}</h1>
          <p className="error-message">{errorMessage}</p>
          <a className="back-link" href="/">Go back to the homepage</a>
        </div>
      </div>
    );
  };
  
  export default ErrorPage;