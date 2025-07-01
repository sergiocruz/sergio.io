---
title: 'Consume private libraries from GitHub Packages using npm or yarn'
description:
  'Step-by-step guide to consuming private JavaScript libraries from GitHub
  Packages Registry using npm or yarn. Learn how to set up authentication and
  configure your projects.'
date: 2020-12-20
tags: ['github-packages', 'npm', 'yarn', 'private-packages', 'javascript']
readingTime: '6 min read'
slug: 'consuming-private-libraries-from-github-packages'
---

The first time I tried consuming a private JavaScript library from the
[GitHub Packages Registry](https://docs.github.com/en/free-pro-team@latest/packages/quickstart),
I had to navigate through a handful of webpages and wrangle a bunch of
information together before I was able to run a simple npm or yarn install.
That's why I'm excited to put all the information you need in a simple-to-follow
article. Please note that this article assumes you're running an unix operating
system.

Here's an overview of the steps we're covering:

1. Create a personal access token on GitHub
1. Add an npm registry resolver to your local environment
1. Add a file to the repository that will be consuming the private package
1. Start consuming your packages

Before we can start consuming private packages, the registry needs to know who
you are each time you try to access it. That's why we'll start by creating a
personal access token on GitHub. Your system will use it each time it needs to
access the GitHub Packages Registry to install libraries.

## Create a personal access token on GitHub

Start by creating a
[personal token on GitHub](https://github.com/settings/tokens/new):

1. For the `Note` field, put down "GitHub Packages" as the description, so we'll
   know what we used this token for in the future
1. Under `Select scopes`, select the `repo` option: _(checking the `repo` scope,
   should automatically check all the options under it:)_
   - `repo:status`
   - `repo_deployment`
   - `public_repo`
   - `repo:invite`
   - `security_events`
   - `read:packages`

1. Hit the "Generate Token" button
1. Copy the newly generated token onto your clipboard, as we're going to use it
   shortly

## Add an npm registry resolver to your local environment

We're going to authenticate you into the GitHub Packages Registry by using your
GitHub username and the Personal Access Token you just created as the password.
To do so, pull up your Terminal and follow these steps:

- Run `npm login --registry=https://npm.pkg.github.com` and enter these options:
  - **Username**: Enter your GitHub username
  - **Password**: Paste the Personal Access Token you previously created
  - **Email**: Enter an email address associated with your GitHub account

Now npm will know how to forward your authentication credentials to the GitHub
Packages Registry every time we try to access it. That way GitHub Packages will
know who you are and what packages you have access to.

## Configure package consumption

Let's create a new file at the root of your project called `.npmrc`. This file
will instruct npm (or yarn) to pull packages directly from the GitHub Packages
Registry. Below is an example of what your file should look like:

```shell
# File location: `~/some-directory/your-project/.npmrc`
# Registry for the @my-org scope
@my-org:registry=https://npm.pkg.github.com/
```

Now any libraries you add via `npm` or `yarn` that use the `@my-org` scope will
be installed directly from the GitHub Packages Registry.

### A little background on package scopes

The GitHub Packages Registry requires library authors to follow a few
conventions when publishing packages. Understanding those conventions will add
some color to how we're configuring your development environment.

When publishing a package to the GitHub Packages Registry, package names must
live [under a package scope](https://docs.npmjs.com/cli/v6/using-npm/scope). If
you're interested in examples of scoped JavaScript packages, you need to look no
further than Angular projects. If you look at
[any projects that use Angular](https://github.com/sergiocruz/ng-karaoke/blob/master/package.json#L17),
you'll notice that the names of the dependencies that Angular brings in have a
scope (aka namespace, or a vendor prefix) of `@angular`, such as
`@angular/core`, or `@angular/router`.

The scope that library authors must use can be either their GitHub usernames, or
their GitHub organization's name, such as `@sergiocruz/library-name`, or
`@my-org/library-name`.

### Global npm configuration instead of project-level configuration

It's my personal preference to configure package consumption by project, thereby
adding an `.npmrc` file to each of my projects that will consume private
libraries from the GitHub Packages Registry.

I prefer project-level configuration over a global npm configuration for the
same reasons why I prefer to use scoped variables instead of global variables
when writing JavaScript. Some folks coined this concept as the
[Strictness Principle: Restrict the scope of what you do. Increase the scope as the need arises](https://medium.com/@fagnerbrack/the-strictness-principle-9997e483cafb).
I feel similarly about configuration, it's easier to spot mistakes when they're
scoped to a single project. It is possible, however, to configure npm globally
to consume scoped packages from the GitHub Packages Registry, if that's what you
prefer to do.

You should already have an npm configuration file under your user's home
directory, namely `~/.npmrc`. Add the same lines mentioned above for the
per-project configuration:

```shell
# File location: ~/.npmrc
# Registry for the @my-org scope
@my-org:registry=https://npm.pkg.github.com/
```

Now every time you install any packages under the `@my-org` scope anywhere on
your machine, npm will know to fetch those packages from the GitHub Packages
Registry.

## Start consuming your packages

After configuring your work environment, you'll be able to follow the same steps
you usually do to install any packages.

Pull up your terminal and run:

```shell
npm install @my-org/package-name --save
```

If you prefer to use `yarn`, all the previous steps we followed should work
seamlessly for it.

```shell
yarn add @my-org/package-name
```

If you'd like a deeper dive into GitHub Packages, I would suggest browsing
through their documentation to learn more about
[how to configure npm for use with GitHub Packages](https://docs.github.com/en/free-pro-team@latest/packages/guides/configuring-npm-for-use-with-github-packages),
among other use cases.

I hope this a helpful resource as you get a good handle on how to consume
private npm libraries using GitHub Packages. Please feel free to reach out to
me, preferrably via [Twitter](https://twitter.com/hashtagserg), if you think
this guide is missing any key information.
