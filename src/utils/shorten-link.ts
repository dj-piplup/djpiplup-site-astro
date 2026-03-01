export function shortenLink(href: string): string {
    const url = new URL(href);
    if(isMyFigureCollectionItem(url)) {
        return url.pathname.split('/').at(-1)!;
    }
    return 'Link'
}

function isMyFigureCollectionItem(url: URL): boolean {
    return url.hostname === 'myfigurecollection.net';
}