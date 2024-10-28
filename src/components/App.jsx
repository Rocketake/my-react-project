
import "./App.css"

function Alert({ variant, children }) {
  const classNames = ["alert", variant];

  return <p className={classNames.join(" ")}>{children}</p>;
};

export default function app() {
  return <>
    <Alert variant="info">
      Would you like to browse our recommended products?
    </Alert>
    <Alert variant="error">
      There was an error during your last transaction
    </Alert>
    <Alert variant="success">
      Payment received, thank you for your purchase
    </Alert>
    <Alert variant="warning">
      Please update your profile contact information
    </Alert>
  </>

}