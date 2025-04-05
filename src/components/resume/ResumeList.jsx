import "./resumeList.css";

function ResumeList({ dataDe, dataEn }) {
  return (
    <>
      <ul className="resume__list resume__de">
        {dataDe.map((item, index) => (
          <ListItem key={index} item={item} index={index} />
        ))}
      </ul>
      <ul className="resume__list resume__en">
        {dataEn.map((item, index) => (
          <ListItem key={index} item={item} index={index} />
        ))}
      </ul>
    </>
  );
}

function ListItem({ item, index }) {
  return (
    <li key={index} className="resume__list-item">
      <p className="resume__item-date">{item.date}</p>
      <h4>{item.title}</h4>
      <div></div>
      <ul>
        {item.descriptions &&
          item.descriptions.map((description, i) => (
            <li key={i} className="resume__item-description">
              {description}
            </li>
          ))}
      </ul>
    </li>
  );
}

export default ResumeList;
