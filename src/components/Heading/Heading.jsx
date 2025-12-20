export default function Heading(props) {
  const { heading, text, bg } = props;

  return (
    <>
      <h1 className={`heading text-uppercase fw-bold mb-3 ${text}`}>
        {heading}
      </h1>
      <div className="d-flex align-items-center mb-3">
        <div className={`line mx-3 ${bg}`}></div>
        <i className={`fa-solid fa-star ${text}`}></i>
        <div className={`line mx-3 ${bg}`}></div>
      </div>
    </>
  );
}
