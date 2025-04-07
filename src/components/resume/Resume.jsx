import "./resume.css";
import "./resumePhoto.css";
import resumeDataEn from "./resumeDataEn.json";
import resumeDataDe from "./resumeDataDe.json";
import ResumeHeader from "./ResumeHeader";
import ResumeList from "./ResumeList";
import ResumeHeadline from "./ResumeHeadline";
import ResumeOther from "./ResumeOther";

function Resume() {
  const changeLanguage = () => {
    const resume = document.querySelector("#resume");
    resume.classList.toggle("language__de");
    resume.classList.toggle("language__en");
  };

  return (
    <section id="resume" className="resume language__en">
      <ResumeHeader changeLanguage={changeLanguage} />
      <img className="resume__photo" src="src/assets/images/Foto.png" alt="" />
      <div className="resume__work">
        <ResumeHeadline titleEn="Work" titleDe="Berufliche Tätigkeit" />
        <ResumeList dataDe={resumeDataDe.work} dataEn={resumeDataEn.work} />
      </div>
      <div>
        <ResumeHeadline titleEn="Career Training" titleDe="Ausbildung" />
        <ResumeList
          dataDe={resumeDataDe.training}
          dataEn={resumeDataEn.training}
        />
      </div>
      <div>
        <ResumeHeadline titleEn="School" titleDe="Schulbildung" />
        <ResumeList dataEn={resumeDataEn.school} dataDe={resumeDataDe.school} />
      </div>
      <div>
        <ResumeHeadline titleEn="Other" titleDe="Sonstiges" />
        <ResumeOther dataEn={resumeDataEn} dataDe={resumeDataDe} />
      </div>
    </section>
  );
}

export default Resume;
