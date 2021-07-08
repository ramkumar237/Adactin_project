package com.adactin.runner;




import java.util.concurrent.TimeUnit;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.adactin.base.Base_Class;
import com.adactin.property.FileReaderManager;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(features = {"src\\test\\java\\com\\adactin\\feature\\Adactin.feature",
							"src\\test\\java\\com\\adactin\\feature\\Adactin2.feature"}, glue = "com\\adactin\\stepdefinition", monochrome = true,
				plugin = {"pretty",
						   "com.cucumber.listener.ExtentCucumberFormatter:target/ExtentReport.html",
						   "json:target/jsonreport.json",
						   "html:target/htmlreport"})

public class AdactinRunner {

	
	public static WebDriver driver;
	
	@BeforeClass
	public static void launchBrowser() throws Throwable {
		
		
		String browser = FileReaderManager.getInstanceFRM().getInstanceCR().getBrowser();
		
		driver = Base_Class.browserLaunch(browser);
		Base_Class.wait("implicit", 10, TimeUnit.SECONDS, null);
		
	}
	
	
	@AfterClass
	public static void closeBrowser() {

		Base_Class.quit();

	}

	
}
