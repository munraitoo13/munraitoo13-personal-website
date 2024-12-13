import "@/styles/main.css";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>Oops! Page Not Found</h1>

      <p>
        It seems the page you're looking for doesn't exist. Check the URL for
        errors or return to the homepage.
      </p>

      <p>If you believe this is a mistake, contact me for assistance.</p>

      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/contact">Contact Me</Link>
        </li>
      </ul>
    </div>
  );
}
