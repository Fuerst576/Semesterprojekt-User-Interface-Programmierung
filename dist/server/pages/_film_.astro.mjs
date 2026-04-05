import { e as createComponent, f as createAstro, r as renderTemplate, h as addAttribute, m as maybeRenderHead, k as renderComponent, l as renderScript } from '../chunks/astro/server_C4A4bdU4.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_LFlA_MV5.mjs';
import 'clsx';
/* empty css                                  */
export { r as renderers } from '../chunks/_@astro-renderers_D2FXYBo7.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$FavoritenSwitch = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FavoritenSwitch;
  const { filmId } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<button id="favoriteToggle" aria-label="Favorit"', ' title="Favorit" data-astro-cid-fg3nmwmu> <svg aria-hidden="true" width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-astro-cid-fg3nmwmu> <path class="favorit-filled" fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42\n        4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0\n        3.78-3.4 6.86-8.55 11.54L12 21.35z" data-astro-cid-fg3nmwmu></path> <path class="favorit-outline" fill="none" stroke="currentColor" stroke-width="2" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42\n              4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3\n              19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" data-astro-cid-fg3nmwmu></path> </svg> </button>  <script>\n    (async () => {\n        const btn = document.getElementById("favoriteToggle");\n        if (!btn) return;\n\n        const filmId = btn.dataset.filmid;\n        const API = "https://mt241022-10927.node.ustp.cloud/saved-films";\n        const token = localStorage.getItem("token");\n\n        if (!token) {\n            btn.title = "Bitte einloggen, um Favoriten zu nutzen";\n            btn.disabled = true;\n            return;\n        }\n\n        // Status initial laden\n        const res = await fetch(API, { headers: { "Authorization": `Bearer ${token}` } });\n        const saved = await res.json();\n        const entry = saved.find(s => String(s.film_id) === String(filmId));\n        if (entry) btn.classList.add("is-saved"), btn.dataset.savedid = entry.id;\n\n// Klick umschalten\n        btn.addEventListener("click", async () => {\n            const method = btn.classList.contains("is-saved") ? "DELETE" : "POST";\n\n            const res = await fetch(`${API}/${filmId}`, {\n                method,\n                headers: { "Authorization": `Bearer ${token}` }\n            });\n\n            if (res.ok) {\n                btn.classList.toggle("is-saved");\n            }\n        });\n\n    })();\n<\/script>'], ["", '<button id="favoriteToggle" aria-label="Favorit"', ' title="Favorit" data-astro-cid-fg3nmwmu> <svg aria-hidden="true" width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-astro-cid-fg3nmwmu> <path class="favorit-filled" fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42\n        4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0\n        3.78-3.4 6.86-8.55 11.54L12 21.35z" data-astro-cid-fg3nmwmu></path> <path class="favorit-outline" fill="none" stroke="currentColor" stroke-width="2" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42\n              4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3\n              19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" data-astro-cid-fg3nmwmu></path> </svg> </button>  <script>\n    (async () => {\n        const btn = document.getElementById("favoriteToggle");\n        if (!btn) return;\n\n        const filmId = btn.dataset.filmid;\n        const API = "https://mt241022-10927.node.ustp.cloud/saved-films";\n        const token = localStorage.getItem("token");\n\n        if (!token) {\n            btn.title = "Bitte einloggen, um Favoriten zu nutzen";\n            btn.disabled = true;\n            return;\n        }\n\n        // Status initial laden\n        const res = await fetch(API, { headers: { "Authorization": \\`Bearer \\${token}\\` } });\n        const saved = await res.json();\n        const entry = saved.find(s => String(s.film_id) === String(filmId));\n        if (entry) btn.classList.add("is-saved"), btn.dataset.savedid = entry.id;\n\n// Klick umschalten\n        btn.addEventListener("click", async () => {\n            const method = btn.classList.contains("is-saved") ? "DELETE" : "POST";\n\n            const res = await fetch(\\`\\${API}/\\${filmId}\\`, {\n                method,\n                headers: { "Authorization": \\`Bearer \\${token}\\` }\n            });\n\n            if (res.ok) {\n                btn.classList.toggle("is-saved");\n            }\n        });\n\n    })();\n<\/script>'])), maybeRenderHead(), addAttribute(filmId, "data-filmid"));
}, "/Users/lukasfuerst/Downloads/uip_semesterprojekt/uip_semesterprojekt/src/components/FavoritenSwitch.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$film = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$film;
  const { film } = Astro2.params;
  const res = await fetch(`https://mt241022-10927.node.ustp.cloud/films/${film}`);
  const films = await res.json();
  const resreviews = await fetch(`https://mt241022-10927.node.ustp.cloud/reviews/film/${film}`);
  const reviews = await resreviews.json();
  const pageTitle = films.title;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div style="display: flex; align-items: center; gap: 20px;width: 100%;"> <h1>${pageTitle}</h1> ${renderComponent($$result2, "Favoriten", $$FavoritenSwitch, { "filmId": films.id })} </div> <p>${films.description}</p> <form id="kommentarhinzufügen"> <input type="hidden"${addAttribute(films.id, "value")} id="filmid"> <label for="contant">Kommentar:</label><br> <input type="text" id="contant"><br> <button type="submit" style="margin-top: 10px">Kommentar hinzufügen</button> </form> <ul id="reviewlist"> ${reviews.map((review) => renderTemplate`<li class="reviewlist-item"${addAttribute(review.user_id, "data-review-userid")}> <hr> <h3>${review.username}: </h3> <p>${review.content}</p> <form class="bearbeiten"${addAttribute(review.id, "data-reviewid")}${addAttribute(films.id, "data-userid")} hidden> <label>Kommentar bearbeiten:</label><br> <input type="text" class="kommentarbearbeiten"${addAttribute(review.content, "value")}><br> <button type="submit">Bearbeiten</button> </form> <form class="loschen"${addAttribute(review.id, "data-reviewid")} hidden> <button type="submit">Löschen</button> </form> </li>`)} </ul> ` })} ${renderScript($$result, "/Users/lukasfuerst/Downloads/uip_semesterprojekt/uip_semesterprojekt/src/pages/[film].astro?astro&type=script&index=0&lang.ts")} ${renderScript($$result, "/Users/lukasfuerst/Downloads/uip_semesterprojekt/uip_semesterprojekt/src/pages/[film].astro?astro&type=script&index=1&lang.ts")} ${renderScript($$result, "/Users/lukasfuerst/Downloads/uip_semesterprojekt/uip_semesterprojekt/src/pages/[film].astro?astro&type=script&index=2&lang.ts")} ${renderScript($$result, "/Users/lukasfuerst/Downloads/uip_semesterprojekt/uip_semesterprojekt/src/pages/[film].astro?astro&type=script&index=3&lang.ts")}`;
}, "/Users/lukasfuerst/Downloads/uip_semesterprojekt/uip_semesterprojekt/src/pages/[film].astro", void 0);

const $$file = "/Users/lukasfuerst/Downloads/uip_semesterprojekt/uip_semesterprojekt/src/pages/[film].astro";
const $$url = "/[film]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$film,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
