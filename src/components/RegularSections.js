export function RegularSection(headerText, bodyText, buttonFunc) {
  return (
    <>
      <div className="title-p-button">
        <h1 className="fs-primary-heading fw-bold text-primary-400">
          {headerText}
        </h1>
        <p className="text-primary-400">{bodyText}</p>
        <button onClick={buttonFunc} className="button" id="button">
          Let's Go!
        </button>
      </div>
    </>
  );
}
export function InvertedRegularSection(headerText, bodyText, buttonFunc) {
  return (
    <>
      <div className="title-p-button">
        <h1 className="fs-primary-heading fw-bold text-background-400">
          {headerText}
        </h1>
        <p className="text-background-400">{bodyText}</p>
        <button
          onClick={buttonFunc}
          className="button"
          id="button"
          data-type="inverted"
        >
          Let's Go!
        </button>
      </div>
    </>
  );
}
