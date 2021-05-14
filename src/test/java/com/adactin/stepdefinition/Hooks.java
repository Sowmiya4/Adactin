package com.adactin.stepdefinition;

import java.io.IOException;

import com.maven.org.Adactin_4PM.BaseClass;

import cucumber.api.Scenario;
import cucumber.api.java.*;

public class Hooks extends BaseClass{
	
	@Before("@Login")
	public static void beforeHooks(Scenario scenario) {

		System.out.println(scenario.getName());
	}

	@After("@Login")
	public static void afterHooks(Scenario scenario) throws IOException {

		System.out.println(scenario.getStatus());
		
		if (scenario.isFailed()) {
			screenSht("FailedScenario");
		}
	}
}
