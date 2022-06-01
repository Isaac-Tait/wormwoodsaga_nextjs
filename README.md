Trying again for the umpteenth millionth time...

https://github.com/alexeagleson/nextjs-fullstack-app-template

## Husky Codes

_build_: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)

_ci_: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)

_docs_: Documentation only changes

_feat_: A new feature

_fix_: A bug fix

_perf_: A code change that improves performance

_refactor_: A code change that neither fixes a bug nor adds a feature

_style_: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)

_test_: Adding missing tests or correcting existing tests

## Someday...

There will be a cool novel here, most likely managed by Ghost CMS and a DAO community created to fund it...

### Chores

- cross-env
  https://www.npmjs.com/package/cross-env
  `yarn add -D cross-env`

This will allow you to log server data in the browser while working in dev mode, making it easier to debug issues.

`package.json`

```json
"dev": "cross-env NODE_OPTIONS='--inspect' next dev",
```

# Helpful Links

https://blog.sycamore.design/nextjs-ghost-cms-jamstack-blog
&&
https://www.jakewiesler.com/blog/ghost-jamstack-memberships
