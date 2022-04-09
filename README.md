# NPM package starter

Starter for NPM package with TypeScript setup ready to publish 🤌

### Why?

I create a lot of NPM packages and I wanted to have my setup in one place.
It was also important for me to separate the types in the 'types' folder 
so that code inside and outside the package can use the same interface.
Unfortunately this is normally made difficult by transpiler which throws empty type files
and messes up directory structure, so to make it possible here is my tweaked
version of configuration, enjoy!

## Commands

Build project for prod (runs automatically before publish)

```bash
npm run build-prod
```

Watch files in dev env

```bash
npm run watch
```

## IMPORTANT 
remember to change the name and version in `package.json` to your package name and version!
