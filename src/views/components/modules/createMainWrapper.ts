import { createHeading, createElement } from "../atoms/index.ts";

// Opretter wrapper til sider (title + meta + layout)
export const createMainWrapper = (
    title: string, 
    description: string
): HTMLElement => {
    // Sætter sidens titel
    document.title = title;

    // Finder eksisterende meta description
    let meta = document.querySelector('meta[name="description"]');

    // Hvis den ikke findes, opretter vi den
    if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'description')
        meta.setAttribute('content', description)
        document.head.appendChild(meta);
    }

    // Opretter section container
    const section = createElement('section', 'mb-3');

    // Opretter heading
    const h1 = createHeading(1, title, 'font-bold text-2xl mb-2');
    section.append(h1);

    // Opretter beskrivelse (teaser)
    if (description) {
        const teaser = createElement('p');
        teaser.textContent = description
        section.append(teaser);
    }

    return section;
}