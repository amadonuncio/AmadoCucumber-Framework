package steps;

import org.junit.Assert;
import org.openqa.selenium.support.PageFactory;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.AccountsPage;
import pages.DashboardPage;
import pages.LoginPage;
import pages.TestBase;

public class NewAccountStepsDefinition extends TestBase {
	LoginPage loginPage;
	DashboardPage dashboardPage;
	AccountsPage accountsPage;
	@Before
	public void beforeRun() {
		init();
		loginPage = PageFactory.initElements(driver, LoginPage.class);
		dashboardPage = PageFactory.initElements(driver, DashboardPage.class);
		accountsPage = PageFactory.initElements(driver, AccountsPage.class);
		}

	@Given("^User is on techfios login page$")
	public void user_is_on_techfios_login_page() {
		driver.get("https://www.techfios.com/billing/?ng=admin");
	}

	@When("^User enters username as \"([^\"]*)\"$")
	public void user_enters_username_as(String username) {
		loginPage.enterUsername(username);
	}

	@When("^User enters password as \"([^\"]*)\"$")
	public void user_enters_password_as(String password) {
		loginPage.enterPassword(password);
	}

	@When("^User clicks signin button$")
	public void user_clicks_signin_button() {
		loginPage.clickSignInButton();
	}

	@Then("^User should land on dashboard page$")
	public void user_should_land_on_dashboard_page() {
		Assert.assertEquals("Dashboard- iBilling", loginPage.getPageTitle());
	}

	@And("^User clicks Bank&Cash button$")
	public void user_clicks_Bank_Cash_button() {
		dashboardPage.clickBankAndCashButton();
	}

	@When("^User clicks New Account button$")
	public void user_clicks_New_Account_button() {
		dashboardPage.clickNewAccountButton();
	}

	@Then("^User enters Account Title as \"([^\"]*)\"$")
	public void user_enters_Account_Title_as(String AccountTitle) {
		accountsPage.enterAccountTitle(AccountTitle + randNum());
	}

	@Then("^User enters Description as \"([^\"]*)\"$")
	public void user_enters_Description_as(String Description) {
		accountsPage.enterDescription(Description);
	}

	@Then("^User enters Initial Balance as \"([^\"]*)\"$")
	public void user_enters_Initial_Balance_as(int InitialBalance) {
		accountsPage.enterInitialBalance(InitialBalance);
	}

	@Then("^User enters Account Number as \"([^\"]*)\"$")
	public void user_enters_Account_Number_as(int AccountNumber) {
		accountsPage.enterAccountNumber(AccountNumber + randNum());
	}

	@Then("^User enters Contact Person as \"([^\"]*)\"$")
	public void user_enters_Contact_Person_as(String ContactPerson) {
		accountsPage.enterContactPerson(ContactPerson);
	}

	@Then("^User enters Phone as \"([^\"]*)\"$")
	public void user_enters_Phone_as(int Phone) {
		accountsPage.enterPhone(Phone + randNum());
	}

	@Then("^User enters Internet Banking URL as \"([^\"]*)\"$")
	public void user_enters_Internet_Banking_URL_as(String InternetBankingURL) {
		accountsPage.enterInternetBankingURL(InternetBankingURL);
	}

	@And("^User clicks submit button$")
	public void user_clicks_submit_button() {
		accountsPage.clickSubmit();
	}
}
