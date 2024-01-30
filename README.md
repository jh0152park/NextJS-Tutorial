# NextJS 14 Tutorial

## ✨ How to istall by manually

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

## ✨ How to add new page in NextJS

1. create a new folder inside of app folder, that mean is that folder gonna be page might be
2. create a new `page.tsx` file inside of folder what we created just now to be new page(or route)
3. `export default function` again inside of new `page.tsx` file
4. the most important part is we have to create a new `page.tsx` file when we wanna show new page(not visible, literally can not show anything when `page.tsx` not exist inside of some folder) and also 100% we can create a new folder inside some folder at the same time
    ```
    /app/about-us/company/sales/page.tsx
    above path is gonnna be "localhost:3000/about-us/company/sales/page" url
    ```

## ✨ Not Found Routes

Litreally will be used on all pages.

In addition `page`, `layout`, `not-found` are special namee as reserved words

-   `Link` component from `next/link` literally work as navigation

## ✨ SSR vs CSR

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

## ✨ Hydration🚿💧🚰

Kinda process of matching the javascript and HTML at client side after got rendered boring HTML by server side and javascript files from server

arrived at some page like `/about-us` ➡ user can see boring HTML at the beginning ➡ user happy 🥰 because can see something UI instead of empty HTML ➡ Immediately loading framework ➡ framework initialization done ➡ finally every components are working fine, because boring HTML connected to JS files(React).

_🚿 Hydration is 수분공급, 즉 수분기없이 드라이한 HTML 정적 웹페이지에 물을 주어서 생기있게 만드는 작업이라고 생각하자 🚿_

<div>
<img align="center" src="https://cdn.shopify.com/s/files/1/2185/7175/files/fruit-strawberry-chips-2021-09-03-09-42-55-utc_1_480x480.jpg?v=1687821370" />
</div>

### 🔥 BUT THIS HYEDRATION IS DOSE NOT WORK FOR ALL COMPONENTS, SERVER SIDE RENDERING IS OCCUR FIRST FOR ALL EVERY COMPONENTS, HOWEVER HYDRATED COMPONNETS BY CLIENT SIDE IS(TO MAKE INTERACTIVE AT CLIENT SIDE) ONLY SOME COMPONENTS WHO HAS `use client` KEYWORD AT THE TOP 🔥

## ✨ use client

**`use client` keyword say to `NEXT JS FRAMEWORK` like hey man this component hvae to be interactive in the client, this component need to be hydrated!**

### 💥💥💥 VERY IMPORTANT!!! `use client` DOSE NOT MEAN RENDER ONLY IN THE CLIENT!!! IT MEAN IS RENDERED ON BACKNED AND HYDRATED & INTERACTIVE ON FRONTEND 💥💥💥

Also it is make good performance to user too, Because user does not need to download all javascript files even though do not has any interactive components. That mean is no need to download again except for `use client` component.

## ✨ Layout

A system for recycling components used in many places. Like a `header`, `sidebar`, `search bar`, `etc...`.

Its pretty annoying when we have to copy and paste same component to so many different places🤮

And we can make some special `layout` for specific components or page, Because probably we need to build some different layout for diffrent place of user status. Like `dashboard`, `main page`, `my page`, `etc...`

Obviously that layout applies to subpath too, like `/about-us/company/jobs/sales/page.tsx`

### Layout can nesting!

Then how can We create a new special layout for specific component or page?

```JS
// Lets assume we need to create a new layout for about-us page
// 1. Copy the layout.tsx into about-us folder
// 2. Delete the metadata
// 3. Writedown the some code as below!

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
            This is aboutus page loyout
        </div>
    );
}
```

## ✨ Metadata

Its gonna to show up our `head` of index.html wharever we put it.

And `metadata` is can be merged from so many components, also can export the `metadata` only `page` or `layout`. And should be located in the server component at the same time.

Also we do not need to copy and paste the same metadata if we ussing `template` as below at the root `layout.tsx`

```JS
// app/layout.tsx
export const metadata: Metadata = {
    title: {
        template: "%s | Next Movies",
        default: "Next Movies",
    },
    description: "Generated by Next.js",
};

// app/about-us/layout.tsx
export const metadata = {
    title: "About Us",
};
```

## ✨ Dynamic Routes

Static Route: /movies
Dynamic Route: /movies/123 or /movies/111 like can put something dynamically into the url literally

### ⚠️ what is different thing between `(movies)` and `movies` under app folder ?? ⚠️

We called `route group` for some shape of `(folder name)`. And its dose not affect to our url path.

Let assume we created a new folder like `movies`, its 100% should be a our url like `localhost:3000/movies`.

But definitely dose not have any affect to our url path when we create a new route group folder like `(movies)`. Its just helpful us to more organize and more logical also can avoid write down same code again at the same time.

