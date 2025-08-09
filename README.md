# GitHub Profile Explorer

A simple web app to search for GitHub users and view their profile details.

## Features

- Search for any GitHub username
- View profile info: avatar, name, bio, location, company, website, join date
- See public repo, follower, and following counts
- Responsive design using Tailwind CSS
- Dark mode toggle

## Visual Overview

```mermaid
flowchart TD
    A0["User Search Workflow
"]
    A1["GitHub API Integration
"]
    A2["Profile Data Rendering
"]
    A3["Interactive UI Feedback
"]
    A4["Dynamic DOM Updates
"]
    A5["Application Theming
"]
    A0 -- "Invokes API" --> A1
    A0 -- "Controls feedback" --> A3
    A0 -- "Triggers display" --> A2
    A2 -- "Performs updates" --> A4
    A3 -- "Modifies elements" --> A4
    A5 -- "Applies styles" --> A4
```

## Usage

1. Clone or download this repository.
2. Open [`GithubProfileChecker/index.html`](GithubProfileChecker/index.html) in your browser.
3. Enter a GitHub username and click "Search".

## Project Structure

- [`index.html`](GithubProfileChecker/index.html): Main HTML file
- [`style.css`](GithubProfileChecker/style.css): Custom styles
- [`script.js`](GithubProfileChecker/script.js): App logic

## Dependencies

- [Tailwind CSS CDN](https://cdn.tailwindcss.com) 
