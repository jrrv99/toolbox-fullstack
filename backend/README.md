# Backend

## :rocket: Quick Start

### Install

```bash
npm i
yarn
pnpm i
```

## Run Server

The next steps will run the server at 

### Development

```bash
npm run dev
```

#### With yarn
```bash
yarn dev
```
#### With pnpm
```bash
pnpm dev
```

> This will initialize server at [localhost:3001](http://localhost:3001) and watch for changes.

### Normally

```bash
npm start
```

#### With yarn
```bash
yarn start
```
#### With pnpm
```bash
pnpm start
```
> This will just run server at [localhost:3001](http://localhost:3001).

## API

### Endpoints

```http
/GET /files/data
```

> Returns all the files data

| query param | type | description |
| :- | :- | :- |
| `fileName` | `string` | specific file name |

> Returns the data from the file specified in the queryParam