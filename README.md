# lerna monorepo template

This repo shows you how to configure multiproject repository using lerna and have a shared design system across your applications

## multiple projects with a shared design system
Providing multiple software services with a shared UI experiance is a bit tricky. Developers have to make sure ervery component in each project is work great and look exactly the same and this repo shows you how.


## folder structure
Inside the apps folder we have a Nuxtjs in app1, a vuejs project in app2 and a shared folder that is containing our design system.
If you take a look at app1/pages/index.vue and app2/src/views/Home.vue you see we are using <connect-btn> component and it is being developed
in shared folder and they look and work exactly the same in both projects.

## about monorepos
A monorepo is a software development strategy where multiple projects or components are stored in a single repository. It provides advantages such as easier code sharing, centralized tooling, and simplified dependency management.

## about learna
Lerna is a tool for managing JavaScript projects with multiple packages. It optimizes workflow by facilitating versioning, publishing, and inter-package dependencies management.

