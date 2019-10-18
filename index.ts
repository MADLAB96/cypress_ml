import fs = require('fs');

import { constants, dataFormat } from './constants';
import * as classes from './classes';

function main() {
    console.log('==============STARTING==============');
    generate();
    console.log('===============ENDING===============');
}

function generate() {
    let genObj: any = {};

    // INIT OutputObject
    genObj.title = dataFormat.title;
    genObj.specs = [];
    genObj.duration = 0;
    genObj.runid = 1;
    genObj.sourceBranch = "source";
    genObj.destinationBranch = "dev";

    genObj.specs = generateSpecs();

    fs.writeFileSync('test.json', JSON.stringify(genObj));

    return genObj;
}

function generateSpecs(): any[] {
    let specsList: any[] = [];

    console.log(`Generating from ${dataFormat.specs.length} base specs`);
    dataFormat.specs.forEach(baseSpec => {
        let spec = new classes.Spec();
        let suiteList: any[] = [];

        // Set the static data
        spec.title = baseSpec.title;
        spec.capabilities = baseSpec.caps;
    
        console.log(`\tGenerating from ${baseSpec.suites.length} base suites`);

        baseSpec.suites.forEach(baseSuite => {
            // Set the static data of new Suite object
            let suite = new classes.Suite();
            suite.generate(baseSuite);
            suiteList.push(suite);
        });
        spec.suites = suiteList;
        specsList.push(spec);
    });

    return specsList;
}

main();