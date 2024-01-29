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

1. create a new folder inside of app folder, that mean is that folder gonna be page might be
2. create a new `page.tsx` file inside of folder what we created just now to be new page(or route)
3. `export default function` again inside of new `page.tsx` file
4. the most important part is we have to create a new `page.tsx` file when we wanna show new page(not visible, literally can not show anything when `page.tsx` not exist inside of some folder) and also 100% we can create a new folder inside some folder at the same time
    ```
    /app/about-us/company/sales/page.tsx
    above path is gonnna be "localhost:3000/about-us/company/sales/page" url
    ```

## Not Found Routes

Litreally will be used on all pages.

In addition `page`, `layout`, `not-found` are special namee as reserved words

-   `Link` component from `next/link` literally work as navigation
