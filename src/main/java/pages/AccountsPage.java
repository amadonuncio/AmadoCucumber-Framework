package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class AccountsPage {

//	Elements List
	@FindBy(how = How.XPATH, using = "//input[@id = 'account']")
	WebElement ACCOUNT_TITLE_ELEMENT;
	@FindBy(how = How.XPATH, using = "//input[@id = 'description']")
	WebElement DESCRPTION_ELEMENT;
	@FindBy(how = How.XPATH, using = "//input[@id = 'balance']")
	WebElement INITIAL_BALANCE_ELEMENT;
	@FindBy(how = How.XPATH, using = "//input[@id = 'account_number']")
	WebElement ACCOUNT_NUMBER_ELEMENT;
	@FindBy(how = How.XPATH, using = "//input[@id = 'contact_person']")
	WebElement CONTACT_PERSON_ELEMENT;
	@FindBy(how = How.XPATH, using = "//input[@id = 'contact_phone']")
	WebElement PHONE_ELEMENT;
	@FindBy(how = How.XPATH, using = "//input[@id = 'ib_url']")
	WebElement INTERNET_BANKING_URL_ELEMENT;
	@FindBy(how = How.XPATH, using = "//button[contains(text(), 'Submit')]")
	WebElement SUBMIT_ELEMENT;

//	Methods
	public void enterAccountTitle(String AccountTitle) {
		ACCOUNT_TITLE_ELEMENT.sendKeys(AccountTitle);
		try {
			Thread.sleep(1500);
		}catch(InterruptedException e) {
			e.printStackTrace();
		}
	}

	public void enterDescription(String Description) {
		DESCRPTION_ELEMENT.sendKeys(Description);
		try {
			Thread.sleep(1500);
		}catch(InterruptedException e) {
			e.printStackTrace();
		}
	}

	public void enterInitialBalance(int initialBalance) {
		INITIAL_BALANCE_ELEMENT.sendKeys(String.valueOf(initialBalance));
		try {
			Thread.sleep(1500);
		}catch(InterruptedException e) {
			e.printStackTrace();
		}
	}

	public void enterAccountNumber(int AccountNumber) {
		ACCOUNT_NUMBER_ELEMENT.sendKeys(String.valueOf(AccountNumber));
		try {
			Thread.sleep(1500);
		}catch(InterruptedException e) {
			e.printStackTrace();
		}
	}

	public void enterContactPerson(String ContactPerson) {
		CONTACT_PERSON_ELEMENT.sendKeys(ContactPerson);
		try {
			Thread.sleep(1500);
		}catch(InterruptedException e) {
			e.printStackTrace();
		}
	}

	public void enterPhone(int Phone) {
		PHONE_ELEMENT.sendKeys(String.valueOf(Phone));
		try {
			Thread.sleep(1500);
		}catch(InterruptedException e) {
			e.printStackTrace();
		}
	}

	public void enterInternetBankingURL(String InternetBankingURL) {
		INTERNET_BANKING_URL_ELEMENT.sendKeys(InternetBankingURL);
		try {
			Thread.sleep(1500);
		}catch(InterruptedException e) {
			e.printStackTrace();
		}
	}

	public void clickSubmit() {
		SUBMIT_ELEMENT.click();
		try {
			Thread.sleep(1500);
		}catch(InterruptedException e) {
			e.printStackTrace();
		}
	}

}
