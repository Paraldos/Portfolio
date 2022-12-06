"use strict";

const MENUBTN = document.querySelector(".menu_btn");
const NAVBAR = document.querySelector(".navbar");
const FOOTER = document.querySelector(".footer");
const NAVLOGO = document.querySelector(".logo");
const NAVBUTTONS = document.querySelectorAll(".navButton");

const RESUME = document.querySelector(".main__resume");
const RESUME__BASICS = document.querySelector("#main__resume__basics");
const RESUME__WORK = document.querySelector("#main__resume__work");
const RESUME__TRAINING = document.querySelector("#main__resume__training");
const RESUME__SCHOOL = document.querySelector("#main__resume__school");
const RESUME__OTHER = document.querySelector("#main__resume__other");
const RESUME__CHANGELANGUAGE = document.querySelector("#main__resume__changeLanguage");

const resumeDB = {
  language: "de",
  work: [
    {
      keyDE: "Seit 11/2017",
      keyEN: "Since 11/2017",
      valueDE: [
        "IT-Projektmanager, Landratsamt Rosenheim",
        "Betreuung von 23 Landkreisschulen (Förderzentren, Realschulen, Gymnasien, Berufsschulen, Berufliche Oberschulen und Wirtschaftsschulen / ca. 1.800 Lehrkräfte und 18.000 Schüler)",
        "Koordination von IT- und Elektrodienstleister",
        "Haushaltsplanung, Rechnungsprüfung und Verwaltung von IT-Anforderungen",
        "Planung, Auswertung und Umsetzungsüberwachung von lokalen, nationalen und EU weiten Ausschreibungen (z.B. Datenschutzaudit, Umstellung auf zentrales Drucker Leasing, Förderprogramm Lehrerdienstgeräte, Förderprogramm Digitales Klassenzimmer)",
      ],
      valueEN: [
        "IT-Projektmanager, Administrative District Office Rosenheim, Germany",
        "Tec managament for 23 discritc schools (Special Schools, Middle Schools, High Schools, Vocational Schools, Vocational High Schools and Business Schools / about 1,800 Teachers and 18,000 Students)",
        "Supervision of IT Service Contractors, Media Tec Specialists and Electricians",
        "Budgeting, accounting and generall administration for IT requirements",
        "Planning, evaluation and supervision for local, national, and EU competitive tendering procedures (e.g. Data Privacy Audits, Centralized Printer Management, Subsidy Program: 'Teacherdevices', Subsidy Program: 'Digital Classroom')",
      ],
    },
    {
      keyDE: "07/2017 bis 11/2017",
      keyEN: "07/2017 to 11/2017",
      valueDE: ["Transfergesellschaft, PTG Projekt und Transfergesellschaft gGmbH, Rosenheim"],
      valueEN: [
        "Interim Employment Society, PTG Projekt und Transfergesellschaft gGmbH, Rosenheim, Germany",
      ],
    },
    {
      keyDE: "04/2015 bis 06/2017",
      keyEN: "04/2015 to 06/2017",
      valueDE: [
        "Support Techniker, Kathrein-Werke KG Rosenheim",
        "1st und 2nd Level Support (ca. 1.800 Mitarbeitern / Windows Umfeld)",
        "Nationaler und internationaler Telefonsupport",
        "Vorqualifizierung und Dispatching von Tickets (Erstellen und Verwalten von Incidents über das hauseigene Ticketsystem)",
        "Betreuung und Support von VPN-Usern (Homeoffice und Außendienstler)",
        "Benutzeradministration via Aktive Directory",
        "Pflege der Netzwerkinfrastruktur (Patchen, Cisco Switche konfigurieren, etc.)",
      ],
      valueEN: [
        "IT Support Engineer, Kathrein-Werke KG Rosenheim, Germany",
        "1st and 2nd level support (about 1,800 employee / windows environment)",
        "National and international tec support",
        "VPN-User Support (home office and field workers)",
        "Aktive Directory user administration",
        "Maintenance of network infrastructure (e.g. configuration of accesspoints and switches)",
      ],
    },
    {
      keyDE: "01/2012 bis 03/2015",
      keyEN: "01/2012 to 03/2015",
      valueDE: [
        "Service Techniker, D-Ploy GmbH, eingesetzt bei Hexal AG Holzkirchen",
        "1st und 2nd Level Support (ca. 2.800 Mitarbeitern / Windows Umfeld)",
        "Stellvertretender Teamleiter Second Level",
      ],
      valueEN: [
        "IT Support Engineer, D-Ploy GmbH, Deployment Site: Hexal AG Holzkirchen, Germany",
        "1st and 2nd level support (about 2,800 employee / windows environment)",
        "Deupty team manager 2nd level",
      ],
    },
    {
      keyDE: "11/2011 bis 12/2011",
      keyEN: "11/2011 to 12/2011",
      valueDE: [
        "Juniortechniker, Computacenter GmbH, eingesetzt bei Munich Re AG, München",
        "1st Level Support (ca. 2.000 Mitarbeitern / Windows Umfeld)",
      ],
      valueEN: [
        "Junior IT Engineer, Computacenter GmbH, Deployment Site: Munich Re AG, München, Germany",
        "1st and 2nd level support (about 2,000 employee / windows environment)",
      ],
    },
    {
      keyDE: "12/2008 bis 04/2009",
      keyEN: "12/2008 to 04/2009",
      valueDE: ["Versicherungskaufmann, Allianz AG, Rosenheim"],
      valueEN: ["Insurance Salesman, Allianz AG, Rosenheim, Germany"],
    },
    {
      keyDE: "05/2007 bis 07/2007",
      keyEN: "05/2007 to 07/2007",
      valueDE: ["Registratur Hilfstätigkeit, Steuerstelle Gemeinde Inzell"],
      valueEN: [
        "Registry auxiliary activity, Taxdepartment Municipal Administration Inzell, Germany",
      ],
    },
    {
      keyDE: "02/2006 bis 01/2007",
      keyEN: "02/2006 to 01/2007",
      valueDE: ["Lagerist, Dr. Johannes Heidenhain GmbH, Traunreut"],
      valueEN: ["Storeman, Dr. Johannes Heidenhain GmbH, Traunreut, Germany"],
    },
  ],
  training: [
    {
      keyDE: "09/2009 bis 07/2011",
      keyEN: "09/2009 to 07/2011",
      valueDE: "Fachinformatiker Systemintegration, bfz gGmbH, Rosenheim",
      valueEN: "IT Specialist for System Integration, bfz gGmbH, Rosenheim, Germany",
    },
    {
      keyDE: "08/2003 bis 01/2006",
      keyEN: "08/2003 to 01/2006",
      valueDE:
        "Kaufmann im Groß- und Außenhandel, Alois Höflschweiger Landmaschinentechnik, Siegsdorf",
      valueEN:
        "Management assistant in wholesale and foreign trade, Alois Höflschweiger Landmaschinentechnik, Siegsdorf, Germany",
    },
  ],
  school: [
    {
      keyDE: "09/2007 bis 08/2008",
      keyEN: "09/2007 to 08/2008",
      valueDE: "Berufliche Oberschule (BOS), Traunstein ",
      valueEN: "Berufliche Oberschule (BOS) (Vocational High School), Traunstein, Germany",
    },
    {
      keyDE: "09/2000 bis 07/2003",
      keyEN: "09/2000 to 07/2003",
      valueDE: "Mittlere Reife, Private Wirtschafsschule Dr. Kalscheuer, Traunstein",
      valueEN:
        "Mittlere Reife (Middle Maturity / comparable with the British GCSE), Private Wirtschafsschule Dr. Kalscheuer, Traunstein, Germany",
    },
  ],
  other: [
    {
      valueDE: "Englisch Sprachkenntnisse: Verhandlungssicher",
      valueEN: "English - Fluent",
    },
    {
      valueDE:
        "Zertifikat: The Complete JavaScript Course 2022: From Zero to Expert (Udemy, 09/2022)",
      valueEN:
        "Certificate: The Complete JavaScript Course 2022: From Zero to Expert (Udemy, 09/2022)",
    },
    {
      valueDE: "Zertifikat: JavaScript Algorithms and Data Structures (freeCodeCamp, 08/2022)",
      valueEN: "Certificate: JavaScript Algorithms and Data Structures (freeCodeCamp, 08/2022)",
    },
    {
      valueDE: "Zertifikat: Responsive Web Design (freeCodeCamp, 12/2021)",
      valueEN: "Certificate: Responsive Web Design (freeCodeCamp, 12/2021)",
    },
    {
      valueDE: "Zertifikat: ITIL Foundation Certificate in IT Service Management (09/2012)",
      valueEN: "Certificate: ITIL Foundation Certificate in IT Service Management (09/2012)",
    },
  ],
};

