import fs = require('fs');

import { constants, dataFormat } from './constants';
import * as classes from './classes';

function main() {
    console.log('==============STARTING==============');
    console.log('started in env:' + process.env.NODE_ENV);
    if(process.argv.length === 2) {
        generate('test.json');
    } else if(process.argv.length === 3) {
        for (let i = 0; i < parseInt(process.argv[2]); i++) {
            generate(`run${i}.json`);
        }
    } else {
        console.error('Bad commandline args');
        process.exit();
    }
    console.log('===============ENDING===============');
}

function generate(fileName: string) {
    let genObj: any = {};

    // INIT OutputObject
    genObj.title = dataFormat.title;
    genObj.specs = [];
    genObj.runid = 1;
    genObj.sourceBranch = "source";
    genObj.destinationBranch = "dev";

    genObj.specs = generateSpecs();

    fs.writeFileSync('./outputData/' + fileName, JSON.stringify(genObj));

    return genObj;
}

function generateSpecs(): any[] {
    let specsList: any[] = [];

    if(process.env.NODE_ENV && process.env.NODE_ENV.trim() === 'dev') console.log(`Generating from ${dataFormat.specs.length} base specs`);
    dataFormat.specs.forEach(baseSpec => {
        let spec = new classes.Spec();
        let suiteList: any[] = [];

        // Set the static data
        spec.title = baseSpec.title;
        spec.capabilities = baseSpec.caps;
    
        if(process.env.NODE_ENV && process.env.NODE_ENV.trim() === 'dev') console.log(`\tGenerating from ${baseSpec.suites.length} base suites`);

        baseSpec.suites.forEach(baseSuite => {
            // Set the static data of new Suite object
            let suite = new classes.Suite();
            suite.generate(baseSuite);
            suiteList.push(suite);
        });
        spec.suites = suiteList;
        spec.count();
        specsList.push(spec);
    });

    convertToCVS(specsList);
    return specsList;
}

function convertToCVS(specsList: any[]) {

}

main();