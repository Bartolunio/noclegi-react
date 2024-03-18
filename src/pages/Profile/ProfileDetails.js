import { useEffect, useState } from "react";
import LoadingButton from "../../components/UI/LoadingButton/LoadingButton";
import validateEmail from "../../components/helpers/validations";

export default function ProfileDetails(props) {
  const [email, setEmail] = useState("bartek@o2.pl");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const buttonDisabled = Object.values(errors).filter((x) => x).length;

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    if (validateEmail(email)) {
      setErrors({ ...errors, email: "" });
    } else {
      setErrors({ ...errors, email: "Niepoprawny Email" });
    }
  }, [email]);

  useEffect(() => {
    if (password.length >= 4 || !password) {
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "Wymagane co najmniej 4 znaki" });
    }
  }, [password]);

  return (
    <form onSubmit={submit}>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className={`form-control ${errors.email ? "is-invalid" : "is-valid"}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="invalid-feedback">{errors.email}</div>
        <div className="valid-feedback">Poprawny Email</div>
      </div>
      <div className="form-group">
        <label>Hasło</label>
        <input
          type="password"
          className={`form-control ${errors.password ? "is-invalid" : ""}`}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="invalid-feedback">{errors.password}</div>
      </div>
      <LoadingButton
        loading={loading}
        disabled={buttonDisabled}
        label="Zapisz"
      />
    </form>
  );
}