// ============================================================================ Navbar
function toggleNavMenu() {
  if (NAVBAR.classList.contains("open")) {
    NAVBAR.classList.remove("open");
    FOOTER.classList.remove("open");
  } else {
    NAVBAR.classList.add("open");
    FOOTER.classList.add("open");
  }
}

function logoClickHandler() {
  if (NAVBAR.classList.contains("open")) {
    NAVBAR.classList.remove("open");
    FOOTER.classList.remove("open");
  }
}

NAVLOGO.addEventListener("click", logoClickHandler);

MENUBTN.addEventListener("click", toggleNavMenu);

NAVBUTTONS.forEach((element) => {
  element.addEventListener("click", toggleNavMenu);
});

// ============================================================================
// ==== work
function resume_work_key(key) {
  let newDate = document.createElement("p");
  newDate.innerHTML = key;
  return newDate;
}

function resume_work_value(value) {
  let newUl = document.createElement("ul");
  value.forEach((el, index) => {
    let newTest = document.createElement("li");
    newTest.innerHTML = el;
    if (index != 0) newTest.classList = "resume__list";
    newUl.appendChild(newTest);
  });
  return newUl;
}

function new_resume_work(key, value, language) {
  let newLi = document.createElement("li");
  newLi.classList = `resume__grid resume__margin ${language}`;
  newLi.appendChild(resume_work_key(key));
  newLi.appendChild(resume_work_value(value));
  return newLi;
}

