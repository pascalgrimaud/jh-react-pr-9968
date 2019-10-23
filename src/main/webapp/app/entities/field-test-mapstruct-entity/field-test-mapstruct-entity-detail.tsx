import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction, openFile, byteSize, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './field-test-mapstruct-entity.reducer';
import { IFieldTestMapstructEntity } from 'app/shared/model/field-test-mapstruct-entity.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IFieldTestMapstructEntityDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class FieldTestMapstructEntityDetail extends React.Component<IFieldTestMapstructEntityDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { fieldTestMapstructEntityEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="travisReactApp.fieldTestMapstructEntity.detail.title">FieldTestMapstructEntity</Translate> [
            <b>{fieldTestMapstructEntityEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="stringEva">
                <Translate contentKey="travisReactApp.fieldTestMapstructEntity.stringEva">String Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.stringEva}</dd>
            <dt>
              <span id="stringRequiredEva">
                <Translate contentKey="travisReactApp.fieldTestMapstructEntity.stringRequiredEva">String Required Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.stringRequiredEva}</dd>
            <dt>
              <span id="stringMinlengthEva">
                <Translate contentKey="travisReactApp.fieldTestMapstructEntity.stringMinlengthEva">String Minlength Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.stringMinlengthEva}</dd>
            <dt>
              <span id="stringMaxlengthEva">
                <Translate contentKey="travisReactApp.fieldTestMapstructEntity.stringMaxlengthEva">String Maxlength Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.stringMaxlengthEva}</dd>
            <dt>
              <span id="stringPatternEva">
                <Translate contentKey="travisReactApp.fieldTestMapstructEntity.stringPatternEva">String Pattern Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.stringPatternEva}</dd>
            <dt>
              <span id="integerEva">
                <Translate contentKey="travisReactApp.fieldTestMapstructEntity.integerEva">Integer Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.integerEva}</dd>
            <dt>
              <span id="integerRequiredEva">
                <Translate contentKey="travisReactApp.fieldTestMapstructEntity.integerRequiredEva">Integer Required Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.integerRequiredEva}</dd>
            <dt>
              <span id="integerMinEva">
                <Translate contentKey="travisReactApp.fieldTestMapstructEntity.integerMinEva">Integer Min Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.integerMinEva}</dd>
            <dt>
              <span id="integerMaxEva">
                <Translate contentKey="travisReactApp.fieldTestMapstructEntity.integerMaxEva">Integer Max Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.integerMaxEva}</dd>
            <dt>
              <span id="longEva">
                <Translate contentKey="travisReactApp.fieldTestMapstructEntity.longEva">Long Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.longEva}</dd>
            <dt>
              <span id="longRequiredEva">
                <Translate contentKey="travisReactApp.fieldTestMapstructEntity.longRequiredEva">Long Required Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.longRequiredEva}</dd>
            <dt>
              <span id="longMinEva">
                <Translate contentKey="travisReactApp.fieldTestMapstructEntity.longMinEva">Long Min Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.longMinEva}</dd>
            <dt>
              <span id="longMaxEva">
                <Translate contentKey="travisReactApp.fieldTestMapstructEntity.longMaxEva">Long Max Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.longMaxEva}</dd>
            <dt>
              <span id="floatEva">
                <Translate contentKey="travisReactApp.fieldTestMapstructEntity.floatEva">Float Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.floatEva}</dd>
            <dt>
              <span id="floatRequiredEva">
                <Translate contentKey="travisReactApp.fieldTestMapstructEntity.floatRequiredEva">Float Required Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.floatRequiredEva}</dd>
            <dt>
              <span id="floatMinEva">
                <Translate contentKey="travisReactApp.fieldTestMapstructEntity.floatMinEva">Float Min Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.floatMinEva}</dd>
            <dt>
              <span id="floatMaxEva">
                <Translate contentKey="travisReactApp.fieldTestMapstructEntity.floatMaxEva">Float Max Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.floatMaxEva}</dd>
            <dt>
              <span id="doubleRequiredEva">
                <Translate contentKey="travisReactApp.fieldTestMapstructEntity.doubleRequiredEva">Double Required Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.doubleRequiredEva}</dd>
            <dt>
              <span id="doubleMinEva">
                <Translate contentKey="travisReactApp.fieldTestMapstructEntity.doubleMinEva">Double Min Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.doubleMinEva}</dd>
            <dt>
              <span id="doubleMaxEva">
                <Translate contentKey="travisReactApp.fieldTestMapstructEntity.doubleMaxEva">Double Max Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.doubleMaxEva}</dd>
            <dt>
              <span id="bigDecimalRequiredEva">
                <Translate contentKey="travisReactApp.fieldTestMapstructEntity.bigDecimalRequiredEva">Big Decimal Required Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.bigDecimalRequiredEva}</dd>
            <dt>
              <span id="bigDecimalMinEva">
                <Translate contentKey="travisReactApp.fieldTestMapstructEntity.bigDecimalMinEva">Big Decimal Min Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.bigDecimalMinEva}</dd>
            <dt>
              <span id="bigDecimalMaxEva">
                <Translate contentKey="travisReactApp.fieldTestMapstructEntity.bigDecimalMaxEva">Big Decimal Max Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.bigDecimalMaxEva}</dd>
            <dt>
              <span id="localDateEva">
                <Translate contentKey="travisReactApp.fieldTestMapstructEntity.localDateEva">Local Date Eva</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={fieldTestMapstructEntityEntity.localDateEva} type="date" format={APP_LOCAL_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="localDateRequiredEva">
                <Translate contentKey="travisReactApp.fieldTestMapstructEntity.localDateRequiredEva">Local Date Required Eva</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={fieldTestMapstructEntityEntity.localDateRequiredEva} type="date" format={APP_LOCAL_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="instantEva">
                <Translate contentKey="travisReactApp.fieldTestMapstructEntity.instantEva">Instant Eva</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={fieldTestMapstructEntityEntity.instantEva} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="instanteRequiredEva">
                <Translate contentKey="travisReactApp.fieldTestMapstructEntity.instanteRequiredEva">Instante Required Eva</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={fieldTestMapstructEntityEntity.instanteRequiredEva} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="zonedDateTimeEva">
                <Translate contentKey="travisReactApp.fieldTestMapstructEntity.zonedDateTimeEva">Zoned Date Time Eva</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={fieldTestMapstructEntityEntity.zonedDateTimeEva} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="zonedDateTimeRequiredEva">
                <Translate contentKey="travisReactApp.fieldTestMapstructEntity.zonedDateTimeRequiredEva">
                  Zoned Date Time Required Eva
                </Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={fieldTestMapstructEntityEntity.zonedDateTimeRequiredEva} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="durationEva">
                <Translate contentKey="travisReactApp.fieldTestMapstructEntity.durationEva">Duration Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.durationEva}</dd>
            <dt>
              <span id="durationRequiredEva">
                <Translate contentKey="travisReactApp.fieldTestMapstructEntity.durationRequiredEva">Duration Required Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.durationRequiredEva}</dd>
            <dt>
              <span id="booleanEva">
                <Translate contentKey="travisReactApp.fieldTestMapstructEntity.booleanEva">Boolean Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.booleanEva ? 'true' : 'false'}</dd>
            <dt>
              <span id="booleanRequiredEva">
                <Translate contentKey="travisReactApp.fieldTestMapstructEntity.booleanRequiredEva">Boolean Required Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.booleanRequiredEva ? 'true' : 'false'}</dd>
            <dt>
              <span id="enumEva">
                <Translate contentKey="travisReactApp.fieldTestMapstructEntity.enumEva">Enum Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.enumEva}</dd>
            <dt>
              <span id="enumRequiredEva">
                <Translate contentKey="travisReactApp.fieldTestMapstructEntity.enumRequiredEva">Enum Required Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.enumRequiredEva}</dd>
            <dt>
              <span id="uuidEva">
                <Translate contentKey="travisReactApp.fieldTestMapstructEntity.uuidEva">Uuid Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.uuidEva}</dd>
            <dt>
              <span id="uuidRequiredEva">
                <Translate contentKey="travisReactApp.fieldTestMapstructEntity.uuidRequiredEva">Uuid Required Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.uuidRequiredEva}</dd>
            <dt>
              <span id="byteImageEva">
                <Translate contentKey="travisReactApp.fieldTestMapstructEntity.byteImageEva">Byte Image Eva</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestMapstructEntityEntity.byteImageEva ? (
                <div>
                  <a
                    onClick={openFile(fieldTestMapstructEntityEntity.byteImageEvaContentType, fieldTestMapstructEntityEntity.byteImageEva)}
                  >
                    <img
                      src={`data:${fieldTestMapstructEntityEntity.byteImageEvaContentType};base64,${
                        fieldTestMapstructEntityEntity.byteImageEva
                      }`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                  <span>
                    {fieldTestMapstructEntityEntity.byteImageEvaContentType}, {byteSize(fieldTestMapstructEntityEntity.byteImageEva)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteImageRequiredEva">
                <Translate contentKey="travisReactApp.fieldTestMapstructEntity.byteImageRequiredEva">Byte Image Required Eva</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestMapstructEntityEntity.byteImageRequiredEva ? (
                <div>
                  <a
                    onClick={openFile(
                      fieldTestMapstructEntityEntity.byteImageRequiredEvaContentType,
                      fieldTestMapstructEntityEntity.byteImageRequiredEva
                    )}
                  >
                    <img
                      src={`data:${fieldTestMapstructEntityEntity.byteImageRequiredEvaContentType};base64,${
                        fieldTestMapstructEntityEntity.byteImageRequiredEva
                      }`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                  <span>
                    {fieldTestMapstructEntityEntity.byteImageRequiredEvaContentType},{' '}
                    {byteSize(fieldTestMapstructEntityEntity.byteImageRequiredEva)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteImageMinbytesEva">
                <Translate contentKey="travisReactApp.fieldTestMapstructEntity.byteImageMinbytesEva">Byte Image Minbytes Eva</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestMapstructEntityEntity.byteImageMinbytesEva ? (
                <div>
                  <a
                    onClick={openFile(
                      fieldTestMapstructEntityEntity.byteImageMinbytesEvaContentType,
                      fieldTestMapstructEntityEntity.byteImageMinbytesEva
                    )}
                  >
                    <img
                      src={`data:${fieldTestMapstructEntityEntity.byteImageMinbytesEvaContentType};base64,${
                        fieldTestMapstructEntityEntity.byteImageMinbytesEva
                      }`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                  <span>
                    {fieldTestMapstructEntityEntity.byteImageMinbytesEvaContentType},{' '}
                    {byteSize(fieldTestMapstructEntityEntity.byteImageMinbytesEva)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteImageMaxbytesEva">
                <Translate contentKey="travisReactApp.fieldTestMapstructEntity.byteImageMaxbytesEva">Byte Image Maxbytes Eva</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestMapstructEntityEntity.byteImageMaxbytesEva ? (
                <div>
                  <a
                    onClick={openFile(
                      fieldTestMapstructEntityEntity.byteImageMaxbytesEvaContentType,
                      fieldTestMapstructEntityEntity.byteImageMaxbytesEva
                    )}
                  >
                    <img
                      src={`data:${fieldTestMapstructEntityEntity.byteImageMaxbytesEvaContentType};base64,${
                        fieldTestMapstructEntityEntity.byteImageMaxbytesEva
                      }`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                  <span>
                    {fieldTestMapstructEntityEntity.byteImageMaxbytesEvaContentType},{' '}
                    {byteSize(fieldTestMapstructEntityEntity.byteImageMaxbytesEva)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteAnyEva">
                <Translate contentKey="travisReactApp.fieldTestMapstructEntity.byteAnyEva">Byte Any Eva</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestMapstructEntityEntity.byteAnyEva ? (
                <div>
                  <a onClick={openFile(fieldTestMapstructEntityEntity.byteAnyEvaContentType, fieldTestMapstructEntityEntity.byteAnyEva)}>
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                  <span>
                    {fieldTestMapstructEntityEntity.byteAnyEvaContentType}, {byteSize(fieldTestMapstructEntityEntity.byteAnyEva)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteAnyRequiredEva">
                <Translate contentKey="travisReactApp.fieldTestMapstructEntity.byteAnyRequiredEva">Byte Any Required Eva</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestMapstructEntityEntity.byteAnyRequiredEva ? (
                <div>
                  <a
                    onClick={openFile(
                      fieldTestMapstructEntityEntity.byteAnyRequiredEvaContentType,
                      fieldTestMapstructEntityEntity.byteAnyRequiredEva
                    )}
                  >
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                  <span>
                    {fieldTestMapstructEntityEntity.byteAnyRequiredEvaContentType},{' '}
                    {byteSize(fieldTestMapstructEntityEntity.byteAnyRequiredEva)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteAnyMinbytesEva">
                <Translate contentKey="travisReactApp.fieldTestMapstructEntity.byteAnyMinbytesEva">Byte Any Minbytes Eva</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestMapstructEntityEntity.byteAnyMinbytesEva ? (
                <div>
                  <a
                    onClick={openFile(
                      fieldTestMapstructEntityEntity.byteAnyMinbytesEvaContentType,
                      fieldTestMapstructEntityEntity.byteAnyMinbytesEva
                    )}
                  >
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                  <span>
                    {fieldTestMapstructEntityEntity.byteAnyMinbytesEvaContentType},{' '}
                    {byteSize(fieldTestMapstructEntityEntity.byteAnyMinbytesEva)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteAnyMaxbytesEva">
                <Translate contentKey="travisReactApp.fieldTestMapstructEntity.byteAnyMaxbytesEva">Byte Any Maxbytes Eva</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestMapstructEntityEntity.byteAnyMaxbytesEva ? (
                <div>
                  <a
                    onClick={openFile(
                      fieldTestMapstructEntityEntity.byteAnyMaxbytesEvaContentType,
                      fieldTestMapstructEntityEntity.byteAnyMaxbytesEva
                    )}
                  >
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                  <span>
                    {fieldTestMapstructEntityEntity.byteAnyMaxbytesEvaContentType},{' '}
                    {byteSize(fieldTestMapstructEntityEntity.byteAnyMaxbytesEva)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteTextEva">
                <Translate contentKey="travisReactApp.fieldTestMapstructEntity.byteTextEva">Byte Text Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.byteTextEva}</dd>
            <dt>
              <span id="byteTextRequiredEva">
                <Translate contentKey="travisReactApp.fieldTestMapstructEntity.byteTextRequiredEva">Byte Text Required Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.byteTextRequiredEva}</dd>
          </dl>
          <Button tag={Link} to="/field-test-mapstruct-entity" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>
          &nbsp;
          <Button tag={Link} to={`/field-test-mapstruct-entity/${fieldTestMapstructEntityEntity.id}/edit`} replace color="primary">
            <FontAwesomeIcon icon="pencil-alt" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.edit">Edit</Translate>
            </span>
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ fieldTestMapstructEntity }: IRootState) => ({
  fieldTestMapstructEntityEntity: fieldTestMapstructEntity.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FieldTestMapstructEntityDetail);
