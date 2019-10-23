import { browser, element, by, protractor } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import FieldTestPagerEntityComponentsPage, { FieldTestPagerEntityDeleteDialog } from './field-test-pager-entity.page-object';
import FieldTestPagerEntityUpdatePage from './field-test-pager-entity-update.page-object';
import { waitUntilDisplayed, waitUntilHidden } from '../../util/utils';
import path from 'path';

const expect = chai.expect;

describe('FieldTestPagerEntity e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let fieldTestPagerEntityComponentsPage: FieldTestPagerEntityComponentsPage;
  let fieldTestPagerEntityUpdatePage: FieldTestPagerEntityUpdatePage;
  let fieldTestPagerEntityDeleteDialog: FieldTestPagerEntityDeleteDialog;
  const fileToUpload = '../../../../../../src/main/webapp/content/images/logo-jhipster.png';
  const absolutePath = path.resolve(__dirname, fileToUpload);

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.waitUntilDisplayed();

    await signInPage.username.sendKeys('admin');
    await signInPage.password.sendKeys('admin');
    await signInPage.loginButton.click();
    await signInPage.waitUntilHidden();
    await waitUntilDisplayed(navBarPage.entityMenu);
  });

  it('should load FieldTestPagerEntities', async () => {
    await navBarPage.getEntityPage('field-test-pager-entity');
    fieldTestPagerEntityComponentsPage = new FieldTestPagerEntityComponentsPage();
    expect(await fieldTestPagerEntityComponentsPage.getTitle().getText()).to.match(/Field Test Pager Entities/);
  });

  it('should load create FieldTestPagerEntity page', async () => {
    await fieldTestPagerEntityComponentsPage.clickOnCreateButton();
    fieldTestPagerEntityUpdatePage = new FieldTestPagerEntityUpdatePage();
    expect(await fieldTestPagerEntityUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /travisReactApp.fieldTestPagerEntity.home.createOrEditLabel/
    );
    await fieldTestPagerEntityUpdatePage.cancel();
  });

  it('should create and save FieldTestPagerEntities', async () => {
    async function createFieldTestPagerEntity() {
      await fieldTestPagerEntityComponentsPage.clickOnCreateButton();
      await fieldTestPagerEntityUpdatePage.setStringJadeInput('stringJade');
      expect(await fieldTestPagerEntityUpdatePage.getStringJadeInput()).to.match(/stringJade/);
      await fieldTestPagerEntityUpdatePage.setStringRequiredJadeInput('stringRequiredJade');
      expect(await fieldTestPagerEntityUpdatePage.getStringRequiredJadeInput()).to.match(/stringRequiredJade/);
      await fieldTestPagerEntityUpdatePage.setStringMinlengthJadeInput('stringMinlengthJade');
      expect(await fieldTestPagerEntityUpdatePage.getStringMinlengthJadeInput()).to.match(/stringMinlengthJade/);
      await fieldTestPagerEntityUpdatePage.setStringMaxlengthJadeInput('stringMaxlengthJade');
      expect(await fieldTestPagerEntityUpdatePage.getStringMaxlengthJadeInput()).to.match(/stringMaxlengthJade/);
      await fieldTestPagerEntityUpdatePage.setStringPatternJadeInput('stringPatternJade');
      expect(await fieldTestPagerEntityUpdatePage.getStringPatternJadeInput()).to.match(/stringPatternJade/);
      await fieldTestPagerEntityUpdatePage.setIntegerJadeInput('5');
      expect(await fieldTestPagerEntityUpdatePage.getIntegerJadeInput()).to.eq('5');
      await fieldTestPagerEntityUpdatePage.setIntegerRequiredJadeInput('5');
      expect(await fieldTestPagerEntityUpdatePage.getIntegerRequiredJadeInput()).to.eq('5');
      await fieldTestPagerEntityUpdatePage.setIntegerMinJadeInput('5');
      expect(await fieldTestPagerEntityUpdatePage.getIntegerMinJadeInput()).to.eq('5');
      await fieldTestPagerEntityUpdatePage.setIntegerMaxJadeInput('5');
      expect(await fieldTestPagerEntityUpdatePage.getIntegerMaxJadeInput()).to.eq('5');
      await fieldTestPagerEntityUpdatePage.setLongJadeInput('5');
      expect(await fieldTestPagerEntityUpdatePage.getLongJadeInput()).to.eq('5');
      await fieldTestPagerEntityUpdatePage.setLongRequiredJadeInput('5');
      expect(await fieldTestPagerEntityUpdatePage.getLongRequiredJadeInput()).to.eq('5');
      await fieldTestPagerEntityUpdatePage.setLongMinJadeInput('5');
      expect(await fieldTestPagerEntityUpdatePage.getLongMinJadeInput()).to.eq('5');
      await fieldTestPagerEntityUpdatePage.setLongMaxJadeInput('5');
      expect(await fieldTestPagerEntityUpdatePage.getLongMaxJadeInput()).to.eq('5');
      await fieldTestPagerEntityUpdatePage.setFloatJadeInput('5');
      expect(await fieldTestPagerEntityUpdatePage.getFloatJadeInput()).to.eq('5');
      await fieldTestPagerEntityUpdatePage.setFloatRequiredJadeInput('5');
      expect(await fieldTestPagerEntityUpdatePage.getFloatRequiredJadeInput()).to.eq('5');
      await fieldTestPagerEntityUpdatePage.setFloatMinJadeInput('5');
      expect(await fieldTestPagerEntityUpdatePage.getFloatMinJadeInput()).to.eq('5');
      await fieldTestPagerEntityUpdatePage.setFloatMaxJadeInput('5');
      expect(await fieldTestPagerEntityUpdatePage.getFloatMaxJadeInput()).to.eq('5');
      await fieldTestPagerEntityUpdatePage.setDoubleRequiredJadeInput('5');
      expect(await fieldTestPagerEntityUpdatePage.getDoubleRequiredJadeInput()).to.eq('5');
      await fieldTestPagerEntityUpdatePage.setDoubleMinJadeInput('5');
      expect(await fieldTestPagerEntityUpdatePage.getDoubleMinJadeInput()).to.eq('5');
      await fieldTestPagerEntityUpdatePage.setDoubleMaxJadeInput('5');
      expect(await fieldTestPagerEntityUpdatePage.getDoubleMaxJadeInput()).to.eq('5');
      await fieldTestPagerEntityUpdatePage.setBigDecimalRequiredJadeInput('5');
      expect(await fieldTestPagerEntityUpdatePage.getBigDecimalRequiredJadeInput()).to.eq('5');
      await fieldTestPagerEntityUpdatePage.setBigDecimalMinJadeInput('5');
      expect(await fieldTestPagerEntityUpdatePage.getBigDecimalMinJadeInput()).to.eq('5');
      await fieldTestPagerEntityUpdatePage.setBigDecimalMaxJadeInput('5');
      expect(await fieldTestPagerEntityUpdatePage.getBigDecimalMaxJadeInput()).to.eq('5');
      await fieldTestPagerEntityUpdatePage.setLocalDateJadeInput('01-01-2001');
      expect(await fieldTestPagerEntityUpdatePage.getLocalDateJadeInput()).to.eq('2001-01-01');
      await fieldTestPagerEntityUpdatePage.setLocalDateRequiredJadeInput('01-01-2001');
      expect(await fieldTestPagerEntityUpdatePage.getLocalDateRequiredJadeInput()).to.eq('2001-01-01');
      await fieldTestPagerEntityUpdatePage.setInstantJadeInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await fieldTestPagerEntityUpdatePage.getInstantJadeInput()).to.contain('2001-01-01T02:30');
      await fieldTestPagerEntityUpdatePage.setInstanteRequiredJadeInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await fieldTestPagerEntityUpdatePage.getInstanteRequiredJadeInput()).to.contain('2001-01-01T02:30');
      await fieldTestPagerEntityUpdatePage.setZonedDateTimeJadeInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await fieldTestPagerEntityUpdatePage.getZonedDateTimeJadeInput()).to.contain('2001-01-01T02:30');
      await fieldTestPagerEntityUpdatePage.setZonedDateTimeRequiredJadeInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await fieldTestPagerEntityUpdatePage.getZonedDateTimeRequiredJadeInput()).to.contain('2001-01-01T02:30');
      await fieldTestPagerEntityUpdatePage.setDurationJadeInput('PT12S');
      expect(await fieldTestPagerEntityUpdatePage.getDurationJadeInput()).to.contain('12');
      await fieldTestPagerEntityUpdatePage.setDurationRequiredJadeInput('PT12S');
      expect(await fieldTestPagerEntityUpdatePage.getDurationRequiredJadeInput()).to.contain('12');
      const selectedBooleanJade = await fieldTestPagerEntityUpdatePage.getBooleanJadeInput().isSelected();
      if (selectedBooleanJade) {
        await fieldTestPagerEntityUpdatePage.getBooleanJadeInput().click();
        expect(await fieldTestPagerEntityUpdatePage.getBooleanJadeInput().isSelected()).to.be.false;
      } else {
        await fieldTestPagerEntityUpdatePage.getBooleanJadeInput().click();
        expect(await fieldTestPagerEntityUpdatePage.getBooleanJadeInput().isSelected()).to.be.true;
      }
      const selectedBooleanRequiredJade = await fieldTestPagerEntityUpdatePage.getBooleanRequiredJadeInput().isSelected();
      if (selectedBooleanRequiredJade) {
        await fieldTestPagerEntityUpdatePage.getBooleanRequiredJadeInput().click();
        expect(await fieldTestPagerEntityUpdatePage.getBooleanRequiredJadeInput().isSelected()).to.be.false;
      } else {
        await fieldTestPagerEntityUpdatePage.getBooleanRequiredJadeInput().click();
        expect(await fieldTestPagerEntityUpdatePage.getBooleanRequiredJadeInput().isSelected()).to.be.true;
      }
      await fieldTestPagerEntityUpdatePage.enumJadeSelectLastOption();
      await fieldTestPagerEntityUpdatePage.enumRequiredJadeSelectLastOption();
      await fieldTestPagerEntityUpdatePage.setUuidJadeInput('64c99148-3908-465d-8c4a-e510e3ade974');
      expect(await fieldTestPagerEntityUpdatePage.getUuidJadeInput()).to.match(/64c99148-3908-465d-8c4a-e510e3ade974/);
      await fieldTestPagerEntityUpdatePage.setUuidRequiredJadeInput('64c99148-3908-465d-8c4a-e510e3ade974');
      expect(await fieldTestPagerEntityUpdatePage.getUuidRequiredJadeInput()).to.match(/64c99148-3908-465d-8c4a-e510e3ade974/);
      await fieldTestPagerEntityUpdatePage.setByteImageJadeInput(absolutePath);
      await fieldTestPagerEntityUpdatePage.setByteImageRequiredJadeInput(absolutePath);
      await fieldTestPagerEntityUpdatePage.setByteImageMinbytesJadeInput(absolutePath);
      await fieldTestPagerEntityUpdatePage.setByteImageMaxbytesJadeInput(absolutePath);
      await fieldTestPagerEntityUpdatePage.setByteAnyJadeInput(absolutePath);
      await fieldTestPagerEntityUpdatePage.setByteAnyRequiredJadeInput(absolutePath);
      await fieldTestPagerEntityUpdatePage.setByteAnyMinbytesJadeInput(absolutePath);
      await fieldTestPagerEntityUpdatePage.setByteAnyMaxbytesJadeInput(absolutePath);
      await fieldTestPagerEntityUpdatePage.setByteTextJadeInput('byteTextJade');
      expect(await fieldTestPagerEntityUpdatePage.getByteTextJadeInput()).to.match(/byteTextJade/);
      await fieldTestPagerEntityUpdatePage.setByteTextRequiredJadeInput('byteTextRequiredJade');
      expect(await fieldTestPagerEntityUpdatePage.getByteTextRequiredJadeInput()).to.match(/byteTextRequiredJade/);
      await waitUntilDisplayed(fieldTestPagerEntityUpdatePage.getSaveButton());
      await fieldTestPagerEntityUpdatePage.save();
      await waitUntilHidden(fieldTestPagerEntityUpdatePage.getSaveButton());
      expect(await fieldTestPagerEntityUpdatePage.getSaveButton().isPresent()).to.be.false;
    }

    await createFieldTestPagerEntity();
    await fieldTestPagerEntityComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeCreate = await fieldTestPagerEntityComponentsPage.countDeleteButtons();
    await createFieldTestPagerEntity();

    await fieldTestPagerEntityComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeCreate + 1);
    expect(await fieldTestPagerEntityComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
  });

  it('should delete last FieldTestPagerEntity', async () => {
    await fieldTestPagerEntityComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await fieldTestPagerEntityComponentsPage.countDeleteButtons();
    await fieldTestPagerEntityComponentsPage.clickOnLastDeleteButton();

    const deleteModal = element(by.className('modal'));
    await waitUntilDisplayed(deleteModal);

    fieldTestPagerEntityDeleteDialog = new FieldTestPagerEntityDeleteDialog();
    expect(await fieldTestPagerEntityDeleteDialog.getDialogTitle().getAttribute('id')).to.match(
      /travisReactApp.fieldTestPagerEntity.delete.question/
    );
    await fieldTestPagerEntityDeleteDialog.clickOnConfirmButton();

    await fieldTestPagerEntityComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await fieldTestPagerEntityComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
