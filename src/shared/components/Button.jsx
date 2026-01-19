export default function Button({
  children,
  variant = "primary",
  type = "button",
  onClick,
  href,
}) {
  const className = `btn btn-${variant}`;

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}
