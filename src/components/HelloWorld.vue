<!-- Use preprocessors via the lang attribute! e.g. <template lang="pug"> -->
<template>
  <div id="app">
    <div class="header">
      <div class="menu">
        <button v-for="p in pages" :key="'button#' + p.id" @click="scrollMeTo(p.id)">{{ p.name }}</button>
      </div>
    </div>

    <div v-for="p in pages" :key="'page#' + p.id" :class="p.class" :ref="p.id">
      <div class="title">
        <h1>{{ p.title }}</h1>
        <h2>{{ p.subtitle }}</h2>
      </div>
      <p class="text">{{ p.description }}</p>
      <div class="text" v-for="(t, index) in p.tab" :key="p.id + '#' + index">
        <h3>{{ t.title }}</h3>
        <h4>{{ t.subtitle }}</h4>
        <p>{{ t.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pages: [
        {
          id: "home",
          name: "ACCUEIL",
          class: "color-black page center",
          title: "FABIEN TAFFOREAU",
          subtitle: "DÉVELOPPEUR FULLSTACK",
          description: "Toujours avec un ordinateur dans les mains depuis mon plus jeune âge. J’ai appris grâce à Epitech puis 42 à m’adapter et apprendre très rapidement de nouveau langages. J’aime aussi beaucoup les défis techniques et l’optimisation. Assez créatif, j’adore prendre part à la conception d’un projet et le suivi avec le client afin de parler à d’autres personnes que mon ordinateur.",
          
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
              title: "2019 - FREELANCE DÉVELOPPEUR FULLSTACK - FABNUM",
              subtitle: "NodeJs / NestJs / Angular2 / Vue2 / Postgres / Typescript",
              description: "SEPIA - Création et développement d’une application web pourvisualiser le trafic aérien en temps réel. OSIRIS - Création et développement d’une web pour ordonner les formations rattachées à l’armée de l’air",
            },
            {
              title: "2017 - STAGE / CDI DÉVELOPPEUR FULLSTACK - COSIUM",
              subtitle: "Drupal / Java / AngularJs / Intellij",
              description: "Création et maintien de sites de e-commerces. Développement de fonctionnalité sur la solution SASS",
            },
            {
              title: "2016 - PART-TIME DÉVELOPPEUR FULLSTACK - MONBUILDING",
              subtitle: "NodeJs / Loopback / AngularJs / MongoDB",
              description: "Création de A à Z du MVP de MonBuilding. Déploiement et maintien de l’application",
            },
            {
              title: "2015 - FREELANCE DÉVELOPPEUR WEB / MOBILE - IAPULSE",
              subtitle: "NodeJs / Loopback / Ionic / Cordova / AngularJs / MongoDB",
              description:  "Développement d’une application mobile avec son Backend"
            },
            {
              title: "2015 - PART-TIME DÉVELOPPEUR WEB / MOBILE- AMEXIUM",
              subtitle: "Symphony2 / Ionic / Cordova / AngularJs / MySQL",
              description: "Développement d’une solution web SASS avec application mobile",
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
            },
            {
              title: "2016 - DIGITAL ENTREPRENEURSHIP HEC PARIS",
              subtitle: "Startup MonWagon",
            },
            {
              title: "2012 - 2 ANNÉES D’ÉCOLE D’INGÉNIEUR",
              subtitle: "Epitech",
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
              description: "J'aime beaucoup participer l'élaboration d'un projet, ne pas être seulement développeur mais bien comprendre les fonctions que je code et être intégré dans l'écosystème ou je travaille. Je sais travailler en équipe et être force de proposition. J'apprécie tout particulièrement d'apprendre quel que soit le domaine: design / technos / bonnes pratiques"
            },
            {
              title: "Loisirs",
              subtitle: "Musique / Cinéma / Sport",
              description: "J'écoute et je joue plusieurs instruments depuis tout petit. Je vais une fois par semaine au cinéma et regarde beaucoup de films / séries au quotidien. J'ai besoin de sport, je pratique donc du volley en club et ne suis jamais contre un petit foot, tennis, badminton..."
            },
          ]
        },
      ],
    };
  },
  methods: {
    scrollMeTo(refName) {
      const element = this.$refs[refName][0];
      const top = element.offsetTop - 80;

      window.scrollTo({
        top,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
};
</script>

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style lang="scss">
  
  $yellow: #fec788;
  $black: #2b3341;
  
  .color-yellow {
    color: $yellow;
  }
  .color-black {
    color: $black;
  }
  .bg-yellow {
    background-color: $yellow;
  }
  .bg-black {
    background-color: $black;
  }
  
  .header {
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    width: 100%;
    background: white;
    background-color: $yellow;
    .menu {
      padding: 20px;
      display: flex;
      justify-content: right;
      align-items: baseline;
      button {
        color: $black;
        background: none;
        border: solid 1px;
        border-radius: 2em;
        font: inherit;
        padding: 0.75em 2em;
        margin-left: 10px;
      }
    }
  }

  .page {
    position: relative;
    min-height: 100vh;
    &.center {
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
    }
    .text {
      width: 600px;
      text-align: justify;
      h3 {
        margin-bottom: 2px;
      }
      h4 {
        margin-top: 2px;
        margin-bottom: 2px;
      }
      p {
        margin-top: 2px;
      }
    }
  }


</style>
