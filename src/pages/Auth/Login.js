export default function Login(props) {
  return (
    <form>
      <h2>Logowanie</h2>
      <div className="form-group">
        <label>Email</label>
        <input type="email" className="form-control" />
      </div>
      <div className="form-group">
        <label>Hasło</label>
        <input type="password" className="form-control" />
      </div>
      <button className="btn btn-primary">Zapisz</button>
    </form>
  );
}
