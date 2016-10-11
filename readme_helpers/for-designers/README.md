- [For Designers](#fordesigners)
- [Step 1](#step1)
- [Step 2](#step2)
- [Step 3](#step3)
- [SCSS Structure](#structure)
- [SCSS Summary](#scsssummary)
- [Sprite](https://github.com/douglasdeodato/lovelycss/blob/master/readme_helpers/for-designers/SPRITE.md)

## For Designers:

## Step 1:

If you are using Windows we full recommend you to install git-bash to make your life easy:

git-bash
https://git-scm.com/downloads

If you are using Mac OS or Linux, just use Terminal


## Step 2 : Installing Dependencies

After install git-bash  you need install the Dependencies bellow:

## Dependencies
Ruby https://www.ruby-lang.org/

sass http://sass-lang.com/

grunt http://gruntjs.com/

node https://nodejs.org/en/


Now you have all dependecies to run a modern and great web system from scratch .


## Step 3:

## Installing lovely-css
Before you install lovelycss check if you have all dependencies above, enter in the folder lovelycss and run that commands bellow:


**npm install**

that is it now you have a fresh and complete web project to start from scratch


## All your scss files will be in : sass folder

we are using sass for better performance and organization of css , you don't need to worry about compile this , you can just use a simple command to compress your sass files in a just css file:

that is the command:

**grunt sass**

after run this command all of your sass files will be compiled in a just css file:
```html
<link rel="stylesheet" href="public/stylesheets/lovelycss.dist.css">
```


That file will be in: public/stylesheets


## Grunt Sass
we have 2 css files compiled by grunt sass:

lovelycss.dev.css  for development so you can see the line and the name of file for debug.

lovelycss.dist.css  for distribution when you finish your App.



### SCSS Structure

```
├── scss/
│   ├── core/
│   ├── helpers/
│   ├── modules/
│   ├── pages/
│   ├── vendor/
```


## Summary SCSS

core/

all media queries, typography, base, main

helpers/

colors, buttons, clearfix, mixins, main, etc...

modules/

header, footer, content, menu, main, etc...

pages/

index, login, main, etc..

vendor/

vendors ...



## Creator

**Douglas Deodato**

- <http://douglasdeodato.com>
- <https://github.com/douglasdeodato>