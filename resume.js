"use strict";

const RESUME = document.querySelector(".resume");
const RESUME__WORK = document.querySelector("#resume__work__list");
const RESUME__TRAINING = document.querySelector("#resume__training__list");
const RESUME__SCHOOL = document.querySelector("#resume__school__list");
const RESUME__OTHER = document.querySelector("#resume__other__list");
const RESUME__BUTTON = document.querySelector("#resume__button");
let language = "en";

class resumeElement {
  constructor(valueEN, valueDE, date_start = "", date_end = "") {
    this.valueEN = valueEN;
    this.valueDE = valueDE;
    this.date_start = date_start;
    this.date_end = date_end;
  }

  get date() {
    if (this.date_end == "") {
      if (language == "en") return `since ${this.date_start}`;
      else return `seit ${this.date_start}`;
    }
    if (language == "en") return `${this.date_start} to ${this.date_end}`;
    else return `${this.date_start} bis ${this.date_end}`;
  }

  get value() {
    return language == "en" ? this.valueEN : this.valueDE;
  }
}

const resume_work = [
  new resumeElement(
    [
      "IT Project manager, Administrative District Office Rosenheim, Germany",
      "Tec management for 23 district schools (Special Schools, Middle Schools, High Schools, Vocational Schools, Vocational High Schools and Business Schools / about 1,800 Teachers and 18,000 Students)",
      "Supervision of IT Service Contractors, Media Tec Specialists and Electricians",
      "Budgeting, accounting, and general administration for IT requirements",
      "Planning, evaluation and supervision for local, national, and EU competitive tendering procedures (e.g., Data Privacy Audits, Centralized Printer Management, Subsidy Program: 'Teacher devices', Subsidy Program: 'Digital Classroom')",
    ],
    [
      "IT-Projektmanager, Landratsamt Rosenheim",
      "Betreuung von 23 Landkreisschulen (Förderzentren, Realschulen, Gymnasien, Berufsschulen, Berufliche Oberschulen und Wirtschaftsschulen / ca. 1.800 Lehrkräfte und 18.000 Schüler)",
      "Koordination von IT- und Elektrodienstleister",
      "Haushaltsplanung, Rechnungsprüfung und Verwaltung von IT-Anforderungen",
      "Planung, Auswertung und Umsetzungsüberwachung von lokalen, nationalen und EU weiten Ausschreibungen (z.B. Datenschutzaudit, Umstellung auf zentrales Drucker Leasing, Förderprogramm Lehrerdienstgeräte, Förderprogramm Digitales Klassenzimmer)",
    ],
    "11/2017",
    ""
  ),
  /////////////////////////////////////////////////////////////////////////////////////
  new resumeElement(
    [
      "Transfergesellschaft, PTG Projekt und Transfergesellschaft gGmbH, Rosenheim",
    ],
    [
      "Interim Employment Society, PTG Projekt und Transfergesellschaft gGmbH, Rosenheim, Germany",
    ],
    "07/2017",
    "10/2017"
  ),
  /////////////////////////////////////////////////////////////////////////////////////
  new resumeElement(
    [
      "Support Techniker, Kathrein-Werke KG Rosenheim",
      "1st und 2nd Level Support (ca. 1.800 Mitarbeitern / Windows Umfeld)",
      "Nationaler und internationaler Telefonsupport",
      "Vorqualifizierung und Dispatching von Tickets (Erstellen und Verwalten von Incidents über das hauseigene Ticketsystem)",
      "Betreuung und Support von VPN-Usern (Homeoffice und Außendienstler)",
      "Benutzeradministration via Active Directory",
      "Pflege der Netzwerkinfrastruktur (Patchen, Cisco Switche konfigurieren, etc.)",
    ],
    [
      "IT Support Engineer, Kathrein-Werke KG Rosenheim, Germany",
      "1st and 2nd level support (about 1,800 employee / windows environment)",
      "National and international tec support",
      "VPN-User Support (home office and field workers)",
      "Active Directory user administration",
      "Maintenance of network infrastructure (e.g., configuration of access points and switches)",
    ],
    "04/2015",
    "06/2017"
  ),
  /////////////////////////////////////////////////////////////////////////////////////
  new resumeElement(
    [
      "Service Techniker, D-Ploy GmbH, eingesetzt bei Hexal AG Holzkirchen",
      "1st und 2nd Level Support (ca. 2.800 Mitarbeitern / Windows Umfeld)",
      "Stellvertretender Teamleiter Second Level",
    ],
    [
      "IT Support Engineer, D-Ploy GmbH, Deployment Site: Hexal AG Holzkirchen, Germany",
      "1st and 2nd level support (about 2,800 employee / windows environment)",
      "Deputy team manager 2nd level",
    ],
    "01/2012",
    "03/2015"
  ),
  /////////////////////////////////////////////////////////////////////////////////////
  new resumeElement(
    [
      "Juniortechniker, Computacenter GmbH, eingesetzt bei Munich Re AG, München",
      "1st Level Support (ca. 2.000 Mitarbeitern / Windows Umfeld)",
    ],
    [
      "Junior IT Engineer, Computacenter GmbH, Deployment Site: Munich Re AG, München, Germany",
      "1st and 2nd level support (about 2,000 employee / windows environment)",
    ],
    "11/2011",
    "12/2011"
  ),
  /////////////////////////////////////////////////////////////////////////////////////
  new resumeElement(
    ["Versicherungskaufmann, Allianz AG, Rosenheim"],
    ["Insurance Salesman, Allianz AG, Rosenheim, Germany"],
    "12/2008",
    "04/2009"
  ),
  /////////////////////////////////////////////////////////////////////////////////////
  new resumeElement(
    ["Registratur Hilfstätigkeit, Steuerstelle Gemeinde Inzell"],
    [
      "Registry auxiliary activity, Taxdepartment Municipal Administration Inzell, Germany",
    ],
    "05/2007",
    "07/2007"
  ), /////////////////////////////////////////////////////////////////////////////////////
  new resumeElement(
    ["Lagerist, Dr. Johannes Heidenhain GmbH, Traunreut"],
    ["Storeman, Dr. Johannes Heidenhain GmbH, Traunreut, Germany"],
    "02/2006",
    "01/2007"
  ),
];

