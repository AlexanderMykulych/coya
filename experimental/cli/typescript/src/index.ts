#!/usr/bin/env node
import figlet from "figlet";
import picocolor from "picocolors";
import { program } from "commander";
import { Options } from "./types";


console.log(picocolor.green(figlet.textSync("Coya TS")));

const opt = program
    .version('0.0.1')
    .description("Coya CLI for diagram generation")
    .option('-p, --path <path>', 'Project path')
    .parse(process.argv)
    .opts<Options>();

console.log(opt.path);