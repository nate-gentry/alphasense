const NotFound = () => {
  return (
    <div>
      <div className="alert alert-dismissible alert-danger">
        <button type="button" className="close" data-dismiss="alert">
          &times;
        </button>
        <strong>Oh snap!</strong>
        <a href="/" className="alert-link">
          Change a few things up
        </a>
        and try submitting again.
      </div>
    </div>
  );
};

export default NotFound;
