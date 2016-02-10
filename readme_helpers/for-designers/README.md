- [For Designers](#fordesigners)
- [Step 1](#step1)
- [Step 2](#step2)
- [Step 3](#step3)
- [SASS Structure](#structure)
- [SASS Summary](#sasssummary)
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

bower http://bower.io/


Now you have all dependecies to run a modern and great web system from scratch .


## Step 3:

## Installing lovely-css
Before you install lovelycss check if you have all dependencies above, enter in the folder lovelycss and run that commands bellow:

**bower install**

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

lovelycss.development.css  for development so you can see the line and the name of file for debug.

lovelycss.dist.css  for distribution when you finish your App.




### SASS Structure

```
├── scss/
│   ├── core/
│   ├── helpers/
│   ├── modules/
│   ├── pages/
│   ├── vendor/
```


## Summary Sass

core/

all media queries, typography, base, core-dir

helpers/

colors, buttons, clearfix, mixins, etc...

modules/

header, footer, content, menu, etc...

pages/

index, login, etc..

vendor/

vendors ...



## Creator

**Douglas Deodato**

- <http://douglasdeodato.com>
- <https://github.com/douglasdeodato>