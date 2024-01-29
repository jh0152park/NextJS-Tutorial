# NextJS 14 Tutorial

## How to istall by manually

1. `npm init -y` then created `package.json` immediately
2. fixed `ISC` to `MIT` about license of package.json file by just in case
    ```
    "license": "MIT"
    ```
3. `npm install react@latest next@latest react-dom@latest`
4. fixed scripts command to `"dev": "next dev"`
5. 🔥 NextJS should be try to find out a `page`, and that file have to be located inside of `app` folder 🔥 Also its mandatory and necessary `page.tsx or page.js are good`
6. export some component at `page.tsx` also NextJS try to installed TS immediately if I trying to use TS at the same time.
    ```
    export default function FirstFunction() {
        return <h1>Hello NextJS</h1>;
    }
    ```
7. run `npm run dev` command

## How to add new page in NextJS
