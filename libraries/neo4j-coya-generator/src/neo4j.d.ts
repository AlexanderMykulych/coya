
declare module 'neo4j-driver/lib/browser/neo4j-web.min.js' {
    import type forExport from 'neo4j-driver';
    const neo4j: typeof forExport;
    export default neo4j;
}
