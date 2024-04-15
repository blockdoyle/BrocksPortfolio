import { Button, Card } from "react-bootstrap";
import PropTypes from "prop-types";
export default function ProjectCard({
  projImage,
  projTitle,
  projLink,
  projLive,
  projText,
}) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={projImage || "https://placehold.co/150?text=No+Image+Available"}
        alt={projTitle}
      />
      <Card.Body>
        <Card.Title>{projTitle}</Card.Title>
        <Card.Text>{projText}</Card.Text>
      </Card.Body>
      <div className="d-flex justify-content-between m-2">
        <Button variant="primary" target="_blank" href={projLink}>
          View Project
        </Button>
        {projLive && (
          <Button variant="secondary" target="_blank" href={projLive}>
            Live Demo
          </Button>
        )}
      </div>
    </Card>
  );
}

ProjectCard.propTypes = {
  projImage: PropTypes.string.isRequired,
  projTitle: PropTypes.string.isRequired,
  projLink: PropTypes.string.isRequired,
  projLive: PropTypes.string.isRequired,
  projText: PropTypes.string.isRequired,
};
