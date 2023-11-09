function Registration() {

  return (
    <form>
      <h3>Register</h3>

      <table>
        <tr>
          <td><label>Email address: </label></td>
          <td><input
            type="email"
            className="form-control"
            placeholder="Enter email"
          /></td>
        </tr>
        <tr>
          <td><label>Repeat Email address: </label></td>
          <td><input
            type="email"
            className="form-control"
            placeholder="Repeat email"
          /></td>
        </tr>
        <tr>
          <td><label>Password: </label></td>
          <td><input
            type="password"
            className="form-control"
            placeholder="Enter password"
          /></td>
        </tr>
        <tr>
          <td><label>Repeat Password: </label></td>
          <td><input
            type="password"
            className="form-control"
            placeholder="Repeat password"
          /></td>
        </tr>
      </table>

      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>
      <div className="d-grid">
        <br />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  )
}

export default Registration
