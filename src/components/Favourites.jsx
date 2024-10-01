import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { removeFavorite } from "../redux/actions/actions";

const Favourites = () => {
  const { favorites } = useSelector((state) => {
    console.log("Current favorite companies:", state.favorites);
    return state.favorites;
  });
  const dispatch = useDispatch();
  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1>Favourite Companies</h1>
          {favorites.length > 0 ? (
            favorites.map((company, index) => (
              <Row key={index} className="mx-0 mt-3 p-3">
                <Col>
                  <Link to={`/${company.company_name}`}>{company.company_name}</Link>
                </Col>
                <Col>
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(removeFavorite(company))}
                  >
                    Remove
                  </button>
                </Col>
              </Row>
            ))
          ) : (
            <p>No favorite companies added yet.</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