function update_resume_work() {
  RESUME__WORK.innerHTML = "";
  resumeDB.work.forEach((el) => {
    RESUME__WORK.appendChild(new_resume_work(el.keyDE, el.valueDE, "de"));
    RESUME__WORK.appendChild(new_resume_work(el.keyEN, el.valueEN, "en"));
  });
}
update_resume_work();

// ======== training
function new_resume_training(key, value, language) {
  let newLi = document.createElement("li");
  newLi.classList = `resume__grid resume__margin ${language}`;
  newLi.innerHTML = `<p>${key}</p><p>${value}</p>`;
  return newLi;
}

function update_resume_training() {
  RESUME__TRAINING.innerHTML = "";
  resumeDB.training.forEach((el) => {
    RESUME__TRAINING.appendChild(new_resume_training(el.keyDE, el.valueDE, "de"));
    RESUME__TRAINING.appendChild(new_resume_training(el.keyEN, el.valueEN, "en"));
  });
}
update_resume_training();

// ======== school
function new_resume_school(key, value, language) {
  let newLi = document.createElement("li");
  newLi.classList = `resume__grid resume__margin ${language}`;
  newLi.innerHTML = `<p>${key}</p><p>${value}</p>`;
  return newLi;
}

function update_resume_school() {
  RESUME__SCHOOL.innerHTML = "";
  resumeDB.school.forEach((el) => {
    RESUME__SCHOOL.appendChild(new_resume_school(el.keyDE, el.valueDE, "de"));
    RESUME__SCHOOL.appendChild(new_resume_school(el.keyEN, el.valueEN, "en"));
  });
}
update_resume_school();

// ======== other
function new_resume_other(text, language) {
  let newLi = document.createElement("li");
  newLi.classList = `resume__margin ${language}`;
  newLi.innerHTML = `<p>${text}</p>`;
  return newLi;
}

function update_resume_other() {
  RESUME__OTHER.innerHTML = "";
  resumeDB.other.forEach((el) => {
    RESUME__OTHER.appendChild(new_resume_other(el.valueDE, "de"));
    RESUME__OTHER.appendChild(new_resume_other(el.valueEN, "en"));
  });
}
update_resume_other();

// toggle resume language
function resume_change_Language() {
  let EN_ELEMENTS = document.querySelectorAll(".en");
  let DE_ELEMENTS = document.querySelectorAll(".de");

  if (resumeDB.language === "de") {
    EN_ELEMENTS.forEach((el) => el.classList.add("invisible"));
    DE_ELEMENTS.forEach((el) => el.classList.remove("invisible"));
    RESUME__CHANGELANGUAGE.innerText = "DE";
  } else if (resumeDB.language === "en") {
    EN_ELEMENTS.forEach((el) => el.classList.remove("invisible"));
    DE_ELEMENTS.forEach((el) => el.classList.add("invisible"));
    RESUME__CHANGELANGUAGE.innerText = "EN";
  }
}
resume_change_Language();

RESUME__CHANGELANGUAGE.addEventListener("click", () => {
  if (resumeDB.language === "en") resumeDB.language = "de";
  else resumeDB.language = "en";
  resume_change_Language();
});
