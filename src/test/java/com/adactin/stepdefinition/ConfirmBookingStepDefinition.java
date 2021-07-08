package com.adactin.stepdefinition;

import org.openqa.selenium.WebDriver;

import com.adactin.base.Base_Class;
import com.adactin.property.PageObjectManager;
import com.adactin.runner.AdactinRunner;

import cucumber.api.java.en.*;

public class ConfirmBookingStepDefinition extends Base_Class {

	
	public static WebDriver driver = AdactinRunner.driver;
	
	PageObjectManager pom = new PageObjectManager(driver);

	@When("^user click myitinerary$")
	public void user_click_myitinerary() throws Throwable {
	 
		click(pom.getConfirmBooking().getMyitinerary());
	}

	@Then("^user validate the confirmation of hotel booking$")
	public void user_validate_the_confirmation_of_hotel_booking() throws Throwable {
	   
	    
}

}