export const constants = {
    // Just constant names for capabilities 
    // Noone will care what these are, might be easier to read them if they're real names though
    caps: [
        "Random",
        "Important",
        "Low Pri",
        "Med Pri",
        "High Pri",
    ],
    // How often a test or suite will fail.
    // Will be used to seed the test data (to simulate some randomness)
    //  - Would like the ability to replace these with commandline argument
    //  - can add a custom one later if needed
    freq: {
        always: 100,
        high: 80,
        med: 50,
        low: 20,
        never: 0
    },
}

export const dataFormat = {
    title: 'Base',
    specs: [
        {
            title: 'Landing',
            caps: [ constants.caps[2], constants.caps[4]],
            suites: [
                {
                    title: 'Landing Suite 1',
                    cap: constants.caps[2],
                    tests: [
                        { title: 'Landing Suite 1 || Test 1 || always', freq: constants.freq.always, cap: constants.caps[2] },
                        { title: 'Landing Suite 1 || Test 2 || high', freq: constants.freq.high, cap: constants.caps[2] },
                        { title: 'Landing Suite 1 || Test 3 || med', freq: constants.freq.med, cap: constants.caps[2] },
                        { title: 'Landing Suite 1 || Test 4 || low', freq: constants.freq.low, cap: constants.caps[2]},
                        { title: 'Landing Suite 1 || Test 5 || never', freq: constants.freq.never, cap: constants.caps[2] }
                    ], 
                    suites: [
                        {
                            title: 'Landing Suite 1 || Suite 1',
                            cap: constants.caps[2],
                            tests: [
                                { title: 'Landing Suite 1 || Suite 1 || Test 1 || always', freq: constants.freq.always, cap: constants.caps[2] },
                                { title: 'Landing Suite 1 || Suite 1 || Test 2 || high', freq: constants.freq.high, cap: constants.caps[2] },
                                { title: 'Landing Suite 1 || Suite 1 || Test 3 || med', freq: constants.freq.med, cap: constants.caps[2] },
                                { title: 'Landing Suite 1 || Suite 1 || Test 4 || low', freq: constants.freq.low, cap: constants.caps[2]},
                                { title: 'Landing Suite 1 || Suite 1 || Test 5 || never', freq: constants.freq.never, cap: constants.caps[2] }
                            ],
                            suites: []
                        }
                    ]
                },
                {
                    title: 'Landing Suite 2',
                    cap: constants.caps[4],
                    tests: [
                        { title: 'Landing Suite 1 || Test 1 || always', freq: constants.freq.always, cap: constants.caps[4] },
                        { title: 'Landing Suite 1 || Test 2 || high', freq: constants.freq.high, cap: constants.caps[4] },
                        { title: 'Landing Suite 1 || Test 3 || med', freq: constants.freq.med, cap: constants.caps[4] },
                        { title: 'Landing Suite 1 || Test 4 || low', freq: constants.freq.low, cap: constants.caps[4]},
                        { title: 'Landing Suite 1 || Test 5 || never', freq: constants.freq.never, cap: constants.caps[4] }
                    ],
                    suites: []
                }
            ]
        },
        {
            title: 'Form',
            caps: [ constants.caps[2], constants.caps[4] ],
            suites: [
                {
                    title: 'Form Suite 1',
                    cap: constants.caps[2],
                    tests: [
                        { title: 'Form Suite 1 || Test 1 || always', freq: constants.freq.always, cap: constants.caps[2] },
                        { title: 'Form Suite 1 || Test 2 || always', freq: constants.freq.always, cap: constants.caps[2] },
                        { title: 'Form Suite 1 || Test 3 || always', freq: constants.freq.always, cap: constants.caps[2] },
                        { title: 'Form Suite 1 || Test 4 || always', freq: constants.freq.always, cap: constants.caps[2]},
                        { title: 'Form Suite 1 || Test 5 || always', freq: constants.freq.always, cap: constants.caps[2] }
                    ], 
                    suites: [
                        {
                            title: 'Form Suite 1 || Suite 1',
                            cap: constants.caps[2],
                            tests: [
                                { title: 'Form Suite 1 || Suite 1 || Test 1 || never', freq: constants.freq.never, cap: constants.caps[2] },
                                { title: 'Form Suite 1 || Suite 1 || Test 2 || never', freq: constants.freq.never, cap: constants.caps[2] },
                                { title: 'Form Suite 1 || Suite 1 || Test 3 || never', freq: constants.freq.never, cap: constants.caps[2] },
                                { title: 'Form Suite 1 || Suite 1 || Test 4 || never', freq: constants.freq.never, cap: constants.caps[2]},
                                { title: 'Form Suite 1 || Suite 1 || Test 5 || never', freq: constants.freq.never, cap: constants.caps[2] }
                            ],
                            suites: []
                        }
                    ]
                },
                {
                    title: 'Form Suite 2',
                    cap: constants.caps[4],
                    tests: [
                        { title: 'Form Suite 1 || Test 1 || low', freq: constants.freq.low, cap: constants.caps[4] },
                        { title: 'Form Suite 1 || Test 2 || low', freq: constants.freq.low, cap: constants.caps[4] },
                        { title: 'Form Suite 1 || Test 3 || low', freq: constants.freq.low, cap: constants.caps[4] },
                        { title: 'Form Suite 1 || Test 4 || low', freq: constants.freq.low, cap: constants.caps[4] },
                        { title: 'Form Suite 1 || Test 5 || low', freq: constants.freq.low, cap: constants.caps[4] }
                    ],
                    suites: []
                }
            ]
        }

    ]
}