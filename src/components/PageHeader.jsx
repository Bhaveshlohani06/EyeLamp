function PageHeader({ eyebrow, title, image, imageAlt }) {
  return (
    <header className="page-header position-relative overflow-hidden">
      <div
        className="page-header-bg"
        style={{ backgroundImage: `url(${image})` }}
        role="img"
        aria-label={imageAlt}
      />
      <div className="page-header-overlay" />
      <div className="container position-relative text-center">
        <span
          className="eyelamp-eyebrow mb-3 d-inline-flex justify-content-center"
          style={{ color: "var(--brass)" }}
        >
          {eyebrow}
        </span>
        <h1 style={{ color: "var(--paper)", fontSize: "clamp(2.2rem, 4.5vw, 3.2rem)" }}>
          {title}
        </h1>
      </div>
    </header>
  );
}

export default PageHeader;
