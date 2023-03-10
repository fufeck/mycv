export const pages = [
    {
      id: "home",
      name: "ACCUEIL",
      class: "color-black page center",
      title: "FABIEN TAFFOREAU",
      subtitle: "DÉVELOPPEUR FULLSTACK",
      description: "Toujours avec un ordinateur dans les mains depuis mon plus jeune âge. J’ai appris grâce à Epitech puis 42 à m’adapter et à me former très rapidement sur de nouveaux langages. J’aime aussi beaucoup les défis techniques et l’optimisation. Assez créatif, j’adore prendre part à la conception d’un projet et assure le suivi avec le client afin de parler à d’autres personnes que mon ordinateur.",
      
    },
    {
      id: "skills",
      name: "SKILLS",
      class: "color-yellow bg-black page center",
      title: "SKILLS",
      tab: [
        {
          title: "ENVIRONNEMENT",
          subtitle: "Macos / Linux",
        },
        {
          title: "ORGANISATION",
          subtitle: "Git / Docker / Trello",
        },
        {
          title: "BACKEND",
          subtitle: "NodeJs / Typescript / SQL",
        },
        {
          title: "FRONTEND",
          subtitle: "Angular / Vue",
        },
        {
          title: "AUTRES",
          subtitle: "Ionic / PHP / DRUPAL",
        },            
      ]
    },
    {
      id: "xp",
      name: "EXPERIENCES",
      class: "color-black page center",
      title: "EXPERIENCES",
      tab: [
        {
          title: "2019 / 2023 - FREELANCE DÉVELOPPEUR FULLSTACK - FABNUM",
          subtitle: "NodeJs / NestJs / Typeorm / Swagger / Typescript / Redis / Postgis / TymescaleDB / Postgres / Vue2 / Vuetify / Jest / Angular / Leaflet / Turfjs / OpenStreatMap",
          html: true,
          description: "OSIRIS - Conception et développement d’une application pour ordonner et visualiser les formations et cursus des écoles de l’armée de l’air. Mise en place d’une API CRUD robuste avec système de migration et droits RBAC avec son front et des tests unitaires.<br/>SEPIA - Création et développement d’une application web pour visualiser le trafic aérien en temps réel (comme FlightRadar24). Création d’un service pour récupérer les différents flux (BEAST, SBS…) et fusionner toutes les données dans une DB tampon. Optimisation de la DB persistante pour supporter la charge. Utilisation de librairies de cartographies et geodatas en front.",
        },
        {
          title: "2017 / 2019 - STAGE / CDI DÉVELOPPEUR FULLSTACK - COSIUM",
          subtitle: "Drupal / Java / AngularJs / Intellij",
          description: "Création et maintien de sites de e-commerces d'optique. Développement de fonctionnalité sur la solution SASS Cosium",
        },
        {
          title: "2016 - PART-TIME DÉVELOPPEUR FULLSTACK - MONBUILDING",
          subtitle: "NodeJs / Loopback / AngularJs / MongoDB",
          description: "Création de A à Z du MVP de MonBuilding. Déploiement et maintien de l’application",
        },
        {
          title: "2015 - FREELANCE DÉVELOPPEUR WEB / MOBILE - IAPULSE",
          subtitle: "NodeJs / Loopback / Ionic / Cordova / AngularJs / MongoDB",
          description:  "Développement de l'application mobile Looky en Ionic avec son Backend en Loopback"
        },
        {
          title: "2015 - PART-TIME DÉVELOPPEUR WEB / MOBILE- AMEXIUM",
          subtitle: "Symphony2 / Ionic / Cordova / AngularJs / MySQL",
          description: "Développement d’une solution web SASS avec application mobile, qui permettait de référencer tout les biens et mobiliers des collectivités",
        },
        {
          title: "2014 - STAGE DÉVELOPPEUR WEB - SUBVITAMINE",
          subtitle: "Symphony2 / CakePhp / Magento / AngularJs",
          description: "Développement de sites web d’e-commerce",
        },
      ]
    },
    {
      id: "formation",
      name: "FORMATIONS",
      class: "color-yellow bg-black page center",
      title: "FORMATIONS",
      tab: [
        {
          title: "2018 - DIPLOME 42",
          subtitle: "École 42 - niveau 21 équivalent Master",
          description: "Faute de moyens, j'ai du quitter Épitech pour l'école 42. Avec exactement la même philosophie: Apprendre par soi même. Avec un programme copié sur Epitech, j'ai très vite trouvé mes marques et pris beaucoup de plaisir pendant 5 ans."
        },
        {
          title: "2016 - DIGITAL ENTREPRENEURSHIP HEC PARIS",
          subtitle: "Startup MonWagon",
          description: "Durant mon cursus à l'école 42, j'en ai profité pour participer à 2 formations de 4 mois chacunes à HEC, ou j'ai pu avoir une vision plus large que le simple dev. Nous avons monté un MVP de MonWagon qui était le Waze des transports en communs."
        },
        {
          title: "2012 - 2 ANNÉES D’ÉCOLE D’INGÉNIEUR",
          subtitle: "Epitech",
          description: "J'ai passé 2 ans dans cette école où il n'y a pas de profs et où les projets qui s'enchainent nous obligent à nous débrouiller et apprendre tout seul. J'ai beaucoup aimé cette structure qui donne des bases solides en code C et C++, qui permet ensuite d'appréhender les autres languages plus facilement."
        },
        {
          title: "2011 - BACCALAURÉAT S",
          subtitle: "Lycée Blaise Pascal - Orsay",
        },

      ]
    },
    {
      id: "interet",
      name: "INTÉRETS",
      class: "page center",
      title: "INTÉRETS",
      tab: [
        {
          title: "Compétences",
          subtitle: "Gestion de projet / Team Player / Créativité / Curieux",
          description: "J'aime beaucoup participer à l'élaboration d'un projet, ne pas être seulement développeur mais bien comprendre les fonctions que je code et être intégré dans l'écosystème où je travaille. Je sais travailler en équipe et être force de propositions. J'apprécie tout particulièrement d'apprendre quel que soit le domaine: design / technos / bonnes pratiques"
        },
        {
          title: "Loisirs",
          subtitle: "Musique / Cinéma / Sport",
          description: "J'écoute et je joue de plusieurs instruments depuis tout petit. Je vais une fois par semaine au cinéma et regarde beaucoup de films / séries au quotidien. J'ai besoin de sport, je pratique donc du volley en club et ne suis jamais contre un petit foot, tennis, badminton..."
        },
      ]
    },
    {
      id: "plus",
      name: "PLUS",
      class: "color-yellow bg-black page center",
      title: "PLUS",
      tab: [
        {
          title: "Références",
          html: true,
          description: "<a style='color: #fec788' target='_blank' href='https://www.linkedin.com/in/ftaffore/'>Linkedin</a><br/><a style='color: #fec788' target='_blank' href='https://github.com/fufeck'>Github</a><br/><a style='color: #fec788' target='_blank' href='https://www.malt.fr/profile/fabientafforeau'>Malt</a><br/><a style='color: #fec788' target='_blank' href='./CV.pdf'>CV</a>"
        },
        {
          title: "Contact",
          html: true,
          description: "fabien.tafforeau@gmail.com<br/>0783963184"
        },
      ]
    },
  ];
