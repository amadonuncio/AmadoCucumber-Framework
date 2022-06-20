package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class DashboardPage {

//	Element Lists
	@FindBy(how = How.XPATH, using = "//span[contains(text(), 'Bank & Cash')]")
	WebElement BANK_CASH_BUTTON_ELEMENT;
	@FindBy(how = How.XPATH, using = "//a[contains(text(), 'New Account')]")
	WebElement NEW_ACCOUNT_BUTTON_ELEMENT;
	
//	Methods
	public void clickBankAndCashButton() {
		BANK_CASH_BUTTON_ELEMENT.click();
		try {
			Thread.sleep(1500);
		}catch(InterruptedException e) {
			e.printStackTrace();
		}
	}
	
	public void clickNewAccountButton() {
		NEW_ACCOUNT_BUTTON_ELEMENT.click();
		try {
			Thread.sleep(1500);
		}catch(InterruptedException e) {
			e.printStackTrace();
		}
	}
}
