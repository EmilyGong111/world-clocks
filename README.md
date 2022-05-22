# World Clock

## Getting Started

### Create app
Use vite
Docs:https://vitejs.dev/guide/#trying-vite-online
```bash
$ npm create vite@latest
```
### Install dependencies

```bash
$ npm i
```

### config
https://vitejs.dev/config/

### Start the server

```bash
$ npm start
```

Open [http://localhost:9901/](http://localhost:9901/) with your browser to see the result.

You can start editing the page by modifying `src/main.tsx`. The page auto-updates as you edit the file.

## flow
src/main.jsx <- src/App.jsx <- clock component <- pointer component

## dev flow

main.jsx : initialize global style
    App.jsx : wrap all the components as a container, and style the container
    clock : build clock component
    pointer : build pointer component
        ClockPointer
        ClockCenter
        HourPointer
        MinutePointer
        SecondPointer
