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

## SSR vs CSR

Basically the way of render of react is CSR(Client Side Rendering). That mean is literally browser is doing rendering.

And rendering is convert react code to html to make sure understanding by browser. So its gonna be CSR when we used `create react app` to create a new project.

So, react have to rendering everything on the browser by client(user) like building UI.

And the first weakness of Client Side Rendering is user just see the empty space at the beginning, after that javascript just did put codes. (Literally can shown UI after downloaded all javascript files)

Oviously that can not working on the browser what disabled javascript by user or somehow and also working not fine when mobile data is weak like inside of elevator or tunnel too

Secone weakness of Client Side Rendering is SEO(Search Engine Optimization)

If someone wanna showup to google or naver everthing, empty page is not a good solution. Because search engine will look at the html. So its would be better some usefull data located inside of html file.

To sum up, the CSR(Client Side Rendering) is all of rendering like building UI everythings happen on the client(user), Client has to load javascript and then that javascript building UI.

In case of `NextJS` automatically doing SSR(Server Side Rendering), So we can see the code inside of html also can running even though disabled javascript on browser.

NextJS will render the application at backend, render all components and take that html, going to give response to browser request.

So, user can not see any empty html page. But remember thing is above work is gonna do by every component. 🔥🔥🔥 That mean is every components are rendered SSR at the beginning even if wrote down `use client` at the top of component.🔥🔥🔥

To sum up, SSR of NextJS is every components and pages are rendered by server side(backend) after that they are gonna be html, and that html gonna give to browser. Even though we wrote down `use client` at the top of files.

### Summary

-   Renderting: Convert javascript code to html to understand by browser side
-   CSR(Client Side Rendering): Rendering by client's browser side after downloaded all javascript files
-   SSR(Server Side Rendering): Rendering by server, literally. And NextJS do that at the beginning about every components and every pages, that is why we can see the UI even though disabled javascript on the browser
