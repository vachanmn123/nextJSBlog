import { Card, Button } from "react-bootstrap";
import Link from "next/link";
import { formatDate } from "../../lib/global/dateUtils";

export default function PostSnippetCard({ post }) {
  return (
    <Card style={{ backgroundColor: "#121212", margin: "2vh" }}>
      <Card.Img
        variant="top"
        src={`https://vachanmn.is-a.dev/BlogPosts/${post.data.displayImage}`}
      />
      <Card.Body>
        <Card.Title>{post.data.title}</Card.Title>
        <Card.Text>{post.data.snippet}</Card.Text>
        <Link href={`/posts/${post.key}`}>
          <Button variant="success" block>
            Read More
          </Button>
        </Link>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{formatDate(post.data.date)}</small>
      </Card.Footer>
    </Card>
  );
}
