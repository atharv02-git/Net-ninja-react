export default function Title({ title, subtitle }) {
  return (
    <div>
      <h1 className="title">{title}</h1>
      <br />
      <h1 className="title">{subtitle}</h1>
    </div>
  );
}
