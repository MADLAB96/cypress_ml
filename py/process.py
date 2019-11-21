# Importing the libraries

import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
import json
import os
from pandas.io.json import json_normalize
from pandas import DataFrame as df
from datetime import datetime

linesChangedByCap = { "Low Pri": [0, 0, 0, 0, 0, 10, 20, 20, 30, 30],               # 0 - 30 lines changed
                      "Med Pri": [100, 100, 10, 50, 75, 10, 0, 100, 99, 25],        # 0 - 100 lines changed
                      "High Pri": [200, 250, 300, 350, 400, 450, 500, 550, 600] }   # 200 - 600 lines changed


def replaceSpecTestFields(allSuites, allTests):
    """ Util function to help replace a list of json objs with their ids. Returns array of ids/titles """
    index = 0
    for title, suite in allSuites.iterrows():
        #print('replacing fields in suite:', title)
        testList = []
        suiteList = []
        tempSuite = json_normalize(data=suite['suites'])
        if(tempSuite.empty != True):            
            for i, value in tempSuite['title'].items():
                suiteList.append(value)            
            allSuites.iat[index, 4] = suiteList

        tempTest = json_normalize(data=suite['tests'])
        if(tempTest.empty != True):
            for i, value in tempTest['title'].items():
                testList.append(value)   
            allSuites.iat[index, 5] = testList
        index += 1
        
    return allSuites;
    
def parseSuitesAndTests(spec, title):
    print('parsing suites:', title)
    suiteRP = ['suites']
    testRP = ['tests']
    suites = []
    tests = []
    
    tempSuite = json_normalize(data=spec['suites'])
    tempTest = json_normalize(data=spec['suites'], record_path=testRP)
    
    while(tempSuite.empty != True):
        tempTest['specTitle'] = title
        suites.append(tempSuite)
        tests.append(tempTest)
        tempSuite = json_normalize(data=spec['suites'], record_path=suiteRP)
        tempTest = json_normalize(data=spec['suites'], record_path=testRP)
        suiteRP.append('suites') # doesn't matter where its added
        testRP.insert(0, 'suites') # needs to be before the 'tests'


    allSuites = pd.concat(suites, axis=0)
    allSuites['specTitle'] = title
    
    allTests = pd.concat(tests, axis=0)
    allTests['specTitle'] = title
    
    #return allSuites.set_index('title'), allTests.set_index('title');
    return allSuites, allTests;

# Open a json and make lists of suites and tests (only way I know how to do this)
# Will probably have to come back and add another list, for list of specs
    
def parseSpecs(fileName):
    print('--------- STARTING parsing: ', fileName, '--------- ')
    
    with open(fileName) as f:
        d = json.load(f)
        
    suitesList = []
    testsList = []
    specs = json_normalize(d, ['specs'])
    specs = specs.set_index('title')
    
    # PARSE SPECS
    for title, spec in specs.iterrows():
        parsed_suites, parsed_tests = parseSuitesAndTests(spec, title)
        #print('PARSED SPEC', title, parsed_suites)
        #print('PARSED SPEC', title, parsed_tests)
        suitesList.append(parsed_suites)
        testsList.append(parsed_tests)
    # SAVE PARSED SPECS and TESTS
    allSuites = pd.concat(suitesList, axis=0)
    allTests = pd.concat(testsList, axis=0)
        
    return replaceSpecTestFields(allSuites, allTests), allTests, specs;

def flattenData(runs):
    fullTestList = []
    index = 0
    for run in runs:        
        run[1]['title'] = "run" + str(index) + " -- " + run[1]['title']
        # TODO add more fields to each run
        fullTestList.append(run[1])
        index += 1
        
    ftl = pd.concat(fullTestList)
    ftl = ftl.set_index('title')
    return runs, ftl

def parseRuns(dirPath):
    allRuns = []
    files = []
    # r=root, d=directories, f = files
    for r, d, f in os.walk(dirPath):
        for file in f:
            if '.json' in file:
                files.append(os.path.join(r, file))
    
    for f in files:
        suites, tests, specs = parseSpecs(f)
        allRuns.append([suites, tests, specs])
    
    return flattenData(allRuns)

# this is for the variable explorer
# allSuites, allTests, specs = parseSpecs('run14.json')
# parse all runs in outputData directory
startTime = datetime.now()
runs, ftl = parseRuns('C:/Users/madlab/repos/cypressML/outputData')
ftl.to_csv('large_testlist.csv')
print(datetime.now() - startTime)

totalFailingRuns = 0
totalPassingRuns = 0

totalFailingTests = 0
totalPassingTests = 0

for run in runs:
    specFailCount = []
    specPassCount = []
    specFailCount.append(run[2]['failCount'][0])
    specFailCount.append(run[2]['failCount'][1])
    specFailCount.append(run[2]['failCount'][2])
    
    specPassCount.append(run[2]['passCount'][0])
    specPassCount.append(run[2]['passCount'][1])
    specPassCount.append(run[2]['passCount'][2])
    
    totalFailingTests += sum(specFailCount) 
    totalPassingTests += sum(specPassCount) 
    
    if(sum(specFailCount) > 0):
        totalFailingRuns += 1
    else:
        totalPassingRuns += 1

print('Passing: ', totalPassingRuns, '-- Total Passing Tests', totalPassingTests)
print('Failing: ', totalFailingRuns, '-- Total Failing Tests', totalFailingTests)