import ReactMarkdown from "react-markdown";
import { formatDate } from "../../lib/global/dateUtils";

export default function PostDisplay({ post, title, authors, date }) {
  return (
    <div>
      <h1 className="display-5 fw-bold">{title}</h1>
      <hr />
      <p>
        Written By: {authors.join(", ")}
        <br />
        Date: {formatDate(date)}
      </p>
      <hr />
      <div align="left" style={{ margin: "3vh" }}>
        <ReactMarkdown>{post}</ReactMarkdown>
      </div>
    </div>
  );
}
