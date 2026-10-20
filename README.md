# Gather — Family Movie Night

A small movie and TV recommendation app. Choose a mood, age guidance, format, runtime, and optional genre for watch-night ideas, search a title for similar picks, or browse the catalog by type.

## Run it

Open `index.html` in a modern browser. The app is a static site and needs no package installation, build step, API key, or server.

## How recommendations work

- Recommendations are filtered by the selected age guidance, format, runtime, and genre.
- The remaining titles are ranked by mood and preference matches.
- Search looks up a title in the catalog and shows related picks ranked by explicit franchise/collection links, shared genres, themes, and format.
- Browse pages list all movies, series and shows, animation, anime, or K-dramas. Cards show genre classifications and editorial age guidance.
- Search and similar picks intentionally do not apply the family-age filter; check each title's age guidance before watching together.
- The catalog is a curated starter list in `app.js`; add titles, genres, moods, and `related` group IDs there to expand it.

Age guidance is an editorial estimate, not an official rating. Content ratings differ by country and platform; check the rating and content details available to your family before watching.

## Limitations

This first version uses a small local catalog and does not check streaming availability. Search only returns catalog matches, not results from the entire internet. It has no login, does not collect or store personal information, and preferences are not saved between visits. Titles and recommendations are not endorsements or guarantees of suitability.
