// 12. Write a JavaScript function to parse an URL.

let parseURL = (url) => {
    try {
        let parsedUrl = new URL(url);
        return {
            href: parsedUrl.href,
            protocol: parsedUrl.protocol,
            host: parsedUrl.host,
            hostname: parsedUrl.hostname,
            port: parsedUrl.port,
            pathname: parsedUrl.pathname,
            search: parsedUrl.search,
            searchParams: parsedUrl.searchParams,
            hash: parsedUrl.hash
        };
    } catch (error) {
        console.error("Invalid URL: ", error);
        return null;
    }
};

const url = 'https://www.example.com:8080/path/name?query=string#hash';
console.log(parseURL(url));