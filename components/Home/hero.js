import Link from "next/link";

export default function Hero() {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold">The Vachan MN Blog</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Welcome to The Vachan MN Blog! This is my first project with
          next.js...
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <Link href="/posts">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
              All posts!
            </button>
          </Link>
          <Link href="/about">
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              About the blog
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
