<script setup lang="ts">
const experience = [
  {
    from: "04/2023",
    to: "07/2026",
    position: "Frontend-Entwickler und Projektmanager",
    company: "TechDivision gGmbH",
    location: "Kolbermoor",
    descriptions: [
      "Technologien: HTML, CSS, JavaScript, TypeScript, AEM, Edge Delivery Services (EDS), NEOS CMS, Git, Jira",
      "Webentwicklung im CMS-Umfeld (AEM, EDS, NEOS)",
      "Entwicklung und Wartung von Komponenten für mehrere Kundenprojekte",
      "Mitarbeit an Enterprise-CMS-Lösungen",
      "Technische Konzeption und Umsetzung von Kundenanforderungen",
      "Abstimmung zwischen Entwicklung, Projektmanagement und Kunden",
      "Qualitätssicherung durch Code Reviews und Testing",
      "Projektcontrolling",
    ],
  },
  {
    from: "11/2017",
    to: "04/2023",
    position: "IT-Projektmanager",
    company: "Landratsamt Rosenheim",
    location: "Rosenheim",
    descriptions: [
      "Betreuung von 23 Landkreisschulen (Förderzentren, Realschulen, Gymnasien, Berufsschulen, Berufliche Oberschulen und Wirtschaftsschulen) mit rund 1.800 Lehrkräften und 18.000 Schülerinnen und Schülern",
      "Steuerung und Koordination externer IT- und Elektrodienstleister",
      "Haushaltsplanung, Rechnungsprüfung sowie Verwaltung und Priorisierung von IT-Anforderungen",
      "Planung, Durchführung und Umsetzungsüberwachung von kommunalen, nationalen und EU-weiten Ausschreibungen",
      "Koordination und Begleitung von Digitalisierungs- und Förderprojekten, darunter: Datenschutzaudit / Einführung eines zentralen Drucker-Leasingkonzepts / Förderprogramm 'Lehrerdienstgeräte' / Förderprogramm 'Digitales Klassenzimmer'",
    ],
  },

  {
    from: "04/2015",
    to: "06/2017",
    position: "Support-Techniker",
    company: "Kathrein-Werke KG",
    location: "Rosenheim",
    descriptions: [
      "1st- und 2nd-Level-Support für rund 1.800 Mitarbeitende in einem internationalen Windows-Umfeld",
      "Nationaler und internationaler Anwendersupport per Telefon und Remote-Zugriff",
      "Analyse, Priorisierung und Bearbeitung von Incidents sowie Ticket-Dispatching",
      "Betreuung und Support von VPN-Anbindungen für Homeoffice- und Außendienstmitarbeitende",
      "Benutzer- und Berechtigungsverwaltung im Active Directory",
      "Administration und Pflege der Netzwerkinfrastruktur, einschließlich Konfiguration von Cisco-Switches",
      "Unterstützung bei der Sicherstellung eines stabilen IT-Betriebs an mehreren Standorten",
    ],
  },
  {
    from: "01/2012",
    to: "03/2015",
    position: "Service-Techniker",
    company: "D-Ploy GmbH",
    location: "Hexal AG, Holzkirchen",
    descriptions: [
      "1st- und 2nd-Level-Support für rund 2.800 Mitarbeitende in einem internationalen Unternehmensumfeld",
      "Fehleranalyse und Störungsbehebung im Hard- und Softwarebereich",
      "Stellvertretende Teamleitung des Second-Level-Supports",
      "Koordination und Priorisierung von Supportanfragen innerhalb des Teams",
    ],
  },
  {
    from: "11/2011",
    to: "12/2011",
    position: "Juniortechniker",
    company: "Computacenter GmbH",
    location: "Munich Re AG, München",
    descriptions: [
      "1st-Level-Support für rund 2.000 Mitarbeitende",
      "Bearbeitung und Weiterleitung von Supportanfragen im Windows-Umfeld",
    ],
  },
  {
    from: "02/2008",
    to: "04/2009",
    position: "Weitere Berufserfahrung (vor IT-Karriere)",
    company: "",
    location: "",
    descriptions: [
      "Versicherungskaufmann, Allianz AG, Rosenheim",
      "Registratur-Hilfstätigkeit, Steuerstelle Gemeinde Inzell",
      "Lagerist, Dr. Johannes Heidenhain GmbH, Traunreut",
    ],
  },
];
</script>

<template>
  <section id="vitae">
    <h1>Experience</h1>

    <table>
      <tbody>
        <tr v-for="job in experience" :key="job.from">
          <td class="date">{{ job.from }} – {{ job.to }}</td>

          <td class="details">
            <h2>{{ job.position }}</h2>

            <h3 v-if="job.company || job.location">
              <span v-if="job.company">{{ job.company }}</span>
              <span v-if="job.company && job.location"> · </span>
              <span v-if="job.location">{{ job.location }}</span>
            </h3>

            <ul>
              <li v-for="description in job.descriptions" :key="description">
                {{ description }}
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped>
@import "./Vitae.css";
</style>
