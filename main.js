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

const RESUME__HEADER = document.querySelector("#main__resume__header");
const RESUME__WORK__HEADER = document.querySelector("#main__resume__work__header");
const RESUME__TRAINING__HEADER = document.querySelector("#main__resume__training__header");
const RESUME__SCHOOL__HEADER = document.querySelector("#main__resume__school__header");
const RESUME__OTHER__HEADER = document.querySelector("#main__resume__other__header");

const resumeDB = {
  language: "en",
  work: [
    {
      keyDE: "Seit 11/2017",
      keyEN: "Since 11/2017",
      headerDE: "IT-Projektmanager, Landratsamt Rosenheim",
      headerEN: "IT-Projektmanager, Administrative District Office Rosenheim, Germany",
      tasksDE: [
        "Betreuung von 23 Landkreisschulen (Förderzentren, Realschulen, Gymnasien, Berufsschulen, Berufliche Oberschulen und Wirtschaftsschulen / ca. 1.800 Lehrkräfte und 18.000 Schüler)",
        "Koordination von IT- und Elektrodienstleister",
        "Haushaltsplanung, Rechnungsprüfung und Verwaltung von IT-Anforderungen",
        "Planung, Auswertung und Umsetzungsüberwachung von lokalen, nationalen und EU weiten Ausschreibungen (z.B. Datenschutzaudit, Umstellung auf zentrales Drucker Leasing, Förderprogramm Lehrerdienstgeräte, Förderprogramm Digitales Klassenzimmer)",
      ],
    },
    {
      keyDE: "07/2017 bis 11/2017",
      keyEN: "07/2017 to 11/2017",
      headerDE: "Transfergesellschaft, PTG Projekt und Transfergesellschaft gGmbH, Rosenheim",
      headerEN:
        "Interim Employment Society, PTG Projekt und Transfergesellschaft gGmbH, Rosenheim, Germany",
    },
    {
      keyDE: "04/2015 bis 06/2017",
      keyEN: "04/2015 to 06/2017",
      headerDE: "Support Techniker, Kathrein-Werke KG Rosenheim",
      headerEN: "IT Support Engineer, Kathrein-Werke KG Rosenheim, Germany",
      tasksDE: [
        "1st und 2nd Level Support (ca. 1.800 Mitarbeitern / Windows Umfeld)",
        "Nationaler und internationaler Telefonsupport",
        "Vorqualifizierung und Dispatching von Tickets (Erstellen und Verwalten von Incidents über das hauseigene Ticketsystem)",
        "Betreuung und Support von VPN-Usern (Homeoffice und Außendienstler)",
        "Benutzeradministration via Aktive Directory",
        "Pflege der Netzwerkinfrastruktur (Patchen, Cisco Switche konfigurieren, etc.)",
      ],
    },
    {
      keyDE: "01/2012 bis 03/2015",
      keyEN: "01/2012 to 03/2015",
      headerDE: "Service Techniker, D-Ploy GmbH, eingesetzt bei Hexal AG Holzkirchen",
      headerEN: "IT Support Engineer, D-Ploy GmbH, Deployment Site: Hexal AG Holzkirchen, Germany",
      tasksDE: [
        "1st und 2nd Level Support (ca. 2.800 Mitarbeitern / Windows Umfeld)",
        "Stellvertretender Teamleiter Second Level",
      ],
    },
    {
      keyDE: "11/2011 bis 12/2011",
      keyEN: "11/2011 to 12/2011",
      headerDE: "Juniortechniker, Computacenter GmbH, eingesetzt bei Munich Re AG, München",
      headerEN:
        "Junior IT Engineer, Computacenter GmbH, Deployment Site: Munich Re AG, München, Germany",
      tasksDE: ["1st Level Support (ca. 2.000 Mitarbeitern / Windows Umfeld)"],
    },
    {
      keyDE: "12/2008 bis 04/2009",
      keyEN: "12/2008 to 04/2009",
      headerDE: "Versicherungskaufmann, Allianz AG, Rosenheim",
      headerEN: "Insurance Salesman, Allianz AG, Rosenheim, Germany",
    },
    {
      keyDE: "05/2007 bis 07/2007",
      keyEN: "05/2007 to 07/2007",
      headerDE: "Registratur Hilfstätigkeit, Steuerstelle Gemeinde Inzell",
      headerEN:
        "Registry Auxiliary Activity, Taxdepartment Municipal Administration Inzell, Germany",
    },
    {
      keyDE: "02/2006 bis 01/2007",
      keyEN: "02/2006 to 01/2007",
      headerDE: "Lagerist, Dr. Johannes Heidenhain GmbH, Traunreut",
      headerEN: "Storeman, Dr. Johannes Heidenhain GmbH, Traunreut, Germany",
    },
  ],
  training: [
    {
      keyDE: "09/2009 bis 07/2011",
      keyEN: "09/2009 to 07/2011",
      valueDE: "Fachinformatiker Systemintegration, bfz gGmbH, Rosenheim",
      valueEN: "IT specialist for system integration, bfz gGmbH, Rosenheim, Germany",
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
      valueEN: "Berufliche Oberschule (BOS) (vocational High School), Traunstein, Germany",
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

// ============================================================================ Resume
function updateResume() {
  resumeUpdateHeader();

  updateResumeWork();
  updateResumeTraining();
  updateResumeSchool();
  updateResumeOther();
}
updateResume();

// ==== header
function resumeUpdateHeader() {
  if (resumeDB.language === "en") {
    RESUME__HEADER.innerText = "Resume";
    RESUME__WORK__HEADER.innerText = "Work";
    RESUME__TRAINING__HEADER.innerText = "Career Training";
    RESUME__SCHOOL__HEADER.innerText = "School";
    RESUME__OTHER__HEADER.innerText = "Other";
  }
  if (resumeDB.language === "de") {
    RESUME__HEADER.innerText = "Lebenslauf";
    RESUME__WORK__HEADER.innerText = "Berufliche Tätigkeit";
    RESUME__TRAINING__HEADER.innerText = "Ausbildung";
    RESUME__SCHOOL__HEADER.innerText = "Schulbildung";
    RESUME__OTHER__HEADER.innerText = "Sonstiges";
  }
}

// ==== work
function resumeWork_getDate(text) {
  let newDate = document.createElement("li");
  newDate.innerHTML = text;
  return newDate;
}

function resumeWork_getHeader(text) {
  let newHeader = document.createElement("p");
  newHeader.innerHTML = text;
  return newHeader;
}

function resumeWork_getTasks(taks) {
  let newUl = document.createElement("ul");
  newUl.classList.add("main__resume__list");
  taks.forEach((task) => {
    let newTask = document.createElement("li");
    newTask.innerHTML = task;
    newUl.appendChild(newTask);
  });
  return newUl;
}

function updateResumeWork() {
  // empty resume work
  RESUME__WORK.innerHTML = "";

  // fill resume work from database
  resumeDB.work.forEach((element) => {
    let newLi = document.createElement("li");
    newLi.classList = "resume__grid resume__margin";
    RESUME__WORK.appendChild(newLi);

    // add date
    if (resumeDB.language === "de") newLi.appendChild(resumeWork_getDate(element.keyDE));
    else newLi.appendChild(resumeWork_getDate(element.keyEN));

    // add header and tasks
    let newHeaderAndTasks = document.createElement("div");
    newLi.appendChild(newHeaderAndTasks);

    // header

    if (resumeDB.language === "de")
      newHeaderAndTasks.appendChild(resumeWork_getHeader(element.headerDE));
    else newHeaderAndTasks.appendChild(resumeWork_getHeader(element.headerEN));

    // tasks
    if (element.tasksDE) newHeaderAndTasks.appendChild(resumeWork_getTasks(element.tasksDE));
  });
}

// ==== training
function updateResumeTraining() {
  // empty resume training
  RESUME__TRAINING.innerHTML = "";

  // fill resume training from database
  resumeDB.training.forEach((element) => {
    let newLi = document.createElement("li");
    newLi.classList = "resume__grid resume__margin";
    if (resumeDB.language === "de")
      newLi.innerHTML = `<p>${element.keyDE}</p><p>${element.valueDE}</p>`;
    else newLi.innerHTML = `<p>${element.keyEN}</p><p>${element.valueEN}</p>`;
    RESUME__TRAINING.appendChild(newLi);
  });
}

// ==== school
function updateResumeSchool() {
  // empty resume school
  RESUME__SCHOOL.innerHTML = "";

  // fill resume school from database
  resumeDB.school.forEach((element) => {
    let newLi = document.createElement("li");
    newLi.classList = "resume__grid resume__margin";
    if (resumeDB.language === "de")
      newLi.innerHTML = `<p>${element.keyDE}</p><p>${element.valueDE}</p>`;
    else newLi.innerHTML = `<p>${element.keyEN}</p><p>${element.valueEN}</p>`;
    RESUME__SCHOOL.appendChild(newLi);
  });
}

// ==== other
function updateResumeOther() {
  // empty resume other
  RESUME__OTHER.innerHTML = "";

  // fill resume other from database
  resumeDB.other.forEach((element) => {
    let newLi = document.createElement("li");
    newLi.classList = "resume__margin";
    if (resumeDB.language === "de") newLi.innerHTML = `<p>${element.valueDE}</p>`;
    else newLi.innerHTML = `<p>${element.valueEN}</p>`;
    RESUME__OTHER.appendChild(newLi);
  });
}
