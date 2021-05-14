package com.adactin.stepdefinition;

import org.openqa.selenium.WebDriver;

import com.adactin.helper.FileReaderManager;
import com.adactin.helper.PageObjectManager;
import com.adactin.pom.LoginPage;
import com.adactin.runner.Runner;
import com.maven.org.Adactin_4PM.BaseClass;

import cucumber.api.java.en.*;
import junit.framework.Assert;

public class LoginStepDefinition extends BaseClass {

	public static WebDriver driver = Runner.driver;

	PageObjectManager pom = new PageObjectManager(driver);

	@Given("^User launch url of adactin application$")
	public void user_launch_url_of_adactin_application() throws Throwable {

		String url = FileReaderManager.getInstance().getCrInstance().getUrl();
		getUrl(url);
	}

	@When("^User enter \"([^\"]*)\" as username$")
	public void user_enter_as_username(String arg1) throws Throwable {
		inputOnElement(pom.getLp().getUsername(), arg1);

	}

	@When("^User enter \"([^\"]*)\" as password$")
	public void user_enter_as_password(String arg1) throws Throwable {

		inputOnElement(pom.getLp().getPassword(), arg1);
	}

	@When("^User click login button$")
	public void user_click_login_button() throws Throwable {

		clickOnElement(pom.getLp().getLogin());
	}

	@Then("^User checks valid username and valid Password$")
	public void user_checks_valid_username_and_valid_Password() throws Throwable {

		Assert.assertEquals("ABC", "abc");
	}
}
