import { Button, Card } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "../../lib/global/dateUtils";

export default function PostCard({ post }) {
  return (
    <Card style={{ margin: "3vh", backgroundColor: "#121212", color: "white" }}>
      <Card.Img
        src={`https://vachanmn.is-a.dev/BlogPosts/${post.displayImage}`}
        alt={post.id}
      />
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.snippet}</Card.Text>
        <Link href={`/posts/${post.id}`}>
          <Button variant="success">Read More</Button>
        </Link>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{formatDate(post.date)}</small>
      </Card.Footer>
    </Card>
  );
}
