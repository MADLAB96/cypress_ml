export const constants = {
    // Just constant names for capabilities 
    // Noone will care what these are, might be easier to read them if they're real names though
    caps: [
        "Low Pri",
        "Med Pri",
        "High Pri",
    ],
    // How often a test or suite will fail.
    // Will be used to seed the test data (to simulate some randomness)
    //  - Would like the ability to replace these with commandline argument
    //  - can add a custom one later if needed
    //  - Coming back through to fine tune this,
    //      - even 20 seems to be too high
    //      - if i have 500 runs, how many should have a failing test?
    //          - 10%? 20%?

    freq: {
        always: 100,
        high: 80,
        med: 50,
        low: 20,
        low10: 10,
        low5 : 5,
        lowest: 1,
        never: 0
    },
}

export const dataFormat = {
    title: 'Base',
    specs: [
        {
            title: 'Landing',
            caps: [ constants.caps[0], constants.caps[2] ],
            suites: [
                {
                    title: 'Landing Suite 1',
                    caps: [ constants.caps[0] ],
                    tests: [
                        { title: 'Landing Suite 1 || Test 1 || never', freq: constants.freq.never, caps: [ constants.caps[0] ] },
                        { title: 'Landing Suite 1 || Test 2 || never', freq: constants.freq.never, caps: [ constants.caps[0] ] },
                        { title: 'Landing Suite 1 || Test 3 || never', freq: constants.freq.never, caps: [ constants.caps[0] ] },
                        { title: 'Landing Suite 1 || Test 4 || never', freq: constants.freq.never, caps: [ constants.caps[0] ] },
                        { title: 'Landing Suite 1 || Test 5 || never', freq: constants.freq.never, caps: [ constants.caps[0] ] }
                    ], 
                    suites: [
                        {
                            title: 'Landing Suite 1 || Suite 1',
                            caps: [ constants.caps[2] ],
                            tests: [
                                { title: 'Landing Suite 1 || Suite 1 || Test 1 || lowest', freq: constants.freq.lowest, caps: [ constants.caps[2] ] },
                                { title: 'Landing Suite 1 || Suite 1 || Test 2 || lowest', freq: constants.freq.lowest, caps: [ constants.caps[2] ] },
                                { title: 'Landing Suite 1 || Suite 1 || Test 3 || lowest', freq: constants.freq.lowest, caps: [ constants.caps[2] ] },
                                { title: 'Landing Suite 1 || Suite 1 || Test 4 || lowest', freq: constants.freq.lowest, caps: [ constants.caps[2] ]},
                                { title: 'Landing Suite 1 || Suite 1 || Test 5 || lowest', freq: constants.freq.lowest, caps: [ constants.caps[2] ] }
                            ],
                            suites: []
                        }
                    ]
                },
                {
                    title: 'Landing Suite 2',
                    caps: [ constants.caps[0], constants.caps[1] ],
                    tests: [
                        { title: 'Landing Suite 1 || Test 1 || never', freq: constants.freq.never, caps: [ constants.caps[0] ] },
                        { title: 'Landing Suite 1 || Test 2 || never', freq: constants.freq.never, caps: [ constants.caps[0] ] },
                        { title: 'Landing Suite 1 || Test 3 || never', freq: constants.freq.never, caps: [ constants.caps[0] ] },
                        { title: 'Landing Suite 1 || Test 4 || lowest', freq: constants.freq.lowest, caps: [ constants.caps[1] ]},
                        { title: 'Landing Suite 1 || Test 5 || never', freq: constants.freq.never, caps: [ constants.caps[0] ] }
                    ],
                    suites: []
                }
            ]
        },
        {
            title: 'Form',
            caps: [ constants.caps[0], constants.caps[2] ],
            suites: [
                {
                    title: 'Form Suite 1',
                    caps: [ constants.caps[0] ],
                    tests: [
                        { title: 'Form Suite 1 || Test 1 || never', freq: constants.freq.never, caps: [ constants.caps[0] ] },
                        { title: 'Form Suite 1 || Test 2 || never', freq: constants.freq.never, caps: [ constants.caps[0] ] },
                        { title: 'Form Suite 1 || Test 3 || never', freq: constants.freq.never, caps: [ constants.caps[0] ] },
                        { title: 'Form Suite 1 || Test 4 || never', freq: constants.freq.never, caps: [ constants.caps[0] ] },
                        { title: 'Form Suite 1 || Test 5 || never', freq: constants.freq.never, caps: [ constants.caps[0] ] }
                    ], 
                    suites: [
                        {
                            title: 'Form Suite 1 || Suite 1',
                            caps: [ constants.caps[0] ],
                            tests: [
                                { title: 'Form Suite 1 || Suite 1 || Test 1 || never', freq: constants.freq.never, caps: [ constants.caps[0] ] },
                                { title: 'Form Suite 1 || Suite 1 || Test 2 || never', freq: constants.freq.never, caps: [ constants.caps[0] ] },
                                { title: 'Form Suite 1 || Suite 1 || Test 3 || never', freq: constants.freq.never, caps: [ constants.caps[0] ] },
                                { title: 'Form Suite 1 || Suite 1 || Test 4 || never', freq: constants.freq.never, caps: [ constants.caps[0] ] },
                                { title: 'Form Suite 1 || Suite 1 || Test 5 || never', freq: constants.freq.never, caps: [ constants.caps[0] ] }
                            ],
                            suites: []
                        }
                    ]
                },
                {
                    title: 'Form Suite 2',
                    caps: [ constants.caps[2] ],
                    tests: [
                        { title: 'Form Suite 1 || Test 1 || lowest', freq: constants.freq.lowest, caps: [ constants.caps[2] ] },
                        { title: 'Form Suite 1 || Test 2 || lowest', freq: constants.freq.lowest, caps: [ constants.caps[2] ] },
                        { title: 'Form Suite 1 || Test 3 || lowest', freq: constants.freq.lowest, caps: [ constants.caps[2] ] },
                        { title: 'Form Suite 1 || Test 4 || lowest', freq: constants.freq.lowest, caps: [ constants.caps[2] ] },
                        { title: 'Form Suite 1 || Test 5 || lowest', freq: constants.freq.lowest, caps: [ constants.caps[2] ] }
                    ],
                    suites: []
                }
            ]
        },
        {
            title: 'Deep1',
            caps: [ constants.caps[0] ],
            suites: [
                {
                    title: 'Deep1 Suite 1',
                    caps: [ constants.caps[0] ],
                    tests: [
                        { title: 'Deep1 Suite 1 || Test 1 || never', freq: constants.freq.never, caps: [ constants.caps[0] ] },
                        { title: 'Deep1 Suite 1 || Test 2 || never', freq: constants.freq.never, caps: [ constants.caps[0] ] },
                        { title: 'Deep1 Suite 1 || Test 3 || never', freq: constants.freq.never, caps: [ constants.caps[0] ] },
                        { title: 'Deep1 Suite 1 || Test 4 || never', freq: constants.freq.never, caps: [ constants.caps[0] ] },
                        { title: 'Deep1 Suite 1 || Test 5 || never', freq: constants.freq.never, caps: [ constants.caps[0] ] }
                    ], 
                    suites: [
                        {
                            title: 'Deep1 Suite 1 || Suite 1',
                            caps: [ constants.caps[0], constants.caps[1] ],
                            tests: [
                                { title: 'Deep1 Suite 1 || Suite 1 || Test 1 || never', freq: constants.freq.never, caps: [ constants.caps[0] ] },
                                { title: 'Deep1 Suite 1 || Suite 1 || Test 2 || never', freq: constants.freq.never, caps: [ constants.caps[0] ] },
                                { title: 'Deep1 Suite 1 || Suite 1 || Test 3 || low5', freq: constants.freq.low5, caps: [ constants.caps[1] ] },
                                { title: 'Deep1 Suite 1 || Suite 1 || Test 4 || never', freq: constants.freq.never, caps: [ constants.caps[0] ] },
                                { title: 'Deep1 Suite 1 || Suite 1 || Test 5 || never', freq: constants.freq.never, caps: [ constants.caps[0] ] }
                            ],
                            suites: []
                        }
                    ]
                },
                {
                    title: 'Deep1 Suite 2',
                    caps: [ constants.caps[0], constants.caps[1] ],
                    tests: [
                        { title: 'Deep1 Suite 1 || Test 1 || never', freq: constants.freq.never, caps: [ constants.caps[0] ] },
                        { title: 'Deep1 Suite 1 || Test 2 || never', freq: constants.freq.never, caps: [ constants.caps[0] ] },
                        { title: 'Deep1 Suite 1 || Test 3 || never', freq: constants.freq.never, caps: [ constants.caps[0] ] },
                        { title: 'Deep1 Suite 1 || Test 4 || never', freq: constants.freq.never, caps: [ constants.caps[0] ] },
                        { title: 'Deep1 Suite 1 || Test 5 || low5', freq: constants.freq.low5, caps: [ constants.caps[1] ] }
                    ],
                    suites: [
                        {
                            title: 'Deep1 Suite 1 || Suite 1',
                            caps: [ constants.caps[0] ],
                            tests: [],
                            suites: [
                                {
                                    title: 'Deep1 Suite 1 || Suite 1 || Suite 1',
                                    caps: [ constants.caps[0] ],
                                    tests: [
                                        { title: 'Deep1 Suite 1 || Suite 1 || Suite 1 || Test 1 || never', freq: constants.freq.never, caps: [ constants.caps[0] ] },
                                        { title: 'Deep1 Suite 1 || Suite 1 || Suite 1 || Test 2 || never', freq: constants.freq.never, caps: [ constants.caps[0] ] },
                                        { title: 'Deep1 Suite 1 || Suite 1 || Suite 1 || Test 3 || never', freq: constants.freq.never, caps: [ constants.caps[0] ] },
                                        { title: 'Deep1 Suite 1 || Suite 1 || Suite 1 || Test 4 || never', freq: constants.freq.never, caps: [ constants.caps[0] ] },
                                        { title: 'Deep1 Suite 1 || Suite 1 || Suite 1 || Test 5 || never', freq: constants.freq.never, caps: [ constants.caps[0] ] }
                                    ],
                                    suites: []
                                },
                                {
                                    title: 'Deep1 Suite 1 || Suite 1 || Suite 2',
                                    caps: [ constants.caps[0] ],
                                    tests: [
                                        { title: 'Deep1 Suite 1 || Suite 1 || Suite 2 || Test 1 || never', freq: constants.freq.never, caps: [ constants.caps[0] ] },
                                        { title: 'Deep1 Suite 1 || Suite 1 || Suite 2 || Test 2 || never', freq: constants.freq.never, caps: [ constants.caps[0] ] },
                                        { title: 'Deep1 Suite 1 || Suite 1 || Suite 2 || Test 3 || never', freq: constants.freq.never, caps: [ constants.caps[0] ] },
                                        { title: 'Deep1 Suite 1 || Suite 1 || Suite 2 || Test 4 || never', freq: constants.freq.never, caps: [ constants.caps[0] ] },
                                        { title: 'Deep1 Suite 1 || Suite 1 || Suite 2 || Test 5 || never', freq: constants.freq.never, caps: [ constants.caps[0] ] }
                                    ],
                                    suites: []
                                },
                                {
                                    title: 'Deep1 Suite 1 || Suite 1 || Suite 3',
                                    caps: [ constants.caps[0] ],
                                    tests: [
                                        { title: 'Deep1 Suite 1 || Suite 1 || Suite 3 || Test 1 || never', freq: constants.freq.never, caps: [ constants.caps[0] ] },
                                        { title: 'Deep1 Suite 1 || Suite 1 || Suite 3 || Test 2 || never', freq: constants.freq.never, caps: [ constants.caps[0] ] },
                                        { title: 'Deep1 Suite 1 || Suite 1 || Suite 3 || Test 3 || low5', freq: constants.freq.low5, caps: [ constants.caps[0] ] },
                                        { title: 'Deep1 Suite 1 || Suite 1 || Suite 3 || Test 4 || never', freq: constants.freq.never, caps: [ constants.caps[0] ] },
                                        { title: 'Deep1 Suite 1 || Suite 1 || Suite 3 || Test 5 || never', freq: constants.freq.never, caps: [ constants.caps[0] ] }
                                    ],
                                    suites: [
                                        {
                                            title: 'Deep1 Suite 1 || Suite 1 || Suite 3 || Suite 1',
                                            caps: [ constants.caps[2] ],
                                            tests: [
                                                { title: 'Deep1 Suite 1 || Suite 1 || Suite 3 || Suite 1 || Test 1 || low10', freq: constants.freq.low10, caps: [ constants.caps[2] ] },
                                            ],
                                            suites: []
                                        }
                                    ]
                                }
                            ]        
                        }
                    ]
                }
            ]
        }
    ]
}