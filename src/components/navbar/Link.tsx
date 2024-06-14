export default function Link({
  name,
  destination,
}: {
  name: string;
  destination: string;
}) {
  return (
    <li className="hover:opacity-75">
      <a href={destination}>{name}</a>
    </li>
  );
}
