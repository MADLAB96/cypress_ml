export class Spec {
    public title: string;
    public passCount: number;
    public failCount: number;
    public pendCount: number;
    public duration: number;
    public capabilities: string[];
    public suites: Suite[];

    constructor() {
        this.title = "";
        this.passCount = 0;
        this.failCount = 0;
        this.pendCount = 0;
        this.duration = 0;
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
            duration: this.duration,
            capabilities: this.capabilities,
            suites: suitesList,
        }
    }

    public count(): void {

    }
}

export class Suite {
    public title: string;
    public passCount: number;
    public failCount: number;
    public pendCount: number;
    public duration: number;
    public capabilities: string[];
    public tests: Test[];
    public suites: Suite[];

    constructor() {
        this.title = "";
        this.passCount = 0;
        this.failCount = 0;
        this.pendCount = 0;
        this.duration = 0;
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
            duration: this.duration,
            capabilities: this.capabilities,
            suites: suitesList,
        }
    }

    public count(): void {

    }

    public generate(baseSuite: any): void {
        this.title = baseSuite.title;

        console.log(`\t\tGenerating from ${baseSuite.suites.length} base suites`);
        baseSuite.suites.forEach((bs: any) => {
            let suite = new Suite();
            suite.generate(bs);
            this.suites.push(suite);
        });

        console.log(`\t\tGenerating from ${baseSuite.tests.length} base tests`);
        baseSuite.tests.forEach((bt: any) => {
            let test = new Test();
            test.generate(bt);
            this.tests.push(test);
        });
    }
}

export class Test {
    public title: string;
    public status: string;
    public message: string;
    public duration: number;
    public capabilities: string[];

    constructor() {
        this.title = "";
        this.status = "";
        this.message = "";
        this.duration = 0;
        this.capabilities = [];
    }

    // output the formated json
    // should be called after all fields have been populated.
    public format(): any {
        return {
            title: this.title,
            status: this.status,
            message: this.message,
            duration: this.duration,
            capabilities: this.capabilities,
        }
    }

    public count(): void {

    }

    public generate(baseTest: any): void {
        this.title = baseTest.title;
        this.status = 'passed';
        this.message = 'SUCCESS';
        this.duration = 1000;
        this.capabilities = baseTest.cap;
    }
}