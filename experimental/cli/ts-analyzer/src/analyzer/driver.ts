import neo4j, { Driver } from 'neo4j-driver';

export let driver: Driver | undefined;
export function initNeo4jDriver() {
    if (!driver) {
        driver = neo4j.driver('neo4j://localhost', neo4j.auth.basic('neo4j', 'test'));
    }
    return driver;
}
