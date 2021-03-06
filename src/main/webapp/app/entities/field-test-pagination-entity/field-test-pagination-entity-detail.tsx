import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction, openFile, byteSize, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './field-test-pagination-entity.reducer';
import { IFieldTestPaginationEntity } from 'app/shared/model/field-test-pagination-entity.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IFieldTestPaginationEntityDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class FieldTestPaginationEntityDetail extends React.Component<IFieldTestPaginationEntityDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { fieldTestPaginationEntityEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="travisReactApp.fieldTestPaginationEntity.detail.title">FieldTestPaginationEntity</Translate> [
            <b>{fieldTestPaginationEntityEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="stringAlice">
                <Translate contentKey="travisReactApp.fieldTestPaginationEntity.stringAlice">String Alice</Translate>
              </span>
            </dt>
            <dd>{fieldTestPaginationEntityEntity.stringAlice}</dd>
            <dt>
              <span id="stringRequiredAlice">
                <Translate contentKey="travisReactApp.fieldTestPaginationEntity.stringRequiredAlice">String Required Alice</Translate>
              </span>
            </dt>
            <dd>{fieldTestPaginationEntityEntity.stringRequiredAlice}</dd>
            <dt>
              <span id="stringMinlengthAlice">
                <Translate contentKey="travisReactApp.fieldTestPaginationEntity.stringMinlengthAlice">String Minlength Alice</Translate>
              </span>
            </dt>
            <dd>{fieldTestPaginationEntityEntity.stringMinlengthAlice}</dd>
            <dt>
              <span id="stringMaxlengthAlice">
                <Translate contentKey="travisReactApp.fieldTestPaginationEntity.stringMaxlengthAlice">String Maxlength Alice</Translate>
              </span>
            </dt>
            <dd>{fieldTestPaginationEntityEntity.stringMaxlengthAlice}</dd>
            <dt>
              <span id="stringPatternAlice">
                <Translate contentKey="travisReactApp.fieldTestPaginationEntity.stringPatternAlice">String Pattern Alice</Translate>
              </span>
            </dt>
            <dd>{fieldTestPaginationEntityEntity.stringPatternAlice}</dd>
            <dt>
              <span id="integerAlice">
                <Translate contentKey="travisReactApp.fieldTestPaginationEntity.integerAlice">Integer Alice</Translate>
              </span>
            </dt>
            <dd>{fieldTestPaginationEntityEntity.integerAlice}</dd>
            <dt>
              <span id="integerRequiredAlice">
                <Translate contentKey="travisReactApp.fieldTestPaginationEntity.integerRequiredAlice">Integer Required Alice</Translate>
              </span>
            </dt>
            <dd>{fieldTestPaginationEntityEntity.integerRequiredAlice}</dd>
            <dt>
              <span id="integerMinAlice">
                <Translate contentKey="travisReactApp.fieldTestPaginationEntity.integerMinAlice">Integer Min Alice</Translate>
              </span>
            </dt>
            <dd>{fieldTestPaginationEntityEntity.integerMinAlice}</dd>
            <dt>
              <span id="integerMaxAlice">
                <Translate contentKey="travisReactApp.fieldTestPaginationEntity.integerMaxAlice">Integer Max Alice</Translate>
              </span>
            </dt>
            <dd>{fieldTestPaginationEntityEntity.integerMaxAlice}</dd>
            <dt>
              <span id="longAlice">
                <Translate contentKey="travisReactApp.fieldTestPaginationEntity.longAlice">Long Alice</Translate>
              </span>
            </dt>
            <dd>{fieldTestPaginationEntityEntity.longAlice}</dd>
            <dt>
              <span id="longRequiredAlice">
                <Translate contentKey="travisReactApp.fieldTestPaginationEntity.longRequiredAlice">Long Required Alice</Translate>
              </span>
            </dt>
            <dd>{fieldTestPaginationEntityEntity.longRequiredAlice}</dd>
            <dt>
              <span id="longMinAlice">
                <Translate contentKey="travisReactApp.fieldTestPaginationEntity.longMinAlice">Long Min Alice</Translate>
              </span>
            </dt>
            <dd>{fieldTestPaginationEntityEntity.longMinAlice}</dd>
            <dt>
              <span id="longMaxAlice">
                <Translate contentKey="travisReactApp.fieldTestPaginationEntity.longMaxAlice">Long Max Alice</Translate>
              </span>
            </dt>
            <dd>{fieldTestPaginationEntityEntity.longMaxAlice}</dd>
            <dt>
              <span id="floatAlice">
                <Translate contentKey="travisReactApp.fieldTestPaginationEntity.floatAlice">Float Alice</Translate>
              </span>
            </dt>
            <dd>{fieldTestPaginationEntityEntity.floatAlice}</dd>
            <dt>
              <span id="floatRequiredAlice">
                <Translate contentKey="travisReactApp.fieldTestPaginationEntity.floatRequiredAlice">Float Required Alice</Translate>
              </span>
            </dt>
            <dd>{fieldTestPaginationEntityEntity.floatRequiredAlice}</dd>
            <dt>
              <span id="floatMinAlice">
                <Translate contentKey="travisReactApp.fieldTestPaginationEntity.floatMinAlice">Float Min Alice</Translate>
              </span>
            </dt>
            <dd>{fieldTestPaginationEntityEntity.floatMinAlice}</dd>
            <dt>
              <span id="floatMaxAlice">
                <Translate contentKey="travisReactApp.fieldTestPaginationEntity.floatMaxAlice">Float Max Alice</Translate>
              </span>
            </dt>
            <dd>{fieldTestPaginationEntityEntity.floatMaxAlice}</dd>
            <dt>
              <span id="doubleRequiredAlice">
                <Translate contentKey="travisReactApp.fieldTestPaginationEntity.doubleRequiredAlice">Double Required Alice</Translate>
              </span>
            </dt>
            <dd>{fieldTestPaginationEntityEntity.doubleRequiredAlice}</dd>
            <dt>
              <span id="doubleMinAlice">
                <Translate contentKey="travisReactApp.fieldTestPaginationEntity.doubleMinAlice">Double Min Alice</Translate>
              </span>
            </dt>
            <dd>{fieldTestPaginationEntityEntity.doubleMinAlice}</dd>
            <dt>
              <span id="doubleMaxAlice">
                <Translate contentKey="travisReactApp.fieldTestPaginationEntity.doubleMaxAlice">Double Max Alice</Translate>
              </span>
            </dt>
            <dd>{fieldTestPaginationEntityEntity.doubleMaxAlice}</dd>
            <dt>
              <span id="bigDecimalRequiredAlice">
                <Translate contentKey="travisReactApp.fieldTestPaginationEntity.bigDecimalRequiredAlice">
                  Big Decimal Required Alice
                </Translate>
              </span>
            </dt>
            <dd>{fieldTestPaginationEntityEntity.bigDecimalRequiredAlice}</dd>
            <dt>
              <span id="bigDecimalMinAlice">
                <Translate contentKey="travisReactApp.fieldTestPaginationEntity.bigDecimalMinAlice">Big Decimal Min Alice</Translate>
              </span>
            </dt>
            <dd>{fieldTestPaginationEntityEntity.bigDecimalMinAlice}</dd>
            <dt>
              <span id="bigDecimalMaxAlice">
                <Translate contentKey="travisReactApp.fieldTestPaginationEntity.bigDecimalMaxAlice">Big Decimal Max Alice</Translate>
              </span>
            </dt>
            <dd>{fieldTestPaginationEntityEntity.bigDecimalMaxAlice}</dd>
            <dt>
              <span id="localDateAlice">
                <Translate contentKey="travisReactApp.fieldTestPaginationEntity.localDateAlice">Local Date Alice</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={fieldTestPaginationEntityEntity.localDateAlice} type="date" format={APP_LOCAL_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="localDateRequiredAlice">
                <Translate contentKey="travisReactApp.fieldTestPaginationEntity.localDateRequiredAlice">
                  Local Date Required Alice
                </Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={fieldTestPaginationEntityEntity.localDateRequiredAlice} type="date" format={APP_LOCAL_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="instantAlice">
                <Translate contentKey="travisReactApp.fieldTestPaginationEntity.instantAlice">Instant Alice</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={fieldTestPaginationEntityEntity.instantAlice} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="instanteRequiredAlice">
                <Translate contentKey="travisReactApp.fieldTestPaginationEntity.instanteRequiredAlice">Instante Required Alice</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={fieldTestPaginationEntityEntity.instanteRequiredAlice} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="zonedDateTimeAlice">
                <Translate contentKey="travisReactApp.fieldTestPaginationEntity.zonedDateTimeAlice">Zoned Date Time Alice</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={fieldTestPaginationEntityEntity.zonedDateTimeAlice} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="zonedDateTimeRequiredAlice">
                <Translate contentKey="travisReactApp.fieldTestPaginationEntity.zonedDateTimeRequiredAlice">
                  Zoned Date Time Required Alice
                </Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={fieldTestPaginationEntityEntity.zonedDateTimeRequiredAlice} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="durationAlice">
                <Translate contentKey="travisReactApp.fieldTestPaginationEntity.durationAlice">Duration Alice</Translate>
              </span>
            </dt>
            <dd>{fieldTestPaginationEntityEntity.durationAlice}</dd>
            <dt>
              <span id="durationRequiredAlice">
                <Translate contentKey="travisReactApp.fieldTestPaginationEntity.durationRequiredAlice">Duration Required Alice</Translate>
              </span>
            </dt>
            <dd>{fieldTestPaginationEntityEntity.durationRequiredAlice}</dd>
            <dt>
              <span id="booleanAlice">
                <Translate contentKey="travisReactApp.fieldTestPaginationEntity.booleanAlice">Boolean Alice</Translate>
              </span>
            </dt>
            <dd>{fieldTestPaginationEntityEntity.booleanAlice ? 'true' : 'false'}</dd>
            <dt>
              <span id="booleanRequiredAlice">
                <Translate contentKey="travisReactApp.fieldTestPaginationEntity.booleanRequiredAlice">Boolean Required Alice</Translate>
              </span>
            </dt>
            <dd>{fieldTestPaginationEntityEntity.booleanRequiredAlice ? 'true' : 'false'}</dd>
            <dt>
              <span id="enumAlice">
                <Translate contentKey="travisReactApp.fieldTestPaginationEntity.enumAlice">Enum Alice</Translate>
              </span>
            </dt>
            <dd>{fieldTestPaginationEntityEntity.enumAlice}</dd>
            <dt>
              <span id="enumRequiredAlice">
                <Translate contentKey="travisReactApp.fieldTestPaginationEntity.enumRequiredAlice">Enum Required Alice</Translate>
              </span>
            </dt>
            <dd>{fieldTestPaginationEntityEntity.enumRequiredAlice}</dd>
            <dt>
              <span id="uuidAlice">
                <Translate contentKey="travisReactApp.fieldTestPaginationEntity.uuidAlice">Uuid Alice</Translate>
              </span>
            </dt>
            <dd>{fieldTestPaginationEntityEntity.uuidAlice}</dd>
            <dt>
              <span id="uuidRequiredAlice">
                <Translate contentKey="travisReactApp.fieldTestPaginationEntity.uuidRequiredAlice">Uuid Required Alice</Translate>
              </span>
            </dt>
            <dd>{fieldTestPaginationEntityEntity.uuidRequiredAlice}</dd>
            <dt>
              <span id="byteImageAlice">
                <Translate contentKey="travisReactApp.fieldTestPaginationEntity.byteImageAlice">Byte Image Alice</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestPaginationEntityEntity.byteImageAlice ? (
                <div>
                  <a
                    onClick={openFile(
                      fieldTestPaginationEntityEntity.byteImageAliceContentType,
                      fieldTestPaginationEntityEntity.byteImageAlice
                    )}
                  >
                    <img
                      src={`data:${fieldTestPaginationEntityEntity.byteImageAliceContentType};base64,${
                        fieldTestPaginationEntityEntity.byteImageAlice
                      }`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                  <span>
                    {fieldTestPaginationEntityEntity.byteImageAliceContentType}, {byteSize(fieldTestPaginationEntityEntity.byteImageAlice)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteImageRequiredAlice">
                <Translate contentKey="travisReactApp.fieldTestPaginationEntity.byteImageRequiredAlice">
                  Byte Image Required Alice
                </Translate>
              </span>
            </dt>
            <dd>
              {fieldTestPaginationEntityEntity.byteImageRequiredAlice ? (
                <div>
                  <a
                    onClick={openFile(
                      fieldTestPaginationEntityEntity.byteImageRequiredAliceContentType,
                      fieldTestPaginationEntityEntity.byteImageRequiredAlice
                    )}
                  >
                    <img
                      src={`data:${fieldTestPaginationEntityEntity.byteImageRequiredAliceContentType};base64,${
                        fieldTestPaginationEntityEntity.byteImageRequiredAlice
                      }`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                  <span>
                    {fieldTestPaginationEntityEntity.byteImageRequiredAliceContentType},{' '}
                    {byteSize(fieldTestPaginationEntityEntity.byteImageRequiredAlice)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteImageMinbytesAlice">
                <Translate contentKey="travisReactApp.fieldTestPaginationEntity.byteImageMinbytesAlice">
                  Byte Image Minbytes Alice
                </Translate>
              </span>
            </dt>
            <dd>
              {fieldTestPaginationEntityEntity.byteImageMinbytesAlice ? (
                <div>
                  <a
                    onClick={openFile(
                      fieldTestPaginationEntityEntity.byteImageMinbytesAliceContentType,
                      fieldTestPaginationEntityEntity.byteImageMinbytesAlice
                    )}
                  >
                    <img
                      src={`data:${fieldTestPaginationEntityEntity.byteImageMinbytesAliceContentType};base64,${
                        fieldTestPaginationEntityEntity.byteImageMinbytesAlice
                      }`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                  <span>
                    {fieldTestPaginationEntityEntity.byteImageMinbytesAliceContentType},{' '}
                    {byteSize(fieldTestPaginationEntityEntity.byteImageMinbytesAlice)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteImageMaxbytesAlice">
                <Translate contentKey="travisReactApp.fieldTestPaginationEntity.byteImageMaxbytesAlice">
                  Byte Image Maxbytes Alice
                </Translate>
              </span>
            </dt>
            <dd>
              {fieldTestPaginationEntityEntity.byteImageMaxbytesAlice ? (
                <div>
                  <a
                    onClick={openFile(
                      fieldTestPaginationEntityEntity.byteImageMaxbytesAliceContentType,
                      fieldTestPaginationEntityEntity.byteImageMaxbytesAlice
                    )}
                  >
                    <img
                      src={`data:${fieldTestPaginationEntityEntity.byteImageMaxbytesAliceContentType};base64,${
                        fieldTestPaginationEntityEntity.byteImageMaxbytesAlice
                      }`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                  <span>
                    {fieldTestPaginationEntityEntity.byteImageMaxbytesAliceContentType},{' '}
                    {byteSize(fieldTestPaginationEntityEntity.byteImageMaxbytesAlice)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteAnyAlice">
                <Translate contentKey="travisReactApp.fieldTestPaginationEntity.byteAnyAlice">Byte Any Alice</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestPaginationEntityEntity.byteAnyAlice ? (
                <div>
                  <a
                    onClick={openFile(
                      fieldTestPaginationEntityEntity.byteAnyAliceContentType,
                      fieldTestPaginationEntityEntity.byteAnyAlice
                    )}
                  >
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                  <span>
                    {fieldTestPaginationEntityEntity.byteAnyAliceContentType}, {byteSize(fieldTestPaginationEntityEntity.byteAnyAlice)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteAnyRequiredAlice">
                <Translate contentKey="travisReactApp.fieldTestPaginationEntity.byteAnyRequiredAlice">Byte Any Required Alice</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestPaginationEntityEntity.byteAnyRequiredAlice ? (
                <div>
                  <a
                    onClick={openFile(
                      fieldTestPaginationEntityEntity.byteAnyRequiredAliceContentType,
                      fieldTestPaginationEntityEntity.byteAnyRequiredAlice
                    )}
                  >
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                  <span>
                    {fieldTestPaginationEntityEntity.byteAnyRequiredAliceContentType},{' '}
                    {byteSize(fieldTestPaginationEntityEntity.byteAnyRequiredAlice)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteAnyMinbytesAlice">
                <Translate contentKey="travisReactApp.fieldTestPaginationEntity.byteAnyMinbytesAlice">Byte Any Minbytes Alice</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestPaginationEntityEntity.byteAnyMinbytesAlice ? (
                <div>
                  <a
                    onClick={openFile(
                      fieldTestPaginationEntityEntity.byteAnyMinbytesAliceContentType,
                      fieldTestPaginationEntityEntity.byteAnyMinbytesAlice
                    )}
                  >
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                  <span>
                    {fieldTestPaginationEntityEntity.byteAnyMinbytesAliceContentType},{' '}
                    {byteSize(fieldTestPaginationEntityEntity.byteAnyMinbytesAlice)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteAnyMaxbytesAlice">
                <Translate contentKey="travisReactApp.fieldTestPaginationEntity.byteAnyMaxbytesAlice">Byte Any Maxbytes Alice</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestPaginationEntityEntity.byteAnyMaxbytesAlice ? (
                <div>
                  <a
                    onClick={openFile(
                      fieldTestPaginationEntityEntity.byteAnyMaxbytesAliceContentType,
                      fieldTestPaginationEntityEntity.byteAnyMaxbytesAlice
                    )}
                  >
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                  <span>
                    {fieldTestPaginationEntityEntity.byteAnyMaxbytesAliceContentType},{' '}
                    {byteSize(fieldTestPaginationEntityEntity.byteAnyMaxbytesAlice)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteTextAlice">
                <Translate contentKey="travisReactApp.fieldTestPaginationEntity.byteTextAlice">Byte Text Alice</Translate>
              </span>
            </dt>
            <dd>{fieldTestPaginationEntityEntity.byteTextAlice}</dd>
            <dt>
              <span id="byteTextRequiredAlice">
                <Translate contentKey="travisReactApp.fieldTestPaginationEntity.byteTextRequiredAlice">Byte Text Required Alice</Translate>
              </span>
            </dt>
            <dd>{fieldTestPaginationEntityEntity.byteTextRequiredAlice}</dd>
          </dl>
          <Button tag={Link} to="/field-test-pagination-entity" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>
          &nbsp;
          <Button tag={Link} to={`/field-test-pagination-entity/${fieldTestPaginationEntityEntity.id}/edit`} replace color="primary">
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

const mapStateToProps = ({ fieldTestPaginationEntity }: IRootState) => ({
  fieldTestPaginationEntityEntity: fieldTestPaginationEntity.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FieldTestPaginationEntityDetail);
