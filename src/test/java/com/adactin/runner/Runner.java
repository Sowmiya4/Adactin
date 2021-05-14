package com.adactin.runner;

import java.io.IOException;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.adactin.helper.FileReaderManager;
import com.github.mkolisnyk.cucumber.runner.ExtendedCucumberOptions;
import com.maven.org.Adactin_4PM.BaseClass;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@ExtendedCucumberOptions(retryCount = 4)
@CucumberOptions(features = "src\\test\\java\\com\\adactin\\feature",
					glue = "com\\adactin\\stepdefinition",
					monochrome = true,
					dryRun = false,
					strict = true,
					//tags = {"~@Login"}
					plugin = {//"com.cucumber.listener.ExtentCucumberFormatter:Report2//CucumberExtentReport.html"
							//"pretty",
							//"html:Report",
							//"json:JsonReport//Json.txt"
							"rerun:Report3/FailedScenario.txt"
							}
					
				)

public class Runner {

	public static WebDriver driver;

	@BeforeClass
	public static void setUp() throws IOException {

		String browser = FileReaderManager.getInstance().getCrInstance().getBrowser();
		driver = BaseClass.browserLaunch(browser);
	}

	@AfterClass
	public static void tearDown() {

		driver.quit();
	}

}
