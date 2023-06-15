import Spinner from "react-bootstrap/Spinner";

function GrowExample() {
  return (
   <div className="overlay spinner">
     <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
   </div>
  );
}

export default GrowExample;