Because we can create a same `layout` under route group, obviously `page` and `components` too as below.

> app 📁  
> &emsp;ㄴlayout.tsx  
> &emsp;ㄴnot-found.tsx  
> &emsp;ㄴ(marketing) 📁  
> &emsp;&emsp;ㄴlayout.tsx  
> &emsp;&emsp;ㄴabout 📁&emsp;&emsp;→ localhost:3000/about  
> &emsp;&emsp;&emsp;ㄴpage.tsx  
> &emsp;&emsp;ㄴblog 📁&emsp;&emsp;&ensp;→ localhost:3000/blog  
> &emsp;&emsp;&emsp;ㄴpage.tsx  
> &emsp;ㄴ(shop) 📁  
> &emsp;&emsp;ㄴaccount 📁&ensp;&nbsp;→ localhost:3000/account  
> &emsp;&emsp;&emsp;ㄴpage.tsx

### Okay, So how we can make a dynamic url like `localhost:3000/movies/[id]` ??

**Then just do create a folders as below**

`[folder name]` It means is can be located something behind the parent folder path

> app 📁  
> &emsp;ㄴlayout.tsx  
> &emsp;ㄴnot-found.tsx  
> &emsp;ㄴ(movies) 📁  
> &emsp;&emsp;ㄴlayout.tsx  
> &emsp;&emsp;ㄴmovies 📁&emsp;&emsp;→ localhost:3000/movies, But Its 404 error, because dose not have `page.tsx` file  
> &emsp;&emsp;&emsp;ㄴ[id] 📁 &emsp;&emsp;&ensp;→ localhost:3000/movies/[id]  
> &emsp;&emsp;&emsp;&emsp;ㄴpage.tsx

**Then, how can we getting the `movie id`? Just like that**

```JS
export default function MovieDetail(props) {
    console.log(props);
    return <h1>Movies</h1>;
}

```

And we can get a props on the console not a browser like it `{ params: { id: '1233' }, searchParams: {} }`

## ✨ Data Fetching

### How to fetch data without 3rd party or external libraries?

```JS
"use client";

import { useEffect, useState } from "react";

export default function FirstFunction() {
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState();

    async function getMovies() {
        const responst = await fetch(
            "https://nomad-movies.nomadcoders.workers.dev/movies"
        );
        const json = await responst.json();

        setMovies(json);
        setIsLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, []);

    return <div>{isLoading ? "Loading..." : JSON.stringify(movies)}</div>;
}
```

According to above code, fetching is always happened in the client side, that mean is browser sent request to api to get a data.

Therefore, we can not put any should be protected things like `API KEYS`, also can not communicate with DB too. Because anyone can see that in the network tab, so it is so much dangerous😱

That is why we doing just like that `Front App → API → DB → API → Front App`. Also we should be handle the loading status too, because our data was empty at the beginning

**And probably Its would be better what if our NextJS can communicate with DB without API😎**

## How to fetch data in server side?

```JS
export const metadata = {
    title: "Home",
};

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
    return fetch(URL).then((response) => response.json());
}

export default async function Homepage() {
    const movies = await getMovies();
    return <div>{JSON.stringify(movies)}</div>;
}
```

**🔥 SUPER AWESOME 🔥**

We dont need any `useState`, `useEffect`

Also we cant see anything at network tab too, Because dont used API.

Literally fetch data just worked on server(backend) side!

But loading state is still here, but server component remember what we fetched(cached) and that is why so fast to see data when we tried refresh again

## ✨ Loading Component

According to above example`(server side data fetch)` we can know our NextJS framework will gave cahced data, And that is why we can see the data so fast when we tried refresh again.

Also the different thing is between `Client Side Data Fetch` and `Server Side Data Fetch` is the location where user can see the loading state of data fetching.

In case of `Client Side Data Fetch` user can see layout UI and can see the loading state at the screen, However in case of `Server Side Data Fetch` user can not see the any UI before the done data fetching because server still dost not ready to show up UI also can not see loading stathe at the screen too just can see the loading state at the tab of browser

**Then how can we show up our Loading Component to user while backend working so hard?**

**The answer is create a new `loading.tsx` component as below, then automatically user can see the loading component**

_⚠️ The most important thing is the name is has to be `loading.tsx` and has to be located next of `page.tsx` at the same time as below ⚠️_

> app 📁  
> &emsp;ㄴ(home) 📁  
> &emsp;&emsp;ㄴpage.tsx  
> &emsp;&emsp;ㄴloading.tsx

