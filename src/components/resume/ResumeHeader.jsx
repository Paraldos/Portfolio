import "./resumeHeader.css";

function ResumeHeader({ changeLanguage }) {
  return (
    <div className="resume__header">
      <h2 className="resume__en">Curriculum Vitae</h2>
      <h2 className="resume__de">Lebenslauf</h2>
      <button className="resume__language-btn" onClick={changeLanguage}>
        <span className="resume__en">EN</span>
        <span className="resume__de">DE</span>
      </button>
    </div>
  );
}

export default ResumeHeader;