const resume_training = [
  /////////////////////////////////////////////////////////////////////////////////////
  new resumeElement(
    ["Fachinformatiker Systemintegration, bfz gGmbH, Rosenheim"],
    ["IT Specialist for System Integration, bfz gGmbH, Rosenheim, Germany"],
    "09/2009",
    "07/2011"
  ),
  /////////////////////////////////////////////////////////////////////////////////////
  new resumeElement(
    [
      "Kaufmann im Groß- und Außenhandel, Alois Höflschweiger Landmaschinentechnik, Siegsdorf",
    ],
    [
      "Management assistant in wholesale and foreign trade, Alois Höflschweiger Landmaschinentechnik, Siegsdorf, Germany",
    ],
    "08/2003",
    "01/2006"
  ),
];

const resume_school = [
  /////////////////////////////////////////////////////////////////////////////////////
  new resumeElement(
    ["Berufliche Oberschule (BOS), Traunstein "],
    [
      "Berufliche Oberschule (BOS) (Vocational High School), Traunstein, Germany",
    ],
    "09/2007",
    "08/2008"
  ),
  /////////////////////////////////////////////////////////////////////////////////////
  new resumeElement(
    ["Mittlere Reife, Private Wirtschaftsschule Dr. Kalscheuer, Traunstein"],
    [
      "Mittlere Reife (Middle Maturity / comparable with the British GCSE), Private Wirtschaftsschule Dr. Kalscheuer, Traunstein, Germany",
    ],
    "09/2000",
    "07/2003"
  ),
];

const resume_other = [
  new resumeElement(
    "Englisch Sprachkenntnisse: Verhandlungssicher",
    "English - Fluent"
  ),
  new resumeElement(
    "Zertifikat: The Complete JavaScript Course 2022: From Zero to Expert (Udemy, 09/2022)",
    "Certificate: The Complete JavaScript Course 2022: From Zero to Expert (Udemy, 09/2022)"
  ),
  new resumeElement(
    "Zertifikat: JavaScript Algorithms and Data Structures (freeCodeCamp, 08/2022)",
    "Certificate: JavaScript Algorithms and Data Structures (freeCodeCamp, 08/2022)"
  ),
  new resumeElement(
    "Zertifikat: Responsive Web Design (freeCodeCamp, 12/2021)",
    "Certificate: Responsive Web Design (freeCodeCamp, 12/2021)"
  ),
  new resumeElement(
    "Zertifikat: 1-Bit Godot Course by Heartbeast (08/2021)",
    "Certificate: 1-Bit Godot Course by Heartbeast (08/2021)"
  ),
  new resumeElement(
    "Zertifikat: ITIL Foundation Certificate in IT Service Management (09/2012)",
    "Certificate: ITIL Foundation Certificate in IT Service Management (09/2012)"
  ),
];

// ============================================================================ update resume
function update_resume_work() {
  _update_headers();
  _empty_container();
  _fill_container();
}
update_resume_work();

////////////////////// update headers
function _resume_header(className, en, de) {
  var header = document.querySelector(className);
  header.innerHTML = language == "en" ? en : de;
}

function _update_headers() {
  _resume_header(".resume__header__title", "Curriculum Vitae", "Lebenslauf");
  _resume_header(".resume__work__title", "Work", "Berufliche Tätigkeit");
  _resume_header(".resume__training__title", "Career Training", "Ausbildung");
  _resume_header(".resume__school__title", "School", "Schulbildung");
  _resume_header(".resume__other__title", "Other", "Sonstiges");
}

////////////////////// empty container
function _empty_container() {
  RESUME__WORK.innerHTML = "";
  RESUME__TRAINING.innerHTML = "";
  RESUME__SCHOOL.innerHTML = "";
  RESUME__OTHER.innerHTML = "";
}

////////////////////// fill container
function _fill_container() {
  resume_work.map((el) => RESUME__WORK.appendChild(_resume_el(el)));
  resume_training.map((el) => RESUME__TRAINING.appendChild(_resume_el(el)));
  resume_school.map((el) => RESUME__SCHOOL.appendChild(_resume_el(el)));
  resume_other.map((el) => RESUME__OTHER.appendChild(_resume_other(el)));
}

function _resume_el(el) {
  var newLi = document.createElement("li");
  newLi.classList = "resume__grid";
  newLi.appendChild(_resume_date(el.date));
  newLi.appendChild(_resume_values(el.value));
  return newLi;
}

function _resume_date(text) {
  let newP = document.createElement("p");
  newP.innerHTML = text;
  return newP;
}

function _resume_values_li(text) {
  var newLi = document.createElement("li");
  newLi.innerHTML = text;
  newLi.classList = "resume__list";
  return newLi;
}

function _resume_values(values) {
  var newUl = document.createElement("ul");
  values.map((el) => newUl.appendChild(_resume_values_li(el)));
  return newUl;
}

function _resume_other(el) {
  let newLi = document.createElement("li");
  newLi.innerHTML = `<p>${el.valueDE}</p>`;
  return newLi;
}

// ============================================================================ change language button
RESUME__BUTTON.addEventListener("click", () => {
  language == "en" ? (language = "de") : (language = "en");
  update_resume_work();
});
