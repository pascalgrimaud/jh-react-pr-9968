import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, setFileData, openFile, byteSize, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, setBlob, reset } from './field-test-pager-entity.reducer';
import { IFieldTestPagerEntity } from 'app/shared/model/field-test-pager-entity.model';
import { convertDateTimeFromServer, convertDateTimeToServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IFieldTestPagerEntityUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export interface IFieldTestPagerEntityUpdateState {
  isNew: boolean;
}

export class FieldTestPagerEntityUpdate extends React.Component<IFieldTestPagerEntityUpdateProps, IFieldTestPagerEntityUpdateState> {
  constructor(props) {
    super(props);
    this.state = {
      isNew: !this.props.match.params || !this.props.match.params.id
    };
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.updateSuccess !== this.props.updateSuccess && nextProps.updateSuccess) {
      this.handleClose();
    }
  }

  componentDidMount() {
    if (this.state.isNew) {
      this.props.reset();
    } else {
      this.props.getEntity(this.props.match.params.id);
    }
  }

  onBlobChange = (isAnImage, name) => event => {
    setFileData(event, (contentType, data) => this.props.setBlob(name, data, contentType), isAnImage);
  };

  clearBlob = name => () => {
    this.props.setBlob(name, undefined, undefined);
  };

  saveEntity = (event, errors, values) => {
    values.instantJade = convertDateTimeToServer(values.instantJade);
    values.instanteRequiredJade = convertDateTimeToServer(values.instanteRequiredJade);
    values.zonedDateTimeJade = convertDateTimeToServer(values.zonedDateTimeJade);
    values.zonedDateTimeRequiredJade = convertDateTimeToServer(values.zonedDateTimeRequiredJade);

    if (errors.length === 0) {
      const { fieldTestPagerEntityEntity } = this.props;
      const entity = {
        ...fieldTestPagerEntityEntity,
        ...values
      };

      if (this.state.isNew) {
        this.props.createEntity(entity);
      } else {
        this.props.updateEntity(entity);
      }
    }
  };

  handleClose = () => {
    this.props.history.push('/field-test-pager-entity');
  };

  render() {
    const { fieldTestPagerEntityEntity, loading, updating } = this.props;
    const { isNew } = this.state;

    const {
      byteImageJade,
      byteImageJadeContentType,
      byteImageRequiredJade,
      byteImageRequiredJadeContentType,
      byteImageMinbytesJade,
      byteImageMinbytesJadeContentType,
      byteImageMaxbytesJade,
      byteImageMaxbytesJadeContentType,
      byteAnyJade,
      byteAnyJadeContentType,
      byteAnyRequiredJade,
      byteAnyRequiredJadeContentType,
      byteAnyMinbytesJade,
      byteAnyMinbytesJadeContentType,
      byteAnyMaxbytesJade,
      byteAnyMaxbytesJadeContentType,
      byteTextJade,
      byteTextRequiredJade
    } = fieldTestPagerEntityEntity;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="travisReactApp.fieldTestPagerEntity.home.createOrEditLabel">
              <Translate contentKey="travisReactApp.fieldTestPagerEntity.home.createOrEditLabel">
                Create or edit a FieldTestPagerEntity
              </Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : fieldTestPagerEntityEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="field-test-pager-entity-id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput id="field-test-pager-entity-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="stringJadeLabel" for="field-test-pager-entity-stringJade">
                    <Translate contentKey="travisReactApp.fieldTestPagerEntity.stringJade">String Jade</Translate>
                  </Label>
                  <AvField id="field-test-pager-entity-stringJade" type="text" name="stringJade" />
                </AvGroup>
                <AvGroup>
                  <Label id="stringRequiredJadeLabel" for="field-test-pager-entity-stringRequiredJade">
                    <Translate contentKey="travisReactApp.fieldTestPagerEntity.stringRequiredJade">String Required Jade</Translate>
                  </Label>
                  <AvField
                    id="field-test-pager-entity-stringRequiredJade"
                    type="text"
                    name="stringRequiredJade"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="stringMinlengthJadeLabel" for="field-test-pager-entity-stringMinlengthJade">
                    <Translate contentKey="travisReactApp.fieldTestPagerEntity.stringMinlengthJade">String Minlength Jade</Translate>
                  </Label>
                  <AvField
                    id="field-test-pager-entity-stringMinlengthJade"
                    type="text"
                    name="stringMinlengthJade"
                    validate={{
                      minLength: { value: 0, errorMessage: translate('entity.validation.minlength', { min: 0 }) }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="stringMaxlengthJadeLabel" for="field-test-pager-entity-stringMaxlengthJade">
                    <Translate contentKey="travisReactApp.fieldTestPagerEntity.stringMaxlengthJade">String Maxlength Jade</Translate>
                  </Label>
                  <AvField
                    id="field-test-pager-entity-stringMaxlengthJade"
                    type="text"
                    name="stringMaxlengthJade"
                    validate={{
                      maxLength: { value: 20, errorMessage: translate('entity.validation.maxlength', { max: 20 }) }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="stringPatternJadeLabel" for="field-test-pager-entity-stringPatternJade">
                    <Translate contentKey="travisReactApp.fieldTestPagerEntity.stringPatternJade">String Pattern Jade</Translate>
                  </Label>
                  <AvField
                    id="field-test-pager-entity-stringPatternJade"
                    type="text"
                    name="stringPatternJade"
                    validate={{
                      pattern: {
                        value: '^[a-zA-Z0-9]*$',
                        errorMessage: translate('entity.validation.pattern', { pattern: '^[a-zA-Z0-9]*$' })
                      }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="integerJadeLabel" for="field-test-pager-entity-integerJade">
                    <Translate contentKey="travisReactApp.fieldTestPagerEntity.integerJade">Integer Jade</Translate>
                  </Label>
                  <AvField id="field-test-pager-entity-integerJade" type="string" className="form-control" name="integerJade" />
                </AvGroup>
                <AvGroup>
                  <Label id="integerRequiredJadeLabel" for="field-test-pager-entity-integerRequiredJade">
                    <Translate contentKey="travisReactApp.fieldTestPagerEntity.integerRequiredJade">Integer Required Jade</Translate>
                  </Label>
                  <AvField
                    id="field-test-pager-entity-integerRequiredJade"
                    type="string"
                    className="form-control"
                    name="integerRequiredJade"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="integerMinJadeLabel" for="field-test-pager-entity-integerMinJade">
                    <Translate contentKey="travisReactApp.fieldTestPagerEntity.integerMinJade">Integer Min Jade</Translate>
                  </Label>
                  <AvField
                    id="field-test-pager-entity-integerMinJade"
                    type="string"
                    className="form-control"
                    name="integerMinJade"
                    validate={{
                      min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="integerMaxJadeLabel" for="field-test-pager-entity-integerMaxJade">
                    <Translate contentKey="travisReactApp.fieldTestPagerEntity.integerMaxJade">Integer Max Jade</Translate>
                  </Label>
                  <AvField
                    id="field-test-pager-entity-integerMaxJade"
                    type="string"
                    className="form-control"
                    name="integerMaxJade"
                    validate={{
                      max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="longJadeLabel" for="field-test-pager-entity-longJade">
                    <Translate contentKey="travisReactApp.fieldTestPagerEntity.longJade">Long Jade</Translate>
                  </Label>
                  <AvField id="field-test-pager-entity-longJade" type="string" className="form-control" name="longJade" />
                </AvGroup>
                <AvGroup>
                  <Label id="longRequiredJadeLabel" for="field-test-pager-entity-longRequiredJade">
                    <Translate contentKey="travisReactApp.fieldTestPagerEntity.longRequiredJade">Long Required Jade</Translate>
                  </Label>
                  <AvField
                    id="field-test-pager-entity-longRequiredJade"
                    type="string"
                    className="form-control"
                    name="longRequiredJade"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="longMinJadeLabel" for="field-test-pager-entity-longMinJade">
                    <Translate contentKey="travisReactApp.fieldTestPagerEntity.longMinJade">Long Min Jade</Translate>
                  </Label>
                  <AvField
                    id="field-test-pager-entity-longMinJade"
                    type="string"
                    className="form-control"
                    name="longMinJade"
                    validate={{
                      min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="longMaxJadeLabel" for="field-test-pager-entity-longMaxJade">
                    <Translate contentKey="travisReactApp.fieldTestPagerEntity.longMaxJade">Long Max Jade</Translate>
                  </Label>
                  <AvField
                    id="field-test-pager-entity-longMaxJade"
                    type="string"
                    className="form-control"
                    name="longMaxJade"
                    validate={{
                      max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="floatJadeLabel" for="field-test-pager-entity-floatJade">
                    <Translate contentKey="travisReactApp.fieldTestPagerEntity.floatJade">Float Jade</Translate>
                  </Label>
                  <AvField id="field-test-pager-entity-floatJade" type="string" className="form-control" name="floatJade" />
                </AvGroup>
                <AvGroup>
                  <Label id="floatRequiredJadeLabel" for="field-test-pager-entity-floatRequiredJade">
                    <Translate contentKey="travisReactApp.fieldTestPagerEntity.floatRequiredJade">Float Required Jade</Translate>
                  </Label>
                  <AvField
                    id="field-test-pager-entity-floatRequiredJade"
                    type="string"
                    className="form-control"
                    name="floatRequiredJade"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="floatMinJadeLabel" for="field-test-pager-entity-floatMinJade">
                    <Translate contentKey="travisReactApp.fieldTestPagerEntity.floatMinJade">Float Min Jade</Translate>
                  </Label>
                  <AvField
                    id="field-test-pager-entity-floatMinJade"
                    type="string"
                    className="form-control"
                    name="floatMinJade"
                    validate={{
                      min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="floatMaxJadeLabel" for="field-test-pager-entity-floatMaxJade">
                    <Translate contentKey="travisReactApp.fieldTestPagerEntity.floatMaxJade">Float Max Jade</Translate>
                  </Label>
                  <AvField
                    id="field-test-pager-entity-floatMaxJade"
                    type="string"
                    className="form-control"
                    name="floatMaxJade"
                    validate={{
                      max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="doubleRequiredJadeLabel" for="field-test-pager-entity-doubleRequiredJade">
                    <Translate contentKey="travisReactApp.fieldTestPagerEntity.doubleRequiredJade">Double Required Jade</Translate>
                  </Label>
                  <AvField
                    id="field-test-pager-entity-doubleRequiredJade"
                    type="string"
                    className="form-control"
                    name="doubleRequiredJade"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="doubleMinJadeLabel" for="field-test-pager-entity-doubleMinJade">
                    <Translate contentKey="travisReactApp.fieldTestPagerEntity.doubleMinJade">Double Min Jade</Translate>
                  </Label>
                  <AvField
                    id="field-test-pager-entity-doubleMinJade"
                    type="string"
                    className="form-control"
                    name="doubleMinJade"
                    validate={{
                      min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="doubleMaxJadeLabel" for="field-test-pager-entity-doubleMaxJade">
                    <Translate contentKey="travisReactApp.fieldTestPagerEntity.doubleMaxJade">Double Max Jade</Translate>
                  </Label>
                  <AvField
                    id="field-test-pager-entity-doubleMaxJade"
                    type="string"
                    className="form-control"
                    name="doubleMaxJade"
                    validate={{
                      max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="bigDecimalRequiredJadeLabel" for="field-test-pager-entity-bigDecimalRequiredJade">
                    <Translate contentKey="travisReactApp.fieldTestPagerEntity.bigDecimalRequiredJade">Big Decimal Required Jade</Translate>
                  </Label>
                  <AvField
                    id="field-test-pager-entity-bigDecimalRequiredJade"
                    type="text"
                    name="bigDecimalRequiredJade"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="bigDecimalMinJadeLabel" for="field-test-pager-entity-bigDecimalMinJade">
                    <Translate contentKey="travisReactApp.fieldTestPagerEntity.bigDecimalMinJade">Big Decimal Min Jade</Translate>
                  </Label>
                  <AvField
                    id="field-test-pager-entity-bigDecimalMinJade"
                    type="text"
                    name="bigDecimalMinJade"
                    validate={{
                      min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="bigDecimalMaxJadeLabel" for="field-test-pager-entity-bigDecimalMaxJade">
                    <Translate contentKey="travisReactApp.fieldTestPagerEntity.bigDecimalMaxJade">Big Decimal Max Jade</Translate>
                  </Label>
                  <AvField
                    id="field-test-pager-entity-bigDecimalMaxJade"
                    type="text"
                    name="bigDecimalMaxJade"
                    validate={{
                      max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="localDateJadeLabel" for="field-test-pager-entity-localDateJade">
                    <Translate contentKey="travisReactApp.fieldTestPagerEntity.localDateJade">Local Date Jade</Translate>
                  </Label>
                  <AvField id="field-test-pager-entity-localDateJade" type="date" className="form-control" name="localDateJade" />
                </AvGroup>
                <AvGroup>
                  <Label id="localDateRequiredJadeLabel" for="field-test-pager-entity-localDateRequiredJade">
                    <Translate contentKey="travisReactApp.fieldTestPagerEntity.localDateRequiredJade">Local Date Required Jade</Translate>
                  </Label>
                  <AvField
                    id="field-test-pager-entity-localDateRequiredJade"
                    type="date"
                    className="form-control"
                    name="localDateRequiredJade"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="instantJadeLabel" for="field-test-pager-entity-instantJade">
                    <Translate contentKey="travisReactApp.fieldTestPagerEntity.instantJade">Instant Jade</Translate>
                  </Label>
                  <AvInput
                    id="field-test-pager-entity-instantJade"
                    type="datetime-local"
                    className="form-control"
                    name="instantJade"
                    placeholder={'YYYY-MM-DD HH:mm'}
                    value={isNew ? null : convertDateTimeFromServer(this.props.fieldTestPagerEntityEntity.instantJade)}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="instanteRequiredJadeLabel" for="field-test-pager-entity-instanteRequiredJade">
                    <Translate contentKey="travisReactApp.fieldTestPagerEntity.instanteRequiredJade">Instante Required Jade</Translate>
                  </Label>
                  <AvInput
                    id="field-test-pager-entity-instanteRequiredJade"
                    type="datetime-local"
                    className="form-control"
                    name="instanteRequiredJade"
                    placeholder={'YYYY-MM-DD HH:mm'}
                    value={isNew ? null : convertDateTimeFromServer(this.props.fieldTestPagerEntityEntity.instanteRequiredJade)}
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="zonedDateTimeJadeLabel" for="field-test-pager-entity-zonedDateTimeJade">
                    <Translate contentKey="travisReactApp.fieldTestPagerEntity.zonedDateTimeJade">Zoned Date Time Jade</Translate>
                  </Label>
                  <AvInput
                    id="field-test-pager-entity-zonedDateTimeJade"
                    type="datetime-local"
                    className="form-control"
                    name="zonedDateTimeJade"
                    placeholder={'YYYY-MM-DD HH:mm'}
                    value={isNew ? null : convertDateTimeFromServer(this.props.fieldTestPagerEntityEntity.zonedDateTimeJade)}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="zonedDateTimeRequiredJadeLabel" for="field-test-pager-entity-zonedDateTimeRequiredJade">
                    <Translate contentKey="travisReactApp.fieldTestPagerEntity.zonedDateTimeRequiredJade">
                      Zoned Date Time Required Jade
                    </Translate>
                  </Label>
                  <AvInput
                    id="field-test-pager-entity-zonedDateTimeRequiredJade"
                    type="datetime-local"
                    className="form-control"
                    name="zonedDateTimeRequiredJade"
                    placeholder={'YYYY-MM-DD HH:mm'}
                    value={isNew ? null : convertDateTimeFromServer(this.props.fieldTestPagerEntityEntity.zonedDateTimeRequiredJade)}
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="durationJadeLabel" for="field-test-pager-entity-durationJade">
                    <Translate contentKey="travisReactApp.fieldTestPagerEntity.durationJade">Duration Jade</Translate>
                  </Label>
                  <AvField id="field-test-pager-entity-durationJade" type="text" name="durationJade" />
                </AvGroup>
                <AvGroup>
                  <Label id="durationRequiredJadeLabel" for="field-test-pager-entity-durationRequiredJade">
                    <Translate contentKey="travisReactApp.fieldTestPagerEntity.durationRequiredJade">Duration Required Jade</Translate>
                  </Label>
                  <AvField
                    id="field-test-pager-entity-durationRequiredJade"
                    type="text"
                    name="durationRequiredJade"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="booleanJadeLabel" check>
                    <AvInput id="field-test-pager-entity-booleanJade" type="checkbox" className="form-control" name="booleanJade" />
                    <Translate contentKey="travisReactApp.fieldTestPagerEntity.booleanJade">Boolean Jade</Translate>
                  </Label>
                </AvGroup>
                <AvGroup>
                  <Label id="booleanRequiredJadeLabel" check>
                    <AvInput
                      id="field-test-pager-entity-booleanRequiredJade"
                      type="checkbox"
                      className="form-control"
                      name="booleanRequiredJade"
                    />
                    <Translate contentKey="travisReactApp.fieldTestPagerEntity.booleanRequiredJade">Boolean Required Jade</Translate>
                  </Label>
                </AvGroup>
                <AvGroup>
                  <Label id="enumJadeLabel" for="field-test-pager-entity-enumJade">
                    <Translate contentKey="travisReactApp.fieldTestPagerEntity.enumJade">Enum Jade</Translate>
                  </Label>
                  <AvInput
                    id="field-test-pager-entity-enumJade"
                    type="select"
                    className="form-control"
                    name="enumJade"
                    value={(!isNew && fieldTestPagerEntityEntity.enumJade) || 'ENUM_VALUE_1'}
                  >
                    <option value="ENUM_VALUE_1">{translate('travisReactApp.EnumFieldClass.ENUM_VALUE_1')}</option>
                    <option value="ENUM_VALUE_2">{translate('travisReactApp.EnumFieldClass.ENUM_VALUE_2')}</option>
                    <option value="ENUM_VALUE_3">{translate('travisReactApp.EnumFieldClass.ENUM_VALUE_3')}</option>
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label id="enumRequiredJadeLabel" for="field-test-pager-entity-enumRequiredJade">
                    <Translate contentKey="travisReactApp.fieldTestPagerEntity.enumRequiredJade">Enum Required Jade</Translate>
                  </Label>
                  <AvInput
                    id="field-test-pager-entity-enumRequiredJade"
                    type="select"
                    className="form-control"
                    name="enumRequiredJade"
                    value={(!isNew && fieldTestPagerEntityEntity.enumRequiredJade) || 'ENUM_VALUE_1'}
                  >
                    <option value="ENUM_VALUE_1">{translate('travisReactApp.EnumRequiredFieldClass.ENUM_VALUE_1')}</option>
                    <option value="ENUM_VALUE_2">{translate('travisReactApp.EnumRequiredFieldClass.ENUM_VALUE_2')}</option>
                    <option value="ENUM_VALUE_3">{translate('travisReactApp.EnumRequiredFieldClass.ENUM_VALUE_3')}</option>
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label id="uuidJadeLabel" for="field-test-pager-entity-uuidJade">
                    <Translate contentKey="travisReactApp.fieldTestPagerEntity.uuidJade">Uuid Jade</Translate>
                  </Label>
                  <AvField id="field-test-pager-entity-uuidJade" type="text" name="uuidJade" />
                </AvGroup>
                <AvGroup>
                  <Label id="uuidRequiredJadeLabel" for="field-test-pager-entity-uuidRequiredJade">
                    <Translate contentKey="travisReactApp.fieldTestPagerEntity.uuidRequiredJade">Uuid Required Jade</Translate>
                  </Label>
                  <AvField
                    id="field-test-pager-entity-uuidRequiredJade"
                    type="text"
                    name="uuidRequiredJade"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteImageJadeLabel" for="byteImageJade">
                      <Translate contentKey="travisReactApp.fieldTestPagerEntity.byteImageJade">Byte Image Jade</Translate>
                    </Label>
                    <br />
                    {byteImageJade ? (
                      <div>
                        <a onClick={openFile(byteImageJadeContentType, byteImageJade)}>
                          <img src={`data:${byteImageJadeContentType};base64,${byteImageJade}`} style={{ maxHeight: '100px' }} />
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteImageJadeContentType}, {byteSize(byteImageJade)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteImageJade')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_byteImageJade" type="file" onChange={this.onBlobChange(true, 'byteImageJade')} accept="image/*" />
                    <AvInput type="hidden" name="byteImageJade" value={byteImageJade} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteImageRequiredJadeLabel" for="byteImageRequiredJade">
                      <Translate contentKey="travisReactApp.fieldTestPagerEntity.byteImageRequiredJade">Byte Image Required Jade</Translate>
                    </Label>
                    <br />
                    {byteImageRequiredJade ? (
                      <div>
                        <a onClick={openFile(byteImageRequiredJadeContentType, byteImageRequiredJade)}>
                          <img
                            src={`data:${byteImageRequiredJadeContentType};base64,${byteImageRequiredJade}`}
                            style={{ maxHeight: '100px' }}
                          />
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteImageRequiredJadeContentType}, {byteSize(byteImageRequiredJade)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteImageRequiredJade')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input
                      id="file_byteImageRequiredJade"
                      type="file"
                      onChange={this.onBlobChange(true, 'byteImageRequiredJade')}
                      accept="image/*"
                    />
                    <AvInput
                      type="hidden"
                      name="byteImageRequiredJade"
                      value={byteImageRequiredJade}
                      validate={{
                        required: { value: true, errorMessage: translate('entity.validation.required') }
                      }}
                    />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteImageMinbytesJadeLabel" for="byteImageMinbytesJade">
                      <Translate contentKey="travisReactApp.fieldTestPagerEntity.byteImageMinbytesJade">Byte Image Minbytes Jade</Translate>
                    </Label>
                    <br />
                    {byteImageMinbytesJade ? (
                      <div>
                        <a onClick={openFile(byteImageMinbytesJadeContentType, byteImageMinbytesJade)}>
                          <img
                            src={`data:${byteImageMinbytesJadeContentType};base64,${byteImageMinbytesJade}`}
                            style={{ maxHeight: '100px' }}
                          />
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteImageMinbytesJadeContentType}, {byteSize(byteImageMinbytesJade)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteImageMinbytesJade')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input
                      id="file_byteImageMinbytesJade"
                      type="file"
                      onChange={this.onBlobChange(true, 'byteImageMinbytesJade')}
                      accept="image/*"
                    />
                    <AvInput type="hidden" name="byteImageMinbytesJade" value={byteImageMinbytesJade} validate={{}} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteImageMaxbytesJadeLabel" for="byteImageMaxbytesJade">
                      <Translate contentKey="travisReactApp.fieldTestPagerEntity.byteImageMaxbytesJade">Byte Image Maxbytes Jade</Translate>
                    </Label>
                    <br />
                    {byteImageMaxbytesJade ? (
                      <div>
                        <a onClick={openFile(byteImageMaxbytesJadeContentType, byteImageMaxbytesJade)}>
                          <img
                            src={`data:${byteImageMaxbytesJadeContentType};base64,${byteImageMaxbytesJade}`}
                            style={{ maxHeight: '100px' }}
                          />
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteImageMaxbytesJadeContentType}, {byteSize(byteImageMaxbytesJade)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteImageMaxbytesJade')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input
                      id="file_byteImageMaxbytesJade"
                      type="file"
                      onChange={this.onBlobChange(true, 'byteImageMaxbytesJade')}
                      accept="image/*"
                    />
                    <AvInput type="hidden" name="byteImageMaxbytesJade" value={byteImageMaxbytesJade} validate={{}} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteAnyJadeLabel" for="byteAnyJade">
                      <Translate contentKey="travisReactApp.fieldTestPagerEntity.byteAnyJade">Byte Any Jade</Translate>
                    </Label>
                    <br />
                    {byteAnyJade ? (
                      <div>
                        <a onClick={openFile(byteAnyJadeContentType, byteAnyJade)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteAnyJadeContentType}, {byteSize(byteAnyJade)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteAnyJade')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_byteAnyJade" type="file" onChange={this.onBlobChange(false, 'byteAnyJade')} />
                    <AvInput type="hidden" name="byteAnyJade" value={byteAnyJade} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteAnyRequiredJadeLabel" for="byteAnyRequiredJade">
                      <Translate contentKey="travisReactApp.fieldTestPagerEntity.byteAnyRequiredJade">Byte Any Required Jade</Translate>
                    </Label>
                    <br />
                    {byteAnyRequiredJade ? (
                      <div>
                        <a onClick={openFile(byteAnyRequiredJadeContentType, byteAnyRequiredJade)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteAnyRequiredJadeContentType}, {byteSize(byteAnyRequiredJade)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteAnyRequiredJade')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_byteAnyRequiredJade" type="file" onChange={this.onBlobChange(false, 'byteAnyRequiredJade')} />
                    <AvInput
                      type="hidden"
                      name="byteAnyRequiredJade"
                      value={byteAnyRequiredJade}
                      validate={{
                        required: { value: true, errorMessage: translate('entity.validation.required') }
                      }}
                    />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteAnyMinbytesJadeLabel" for="byteAnyMinbytesJade">
                      <Translate contentKey="travisReactApp.fieldTestPagerEntity.byteAnyMinbytesJade">Byte Any Minbytes Jade</Translate>
                    </Label>
                    <br />
                    {byteAnyMinbytesJade ? (
                      <div>
                        <a onClick={openFile(byteAnyMinbytesJadeContentType, byteAnyMinbytesJade)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteAnyMinbytesJadeContentType}, {byteSize(byteAnyMinbytesJade)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteAnyMinbytesJade')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_byteAnyMinbytesJade" type="file" onChange={this.onBlobChange(false, 'byteAnyMinbytesJade')} />
                    <AvInput type="hidden" name="byteAnyMinbytesJade" value={byteAnyMinbytesJade} validate={{}} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteAnyMaxbytesJadeLabel" for="byteAnyMaxbytesJade">
                      <Translate contentKey="travisReactApp.fieldTestPagerEntity.byteAnyMaxbytesJade">Byte Any Maxbytes Jade</Translate>
                    </Label>
                    <br />
                    {byteAnyMaxbytesJade ? (
                      <div>
                        <a onClick={openFile(byteAnyMaxbytesJadeContentType, byteAnyMaxbytesJade)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteAnyMaxbytesJadeContentType}, {byteSize(byteAnyMaxbytesJade)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteAnyMaxbytesJade')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_byteAnyMaxbytesJade" type="file" onChange={this.onBlobChange(false, 'byteAnyMaxbytesJade')} />
                    <AvInput type="hidden" name="byteAnyMaxbytesJade" value={byteAnyMaxbytesJade} validate={{}} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <Label id="byteTextJadeLabel" for="field-test-pager-entity-byteTextJade">
                    <Translate contentKey="travisReactApp.fieldTestPagerEntity.byteTextJade">Byte Text Jade</Translate>
                  </Label>
                  <AvInput id="field-test-pager-entity-byteTextJade" type="textarea" name="byteTextJade" />
                </AvGroup>
                <AvGroup>
                  <Label id="byteTextRequiredJadeLabel" for="field-test-pager-entity-byteTextRequiredJade">
                    <Translate contentKey="travisReactApp.fieldTestPagerEntity.byteTextRequiredJade">Byte Text Required Jade</Translate>
                  </Label>
                  <AvInput
                    id="field-test-pager-entity-byteTextRequiredJade"
                    type="textarea"
                    name="byteTextRequiredJade"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/field-test-pager-entity" replace color="info">
                  <FontAwesomeIcon icon="arrow-left" />
                  &nbsp;
                  <span className="d-none d-md-inline">
                    <Translate contentKey="entity.action.back">Back</Translate>
                  </span>
                </Button>
                &nbsp;
                <Button color="primary" id="save-entity" type="submit" disabled={updating}>
                  <FontAwesomeIcon icon="save" />
                  &nbsp;
                  <Translate contentKey="entity.action.save">Save</Translate>
                </Button>
              </AvForm>
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (storeState: IRootState) => ({
  fieldTestPagerEntityEntity: storeState.fieldTestPagerEntity.entity,
  loading: storeState.fieldTestPagerEntity.loading,
  updating: storeState.fieldTestPagerEntity.updating,
  updateSuccess: storeState.fieldTestPagerEntity.updateSuccess
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  setBlob,
  createEntity,
  reset
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FieldTestPagerEntityUpdate);
