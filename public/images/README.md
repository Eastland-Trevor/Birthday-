# Add your pictures

Put your image files in this folder. JPG, PNG, and WebP are supported.

In `src/main.jsx`, set `heroImage` to the hero photo path, for example:

```js
const heroImage = "/images/mama-hero.jpg";
```

For gallery photos, set the `image` field on an item in the `memories` array:

```js
{ title: "A favourite screenshot", hint: "A little moment worth keeping.", image: "/images/chat.png" },
```

Leave an image path as an empty string (`""`) to keep that spot as a placeholder. The files in this folder are included when you deploy the site, so visitors can see them too.
