export function writeStyles(styleMap: Record<string, Record<string, string | number>>, wrapTags: boolean = true): string {
    const styleString = Object.entries(styleMap).map(([s, r]) => `${s} {${Object.entries(r).map(([k, v]) => `${k}: ${v};`).join('')}}`).join('\n');
    return wrapTags ? `<style>${styleString}</style>` : styleString;
}