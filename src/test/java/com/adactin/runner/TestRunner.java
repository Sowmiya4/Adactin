package com.adactin.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "@Report3/FailedScenario.txt", 
					glue = "com\\adactin\\stepdefinition", 
					monochrome = true, 
					dryRun = false, 
					strict = true,
					//tags = {"~@Login"}
					plugin = { // "com.cucumber.listener.ExtentCucumberFormatter:Report2//CucumberExtentReport.html"
					// "pretty",
					// "html:Report",
					// "json:JsonReport//Json.txt"
				"rerun:Report3/FailedScenario.txt" }

)
public class TestRunner {

}
