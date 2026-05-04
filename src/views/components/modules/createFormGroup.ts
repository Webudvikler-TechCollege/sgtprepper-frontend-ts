import { createElement, createInput, createLabel } from "../atoms/index.js"

// Opretter en form-gruppe (label + input)
export const createFormGroup = (
    label: string,
    type: string,
    name: string,
    placeholder: string,
    value: unknown
): HTMLElement => {
    // Wrapper div til spacing
    const div = createElement('div', 'mb-4')

    // Opretter label (forbundet med input via name/id)
    const labelElm = createLabel(label, name, 'mr-4 w-[120px] inline-block')

    // Opretter input felt
    const input = createInput(type, name, placeholder, value, 'border border-gray-300 rounded px-3 py-2 w-[400px]]')

    // Samler label og input i div
    div.append(labelElm, input)

    return div
}