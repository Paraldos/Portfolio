function ResumeHeadline({ titleEn, titleDe }) {
  return (
    <>
      <h3 className="resume__headline resume__de">{titleDe}</h3>
      <h3 className="resume__headline resume__en">{titleEn}</h3>
    </>
  );
}

export default ResumeHeadline;
