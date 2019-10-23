import { element, by, ElementFinder } from 'protractor';

export default class FieldTestPagerEntityUpdatePage {
  pageTitle: ElementFinder = element(by.id('travisReactApp.fieldTestPagerEntity.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  stringJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-stringJade'));
  stringRequiredJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-stringRequiredJade'));
  stringMinlengthJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-stringMinlengthJade'));
  stringMaxlengthJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-stringMaxlengthJade'));
  stringPatternJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-stringPatternJade'));
  integerJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-integerJade'));
  integerRequiredJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-integerRequiredJade'));
  integerMinJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-integerMinJade'));
  integerMaxJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-integerMaxJade'));
  longJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-longJade'));
  longRequiredJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-longRequiredJade'));
  longMinJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-longMinJade'));
  longMaxJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-longMaxJade'));
  floatJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-floatJade'));
  floatRequiredJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-floatRequiredJade'));
  floatMinJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-floatMinJade'));
  floatMaxJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-floatMaxJade'));
  doubleRequiredJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-doubleRequiredJade'));
  doubleMinJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-doubleMinJade'));
  doubleMaxJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-doubleMaxJade'));
  bigDecimalRequiredJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-bigDecimalRequiredJade'));
  bigDecimalMinJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-bigDecimalMinJade'));
  bigDecimalMaxJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-bigDecimalMaxJade'));
  localDateJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-localDateJade'));
  localDateRequiredJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-localDateRequiredJade'));
  instantJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-instantJade'));
  instanteRequiredJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-instanteRequiredJade'));
  zonedDateTimeJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-zonedDateTimeJade'));
  zonedDateTimeRequiredJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-zonedDateTimeRequiredJade'));
  durationJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-durationJade'));
  durationRequiredJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-durationRequiredJade'));
  booleanJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-booleanJade'));
  booleanRequiredJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-booleanRequiredJade'));
  enumJadeSelect: ElementFinder = element(by.css('select#field-test-pager-entity-enumJade'));
  enumRequiredJadeSelect: ElementFinder = element(by.css('select#field-test-pager-entity-enumRequiredJade'));
  uuidJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-uuidJade'));
  uuidRequiredJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-uuidRequiredJade'));
  byteImageJadeInput: ElementFinder = element(by.css('input#file_byteImageJade'));
  byteImageRequiredJadeInput: ElementFinder = element(by.css('input#file_byteImageRequiredJade'));
  byteImageMinbytesJadeInput: ElementFinder = element(by.css('input#file_byteImageMinbytesJade'));
  byteImageMaxbytesJadeInput: ElementFinder = element(by.css('input#file_byteImageMaxbytesJade'));
  byteAnyJadeInput: ElementFinder = element(by.css('input#file_byteAnyJade'));
  byteAnyRequiredJadeInput: ElementFinder = element(by.css('input#file_byteAnyRequiredJade'));
  byteAnyMinbytesJadeInput: ElementFinder = element(by.css('input#file_byteAnyMinbytesJade'));
  byteAnyMaxbytesJadeInput: ElementFinder = element(by.css('input#file_byteAnyMaxbytesJade'));
  byteTextJadeInput: ElementFinder = element(by.css('textarea#field-test-pager-entity-byteTextJade'));
  byteTextRequiredJadeInput: ElementFinder = element(by.css('textarea#field-test-pager-entity-byteTextRequiredJade'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setStringJadeInput(stringJade) {
    await this.stringJadeInput.sendKeys(stringJade);
  }

  async getStringJadeInput() {
    return this.stringJadeInput.getAttribute('value');
  }

  async setStringRequiredJadeInput(stringRequiredJade) {
    await this.stringRequiredJadeInput.sendKeys(stringRequiredJade);
  }

  async getStringRequiredJadeInput() {
    return this.stringRequiredJadeInput.getAttribute('value');
  }

  async setStringMinlengthJadeInput(stringMinlengthJade) {
    await this.stringMinlengthJadeInput.sendKeys(stringMinlengthJade);
  }

  async getStringMinlengthJadeInput() {
    return this.stringMinlengthJadeInput.getAttribute('value');
  }

  async setStringMaxlengthJadeInput(stringMaxlengthJade) {
    await this.stringMaxlengthJadeInput.sendKeys(stringMaxlengthJade);
  }

  async getStringMaxlengthJadeInput() {
    return this.stringMaxlengthJadeInput.getAttribute('value');
  }

  async setStringPatternJadeInput(stringPatternJade) {
    await this.stringPatternJadeInput.sendKeys(stringPatternJade);
  }

  async getStringPatternJadeInput() {
    return this.stringPatternJadeInput.getAttribute('value');
  }

  async setIntegerJadeInput(integerJade) {
    await this.integerJadeInput.sendKeys(integerJade);
  }

  async getIntegerJadeInput() {
    return this.integerJadeInput.getAttribute('value');
  }

  async setIntegerRequiredJadeInput(integerRequiredJade) {
    await this.integerRequiredJadeInput.sendKeys(integerRequiredJade);
  }

  async getIntegerRequiredJadeInput() {
    return this.integerRequiredJadeInput.getAttribute('value');
  }

  async setIntegerMinJadeInput(integerMinJade) {
    await this.integerMinJadeInput.sendKeys(integerMinJade);
  }

  async getIntegerMinJadeInput() {
    return this.integerMinJadeInput.getAttribute('value');
  }

  async setIntegerMaxJadeInput(integerMaxJade) {
    await this.integerMaxJadeInput.sendKeys(integerMaxJade);
  }

  async getIntegerMaxJadeInput() {
    return this.integerMaxJadeInput.getAttribute('value');
  }

  async setLongJadeInput(longJade) {
    await this.longJadeInput.sendKeys(longJade);
  }

  async getLongJadeInput() {
    return this.longJadeInput.getAttribute('value');
  }

  async setLongRequiredJadeInput(longRequiredJade) {
    await this.longRequiredJadeInput.sendKeys(longRequiredJade);
  }

  async getLongRequiredJadeInput() {
    return this.longRequiredJadeInput.getAttribute('value');
  }

  async setLongMinJadeInput(longMinJade) {
    await this.longMinJadeInput.sendKeys(longMinJade);
  }

  async getLongMinJadeInput() {
    return this.longMinJadeInput.getAttribute('value');
  }

  async setLongMaxJadeInput(longMaxJade) {
    await this.longMaxJadeInput.sendKeys(longMaxJade);
  }

  async getLongMaxJadeInput() {
    return this.longMaxJadeInput.getAttribute('value');
  }

  async setFloatJadeInput(floatJade) {
    await this.floatJadeInput.sendKeys(floatJade);
  }

  async getFloatJadeInput() {
    return this.floatJadeInput.getAttribute('value');
  }

  async setFloatRequiredJadeInput(floatRequiredJade) {
    await this.floatRequiredJadeInput.sendKeys(floatRequiredJade);
  }

  async getFloatRequiredJadeInput() {
    return this.floatRequiredJadeInput.getAttribute('value');
  }

  async setFloatMinJadeInput(floatMinJade) {
    await this.floatMinJadeInput.sendKeys(floatMinJade);
  }

  async getFloatMinJadeInput() {
    return this.floatMinJadeInput.getAttribute('value');
  }

  async setFloatMaxJadeInput(floatMaxJade) {
    await this.floatMaxJadeInput.sendKeys(floatMaxJade);
  }

  async getFloatMaxJadeInput() {
    return this.floatMaxJadeInput.getAttribute('value');
  }

  async setDoubleRequiredJadeInput(doubleRequiredJade) {
    await this.doubleRequiredJadeInput.sendKeys(doubleRequiredJade);
  }

  async getDoubleRequiredJadeInput() {
    return this.doubleRequiredJadeInput.getAttribute('value');
  }

  async setDoubleMinJadeInput(doubleMinJade) {
    await this.doubleMinJadeInput.sendKeys(doubleMinJade);
  }

  async getDoubleMinJadeInput() {
    return this.doubleMinJadeInput.getAttribute('value');
  }

  async setDoubleMaxJadeInput(doubleMaxJade) {
    await this.doubleMaxJadeInput.sendKeys(doubleMaxJade);
  }

  async getDoubleMaxJadeInput() {
    return this.doubleMaxJadeInput.getAttribute('value');
  }

  async setBigDecimalRequiredJadeInput(bigDecimalRequiredJade) {
    await this.bigDecimalRequiredJadeInput.sendKeys(bigDecimalRequiredJade);
  }

  async getBigDecimalRequiredJadeInput() {
    return this.bigDecimalRequiredJadeInput.getAttribute('value');
  }

  async setBigDecimalMinJadeInput(bigDecimalMinJade) {
    await this.bigDecimalMinJadeInput.sendKeys(bigDecimalMinJade);
  }

  async getBigDecimalMinJadeInput() {
    return this.bigDecimalMinJadeInput.getAttribute('value');
  }

  async setBigDecimalMaxJadeInput(bigDecimalMaxJade) {
    await this.bigDecimalMaxJadeInput.sendKeys(bigDecimalMaxJade);
  }

  async getBigDecimalMaxJadeInput() {
    return this.bigDecimalMaxJadeInput.getAttribute('value');
  }

  async setLocalDateJadeInput(localDateJade) {
    await this.localDateJadeInput.sendKeys(localDateJade);
  }

  async getLocalDateJadeInput() {
    return this.localDateJadeInput.getAttribute('value');
  }

  async setLocalDateRequiredJadeInput(localDateRequiredJade) {
    await this.localDateRequiredJadeInput.sendKeys(localDateRequiredJade);
  }

  async getLocalDateRequiredJadeInput() {
    return this.localDateRequiredJadeInput.getAttribute('value');
  }

  async setInstantJadeInput(instantJade) {
    await this.instantJadeInput.sendKeys(instantJade);
  }

  async getInstantJadeInput() {
    return this.instantJadeInput.getAttribute('value');
  }

  async setInstanteRequiredJadeInput(instanteRequiredJade) {
    await this.instanteRequiredJadeInput.sendKeys(instanteRequiredJade);
  }

  async getInstanteRequiredJadeInput() {
    return this.instanteRequiredJadeInput.getAttribute('value');
  }

  async setZonedDateTimeJadeInput(zonedDateTimeJade) {
    await this.zonedDateTimeJadeInput.sendKeys(zonedDateTimeJade);
  }

  async getZonedDateTimeJadeInput() {
    return this.zonedDateTimeJadeInput.getAttribute('value');
  }

  async setZonedDateTimeRequiredJadeInput(zonedDateTimeRequiredJade) {
    await this.zonedDateTimeRequiredJadeInput.sendKeys(zonedDateTimeRequiredJade);
  }

  async getZonedDateTimeRequiredJadeInput() {
    return this.zonedDateTimeRequiredJadeInput.getAttribute('value');
  }

  async setDurationJadeInput(durationJade) {
    await this.durationJadeInput.sendKeys(durationJade);
  }

  async getDurationJadeInput() {
    return this.durationJadeInput.getAttribute('value');
  }

  async setDurationRequiredJadeInput(durationRequiredJade) {
    await this.durationRequiredJadeInput.sendKeys(durationRequiredJade);
  }

  async getDurationRequiredJadeInput() {
    return this.durationRequiredJadeInput.getAttribute('value');
  }

  getBooleanJadeInput() {
    return this.booleanJadeInput;
  }
  getBooleanRequiredJadeInput() {
    return this.booleanRequiredJadeInput;
  }
  async setEnumJadeSelect(enumJade) {
    await this.enumJadeSelect.sendKeys(enumJade);
  }

  async getEnumJadeSelect() {
    return this.enumJadeSelect.element(by.css('option:checked')).getText();
  }

  async enumJadeSelectLastOption() {
    await this.enumJadeSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }
  async setEnumRequiredJadeSelect(enumRequiredJade) {
    await this.enumRequiredJadeSelect.sendKeys(enumRequiredJade);
  }

  async getEnumRequiredJadeSelect() {
    return this.enumRequiredJadeSelect.element(by.css('option:checked')).getText();
  }

  async enumRequiredJadeSelectLastOption() {
    await this.enumRequiredJadeSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }
  async setUuidJadeInput(uuidJade) {
    await this.uuidJadeInput.sendKeys(uuidJade);
  }

  async getUuidJadeInput() {
    return this.uuidJadeInput.getAttribute('value');
  }

  async setUuidRequiredJadeInput(uuidRequiredJade) {
    await this.uuidRequiredJadeInput.sendKeys(uuidRequiredJade);
  }

  async getUuidRequiredJadeInput() {
    return this.uuidRequiredJadeInput.getAttribute('value');
  }

  async setByteImageJadeInput(byteImageJade) {
    await this.byteImageJadeInput.sendKeys(byteImageJade);
  }

  async getByteImageJadeInput() {
    return this.byteImageJadeInput.getAttribute('value');
  }

  async setByteImageRequiredJadeInput(byteImageRequiredJade) {
    await this.byteImageRequiredJadeInput.sendKeys(byteImageRequiredJade);
  }

  async getByteImageRequiredJadeInput() {
    return this.byteImageRequiredJadeInput.getAttribute('value');
  }

  async setByteImageMinbytesJadeInput(byteImageMinbytesJade) {
    await this.byteImageMinbytesJadeInput.sendKeys(byteImageMinbytesJade);
  }

  async getByteImageMinbytesJadeInput() {
    return this.byteImageMinbytesJadeInput.getAttribute('value');
  }

  async setByteImageMaxbytesJadeInput(byteImageMaxbytesJade) {
    await this.byteImageMaxbytesJadeInput.sendKeys(byteImageMaxbytesJade);
  }

  async getByteImageMaxbytesJadeInput() {
    return this.byteImageMaxbytesJadeInput.getAttribute('value');
  }

  async setByteAnyJadeInput(byteAnyJade) {
    await this.byteAnyJadeInput.sendKeys(byteAnyJade);
  }

  async getByteAnyJadeInput() {
    return this.byteAnyJadeInput.getAttribute('value');
  }

  async setByteAnyRequiredJadeInput(byteAnyRequiredJade) {
    await this.byteAnyRequiredJadeInput.sendKeys(byteAnyRequiredJade);
  }

  async getByteAnyRequiredJadeInput() {
    return this.byteAnyRequiredJadeInput.getAttribute('value');
  }

  async setByteAnyMinbytesJadeInput(byteAnyMinbytesJade) {
    await this.byteAnyMinbytesJadeInput.sendKeys(byteAnyMinbytesJade);
  }

  async getByteAnyMinbytesJadeInput() {
    return this.byteAnyMinbytesJadeInput.getAttribute('value');
  }

  async setByteAnyMaxbytesJadeInput(byteAnyMaxbytesJade) {
    await this.byteAnyMaxbytesJadeInput.sendKeys(byteAnyMaxbytesJade);
  }

  async getByteAnyMaxbytesJadeInput() {
    return this.byteAnyMaxbytesJadeInput.getAttribute('value');
  }

  async setByteTextJadeInput(byteTextJade) {
    await this.byteTextJadeInput.sendKeys(byteTextJade);
  }

  async getByteTextJadeInput() {
    return this.byteTextJadeInput.getAttribute('value');
  }

  async setByteTextRequiredJadeInput(byteTextRequiredJade) {
    await this.byteTextRequiredJadeInput.sendKeys(byteTextRequiredJade);
  }

  async getByteTextRequiredJadeInput() {
    return this.byteTextRequiredJadeInput.getAttribute('value');
  }

  async save() {
    await this.saveButton.click();
  }

  async cancel() {
    await this.cancelButton.click();
  }

  getSaveButton() {
    return this.saveButton;
  }
}
