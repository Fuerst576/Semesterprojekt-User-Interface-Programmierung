import { e as createComponent, r as renderTemplate, m as maybeRenderHead, k as renderComponent, f as createAstro, h as addAttribute, n as renderHead, o as renderSlot, l as renderScript } from './astro/server_C4A4bdU4.mjs';
import 'piccolore';
import 'clsx';
/* empty css                          */
import { a as attr, e as escape_html, b as bind_props } from './_@astro-renderers_D2FXYBo7.mjs';
/* empty css                          */

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$ThemeIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", `<button id="themeToggle" aria-label="Toggle theme" data-astro-cid-oemx5le4> <svg aria-hidden="true" width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-astro-cid-oemx5le4> <path class="sun" fill-rule="evenodd" d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 1.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm12-7a.8.8 0 0 1-.8.8h-2.4a.8.8 0 0 1 0-1.6h2.4a.8.8 0 0 1 .8.8zM4 12a.8.8 0 0 1-.8.8H.8a.8.8 0 0 1 0-1.6h2.5a.8.8 0 0 1 .8.8zm16.5-8.5a.8.8 0 0 1 0 1l-1.8 1.8a.8.8 0 0 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM6.3 17.7a.8.8 0 0 1 0 1l-1.7 1.8a.8.8 0 1 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM12 0a.8.8 0 0 1 .8.8v2.5a.8.8 0 0 1-1.6 0V.8A.8.8 0 0 1 12 0zm0 20a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-1.6 0v-2.4a.8.8 0 0 1 .8-.8zM3.5 3.5a.8.8 0 0 1 1 0l1.8 1.8a.8.8 0 1 1-1 1L3.5 4.6a.8.8 0 0 1 0-1zm14.2 14.2a.8.8 0 0 1 1 0l1.8 1.7a.8.8 0 0 1-1 1l-1.8-1.7a.8.8 0 0 1 0-1z" data-astro-cid-oemx5le4></path> <path class="moon" fill-rule="evenodd" d="M16.5 6A10.5 10.5 0 0 1 4.7 16.4 8.5 8.5 0 1 0 16.4 4.7l.1 1.3zm-1.7-2a9 9 0 0 1 .2 2 9 9 0 0 1-11 8.8 9.4 9.4 0 0 1-.8-.3c-.4 0-.8.3-.7.7a10 10 0 0 0 .3.8 10 10 0 0 0 9.2 6 10 10 0 0 0 4-19.2 9.7 9.7 0 0 0-.9-.3c-.3-.1-.7.3-.6.7a9 9 0 0 1 .3.8z" data-astro-cid-oemx5le4></path> </svg> </button>  <script>
    const theme = (() => {
        const localStorageTheme = localStorage?.getItem("theme") ?? '';
        if (['dark', 'light'].includes(localStorageTheme)) {
            return localStorageTheme;
        }
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    })();

    if (theme === 'light') {
        document.documentElement.classList.remove('dark');
    } else {
        document.documentElement.classList.add('dark');
    }

    window.localStorage.setItem('theme', theme);

    const handleToggleClick = () => {
        const element = document.documentElement;
        element.classList.toggle("dark");

        const isDark = element.classList.contains("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
    }

    document.getElementById("themeToggle")?.addEventListener("click", handleToggleClick);
<\/script>`])), maybeRenderHead());
}, "/Users/lukasfuerst/Downloads/uip_semesterprojekt/uip_semesterprojekt/src/components/ThemeIcon.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<div id="main-menu" class="nav-links" data-astro-cid-pux6a34n> <!-- <a href="/"><img src="../img/logo.png"/></a>--> <a href="/" data-astro-cid-pux6a34n>Startseite</a> <a href="/favoriten" data-astro-cid-pux6a34n>Favoriten</a> <button id="logout" data-astro-cid-pux6a34n>Logout</button> <div id="theme" data-astro-cid-pux6a34n> ', ` </div> </div> <script type="module">
    if (typeof window !== 'undefined') {
        const username = localStorage.getItem('username');
        const logoutBtn = document.getElementById('logout');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => {
                localStorage.removeItem('token');
                localStorage.removeItem('username');
                window.location.href = '/login';
            });
        }
    }
<\/script> `])), maybeRenderHead(), renderComponent($$result, "ThemeIcon", $$ThemeIcon, { "data-astro-cid-pux6a34n": true }));
}, "/Users/lukasfuerst/Downloads/uip_semesterprojekt/uip_semesterprojekt/src/components/Navigation.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header> <nav> ${renderComponent($$result, "Navigation", $$Navigation, {})} </nav> </header>`;
}, "/Users/lukasfuerst/Downloads/uip_semesterprojekt/uip_semesterprojekt/src/components/Header.astro", void 0);

function Social($$renderer, $$props) {
	let platform = $$props['platform'];
	let username = $$props['username'];

	$$renderer.push(`<a id="social"${attr('href', `https://www.${platform}.com/${username}`)}>${escape_html(platform)}</a>`);
	bind_props($$props, { platform, username });
}

function Footer($$renderer) {
	$$renderer.push(`<footer id="main-menu" class="nav-links svelte-1sr6y3t"><a href="#">Impressum</a> <a href="#">Datenschutz</a> <a href="#">AGB</a> `);
	Social($$renderer, { platform: 'YouTube', username: '@jf_drgo3589' });
	$$renderer.push(`<!----> <a href="/gelernt">Bootsfahrschule</a></footer>`);
}

const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { pageTitle } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <div class="content"> <h1>${pageTitle}</h1> ${renderSlot($$result, $$slots["default"])} </div> ${renderComponent($$result, "Footer", Footer, {})} ${renderScript($$result, "/Users/lukasfuerst/Downloads/uip_semesterprojekt/uip_semesterprojekt/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "/Users/lukasfuerst/Downloads/uip_semesterprojekt/uip_semesterprojekt/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
