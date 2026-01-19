export default function SectionTitle({ preTitle, title, center = false }) {
  return (
    <div style={{ textAlign: center ? "center" : "left" }}>
      <h3 className="pre-title">{preTitle}</h3>
      <h1 className="section-title">{title}</h1>
    </div>
  );
}
