export default function LoadingButton(props) {
const className =props.className || "btn-primary"

  return props.loading ? (
    <button className={`btn ${className}`} type="button" disabled>
      <span className="spinner-border spinner-border-sm" role="status">
        <span className="sr-only"> Sprawdzanie danych logowania ....</span>
      </span>
    </button>
  ) : (
          <button {...props} className={`btn ${className}`}>{props.label}</button>
  );
}
