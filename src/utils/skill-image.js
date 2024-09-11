import html from '/public/svg/skills/html.svg';
import css from '/public/svg/skills/css.svg';
import javascript from '/public/svg/skills/javascript.svg';
import typescript from '/public/svg/skills/typescript.svg';
import bootstrap from '/public/svg/skills/bootstrap.svg';
import materialui from '/public/svg/skills/materialui.svg';
import tailwind from '/public/svg/skills/tailwind.svg';
import react from '/public/svg/skills/react.svg';
import nextJS from '/public/svg/skills/nextJS.svg';
import graphql from '/public/svg/skills/graphql.svg';
import vue from '/public/svg/skills/vue.svg';

import python from '/public/svg/skills/python.svg';
import django from '/public/svg/skills/django.svg';
import nuxtJS from '/public/svg/skills/nuxtJS.svg';

import postgresql from '/public/svg/skills/postgresql.svg';
import mongoDB from '/public/svg/skills/mongoDB.svg';
import mysql from '/public/svg/skills/mysql.svg';
import aws from '/public/svg/skills/aws.svg';
import azure from '/public/svg/skills/azure.svg';
import docker from '/public/svg/skills/docker.svg';
import git from '/public/svg/skills/git.svg';



export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'typescript':
      return typescript;
    case 'bootstrap':
      return bootstrap;
    case 'materialui':
      return materialui;
    case 'tailwind':
      return tailwind;
    case 'react':
      return react;
    case 'next js':
      return nextJS;
    case 'graphql':
      return graphql;
    case 'vue':
      return vue;
    case 'python':
      return python;
    case 'django':
      return django;
    case 'nuxt js':
      return nuxtJS;
    case 'postgresql':
      return postgresql;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'aws':
      return aws;
    case 'azure':
      return azure;
    case 'git':
      return git;
    case 'docker':
      return docker;
    default:
      break;
  }
}