```JS
// app/(home)/page.tsx
export const metadata = {
    title: "Home",
};

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
    await new Promise((resolve) => setTimeout(resolve, 10000));
    return fetch(URL).then((response) => response.json());
}

export default async function Homepage() {
    const movies = await getMovies();
    return <div>{JSON.stringify(movies)}</div>;
}

// app/(home)loadig.tsx
export default function Loading() {
    return <h1>Loading...</h1>;
}
```

**Result as below**

![Alt text](image.png)

-   **Let's organize, Our NextJS will getting data from the backend(server side) using an API**
-   **So we dont need any `useState` or `useEffect` thigns to getting data at the frontend(client side)**
-   **Also user cant see the network work like communicate with API at the netwrok tab on ther browser too**
-   **And NextJS automatically shown to user our loading UI when we if created the `loading.tsx` file while backend working hard to get a data**
-   **At the last momment, NextJS also will replace autometaically `loading.tsx` to `page.tsx` component when backend worked done**

## ✨ Parallel Requests

Literally doing many fetch at the same time

This code will be fetched sequentially not a parallel. That mean is `getVideos` function will be called after done `getMovie` function worked

```JS
export default async function MovieDetail({
    params: { id },
}: {
    params: { id: string };
}) {
    const movie = await getMovie(id);
    const videos = await getVideos(id);
    return <h1>{movie.title}</h1>;
}
```

So, instead of doing abovie thing we will use `Promise.all`. If we using `Promise.all` then will await `getMovie` and `getVideos` both function.

**Here is a simple example**

```JS
export default async function MovieDetail({
    params: { id },
}: {
    params: { id: string };
}) {
    const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
    return <h1>{movie.title}</h1>;
}
```

## ✨ Suspense

Honestly, `suspense` is not a NextJS feature its part of `React`. However its also sooo cool

According to previous example as below, There is have something problem

The problem is our UI is can not be rendered before worked done of both fetch functions

```JS
export default async function MovieDetail({
    params: { id },
}: {
    params: { id: string };
}) {
    const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
    return <h1>{movie.title}</h1>;
}
```

So, we gonna separate above fetch functions and just shown to user when got ready each other function

1. Separate and create a single working component
2. Just call all of diffrent functions in the single component(page.tsx)
3. Wrap the fetch single component by `Suspense` component from `React`
4. Just shown automatically each after down data fetch

**Here is a simple example**

```JS
// app/components/movie-info.tsx
import { API_URL } from "../app/(home)/page";

export async function getMovie(id: string) {
    return fetch(`${API_URL}/${id}`).then((response) => response.json());
}

export default async function MovieInfo({ id }: { id: string }) {
    const movie = await getMovie(id);
    return <h5>{JSON.stringify(movie)}</h5>;
}

// app/components/movie-videos.tsx
import { API_URL } from "../app/(home)/page";

export async function getVideos(id: string) {
    return fetch(`${API_URL}/${id}/videos`).then((response) => response.json());
}

export default async function MovieVideos({ id }: { id: string }) {
    const videos = await getVideos(id);
    return <h5>{JSON.stringify(videos)}</h5>;
}

// app/(movies)/movies/[id]/page.tsx
import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export default async function MovieDetail({
    params: { id },
}: {
    params: { id: string };
}) {
    return (
        <div>
            <Suspense fallback={<h1>Loading movie info</h1>}>
                <MovieInfo id={id} />
            </Suspense>

            <Suspense fallback={<h1>Loading movie video</h1>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    );
}
```

### So, we do not need to wait for render our components after done all of fetch functions. Just automatically shown loading component and shown component after loading done

### And we can shown our UI immediately to screen without `loading.tsx` because dont has any `async` things in the `page.tsx`. At the same time we can shwon and explain to user which specific part is should be a loading status of screen

## ✨ Error Handling

How can we handle the error what if occurred something error while we fetching data?

Maybe its fine if one single page dose not working well by somehow, But Its unacceptable broken, destroyed, exploded whole application by one single error

So, we gonna created a new `error.tsx` file next to `page.tsx` file as below,

> app 📁  
> &emsp;ㄴ(movies) 📁  
> &emsp;&emsp;ㄴlayout.tsx  
> &emsp;&emsp;ㄴmovies 📁&emsp;&emsp;  
> &emsp;&emsp;&emsp;ㄴ[id] 📁 &emsp;&emsp;&ensp;  
> &emsp;&emsp;&emsp;&emsp;ㄴpage.tsx  
> &emsp;&emsp;&emsp;&emsp;loading.tsx  
> &emsp;&emsp;&emsp;&emsp;ㄴerror.tsx

Dont forget the name of file has to be `error.tsx` but the name of component is dose not matter

Also write down `use client` at the top too, And keep it mind the `error.tsx` file just protect only `/movies/[id]` component

**error.tsx**

```JS
"use client";

export default function Error() {
    return <h1>Something Broken</h1>;
}
```
