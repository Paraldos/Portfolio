function ResumeOther({ dataEn, dataDe }) {
  return (
    <>
      <ul className="rumse__other resume__en">
        {dataEn.other.map((item, index) => (
          <li key={index} className="resume__other-item">
            {item}
          </li>
        ))}
      </ul>
      <ul className="rumse__other resume__de">
        {dataDe.other.map((item, index) => (
          <li key={index} className="resume__other-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ResumeOther;
