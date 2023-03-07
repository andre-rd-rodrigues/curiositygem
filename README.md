# Curiosty Gem 📚

Blog website that aims to spark curiosity in readers by providing a wide range of interesting and thought-provoking content.

## Environments

This project has 2 environments, represented in 2 branches: `dev` and `prod - main`.

### dev

- posts fetching - API served by **docker**

### prod (main)

- posts fetching - **Hygraph** API (GraphQL)

## Development

In order to develop new features, you need to:

##### 1. Create new branch from **dev**

##### 2. Make the changes and merge with **dev**

##### 3. Compare manually or do `git cherry-pick commit` into **main**

## New articles

In order to add new content you need to:

##### 1. Add new content in **Hygraph**

##### 2. Run `npm run build` in **main**

##### 3. Commit and push

## Deployment

After following the previous steps, you can run the following command to send the changes to production:
`npm run deploy`

## Website

https://curiositygem.com
