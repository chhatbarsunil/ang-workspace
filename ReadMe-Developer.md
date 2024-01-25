## Create Angular Workspace
ng new ang-workspace --create-application false

## Mono Repo Pattern Link:
https://kgotgit.medium.com/monorepo-pattern-setting-up-angular-workspace-for-multiple-applications-in-one-single-repository-4e14bc0d0cc0

## Generate Application
ng g application beehive-RGB --routing --style=scss

## Library
  ng generate library tools
  ng generate component my-component --style=scss --project=tools
  ng generate service tool --project=tools
  Link: https://octoperf.com/blog/2019/08/22/kraken-angular-workspace-multi-application-project/#create-a-shared-service

