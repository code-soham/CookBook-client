//Protected Route Switch
import { Navigate } from "react-router-dom";
function Protected(props) {
  if (props.redirect) {
    return <Navigate to={props.path} replace />;
  } else {
    return props.children;
  }
}
export default Protected;
