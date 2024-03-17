import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useHistory } from "react-router-dom";
import LoadingButton from "../../components/UI/LoadingButton/LoadingButton";

export default function Login(props) {
  const [auth, setAuth] = useAuth("");
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setAuth(true);
      history.push("/");
    }, 500);
  };

  return (
    <form onSubmit={submit}>
      <h2>Logowanie</h2>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Hasło</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <LoadingButton loading={loading} label="Zaloguj" />
    </form>
  );
}
