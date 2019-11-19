export class Spec {
    public title: string;
    public passCount: number;
    public failCount: number;
    public pendCount: number;
    public capabilities: string[];
    public suites: Suite[];

    constructor() {
        this.title = "";
        this.passCount = 0;
        this.failCount = 0;
        this.pendCount = 0;
        this.capabilities = [];
        this.suites = [];
    }

    // output the formated json
    // should be called after all fields have been populated.
    public format(): any {
        let suitesList: any[] = [];

        this.suites.forEach(suite => {
            let suiteObj = suite.format();
            suitesList.push(suiteObj);
        });

        return {
            title: this.title,
            passCount: this.passCount,
            failCount: this.failCount,
            pendCount: this.pendCount,
            capabilities: this.capabilities,
            suites: suitesList,
        }
    }

    public count(): void {
        let pass = 0;
        let fail = 0;
        this.suites.forEach(suite => {
            pass += suite.passCount;
            fail += suite.failCount;
        });

        this.passCount = pass;
        this.failCount = fail;
    }
}

export class Suite {
    public title: string;
    public passCount: number;
    public failCount: number;
    public pendCount: number;
    public capabilities: string[];
    public tests: Test[];
    public suites: Suite[];

    constructor() {
        this.title = "";
        this.passCount = 0;
        this.failCount = 0;
        this.pendCount = 0;
        this.capabilities = [];
        this.tests = [];
        this.suites = [];
    }

    // output the formated json
    // should be called after all fields have been populated.
    public format(): any {
        let suitesList: any[] = [];
        let testsList: any[] = [];
    
        this.suites.forEach(suite => {
            let suiteObj = suite.format();
            suitesList.push(suiteObj);
        });

        this.tests.forEach(test => {
            let testObj = test.format();
            testsList.push(testObj);
        });

        return {
            title: this.title,
            passCount: this.passCount,
            failCount: this.failCount,
            pendCount: this.pendCount,
            capabilities: this.capabilities,
            suites: suitesList,
        }
    }

    public count(): void {
        let pass = 0;
        let fail = 0;
        this.tests.forEach(test => {
            if(test.status === 'passed') pass++;
            if(test.status === 'failed') fail++;
        });

        this.passCount = pass;
        this.failCount = fail;
    }

    public generate(baseSuite: any): void {
        this.title = baseSuite.title;
        this.capabilities = baseSuite.caps;
        if(process.env.NODE_ENV && process.env.NODE_ENV.trim() === 'dev') console.log(`\t\tGenerating from ${baseSuite.suites.length} base suites`);
        baseSuite.suites.forEach((bs: any) => {
            let suite = new Suite();
            suite.generate(bs);
            this.suites.push(suite);
        });

        if(process.env.NODE_ENV && process.env.NODE_ENV.trim() === 'dev') console.log(`\t\tGenerating from ${baseSuite.tests.length} base tests`);
        baseSuite.tests.forEach((bt: any) => {
            let test = new Test();
            test.generate(bt);
            this.tests.push(test);
        });
        
        this.count();
    }
}

export class Test {
    public title: string;
    public status: string;
    public capabilities: string[];

    constructor() {
        this.title = "";
        this.status = "";
        this.capabilities = [];
    }

    // output the formated json
    // should be called after all fields have been populated.
    public format(): any {
        return {
            title: this.title,
            status: this.status,
            capabilities: this.capabilities,
        }
    }

    private calcPass(seed: number): void {
        let randomNum = Math.floor(Math.random() * 100);
        if(randomNum < seed) {
            //passed
            this.status = 'failed';
            if(process.env.NODE_ENV && process.env.NODE_ENV.trim() === 'dev') console.log(`\t\t\ttest failed ${seed} - ${randomNum}`)
        } else {
            //fail
            this.status = 'passed';
            if(process.env.NODE_ENV && process.env.NODE_ENV.trim() === 'dev') console.log(`\t\t\ttest passed ${seed} - ${randomNum}`)
        }
    }

    public generate(baseTest: any): void {
        this.title = baseTest.title;
        this.calcPass(baseTest.freq);
        this.capabilities = baseTest.caps;
    }
}