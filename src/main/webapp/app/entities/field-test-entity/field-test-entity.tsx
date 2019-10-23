import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { openFile, byteSize, Translate, ICrudGetAllAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './field-test-entity.reducer';
import { IFieldTestEntity } from 'app/shared/model/field-test-entity.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IFieldTestEntityProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export class FieldTestEntity extends React.Component<IFieldTestEntityProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { fieldTestEntityList, match } = this.props;
    return (
      <div>
        <h2 id="field-test-entity-heading">
          <Translate contentKey="travisReactApp.fieldTestEntity.home.title">Field Test Entities</Translate>
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="travisReactApp.fieldTestEntity.home.createLabel">Create a new Field Test Entity</Translate>
          </Link>
        </h2>
        <div className="table-responsive">
          {fieldTestEntityList && fieldTestEntityList.length > 0 ? (
            <Table responsive aria-describedby="field-test-entity-heading">
              <thead>
                <tr>
                  <th>
                    <Translate contentKey="global.field.id">ID</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisReactApp.fieldTestEntity.stringTom">String Tom</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisReactApp.fieldTestEntity.stringRequiredTom">String Required Tom</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisReactApp.fieldTestEntity.stringMinlengthTom">String Minlength Tom</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisReactApp.fieldTestEntity.stringMaxlengthTom">String Maxlength Tom</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisReactApp.fieldTestEntity.stringPatternTom">String Pattern Tom</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisReactApp.fieldTestEntity.integerTom">Integer Tom</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisReactApp.fieldTestEntity.integerRequiredTom">Integer Required Tom</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisReactApp.fieldTestEntity.integerMinTom">Integer Min Tom</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisReactApp.fieldTestEntity.integerMaxTom">Integer Max Tom</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisReactApp.fieldTestEntity.longTom">Long Tom</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisReactApp.fieldTestEntity.longRequiredTom">Long Required Tom</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisReactApp.fieldTestEntity.longMinTom">Long Min Tom</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisReactApp.fieldTestEntity.longMaxTom">Long Max Tom</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisReactApp.fieldTestEntity.floatTom">Float Tom</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisReactApp.fieldTestEntity.floatRequiredTom">Float Required Tom</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisReactApp.fieldTestEntity.floatMinTom">Float Min Tom</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisReactApp.fieldTestEntity.floatMaxTom">Float Max Tom</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisReactApp.fieldTestEntity.doubleRequiredTom">Double Required Tom</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisReactApp.fieldTestEntity.doubleMinTom">Double Min Tom</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisReactApp.fieldTestEntity.doubleMaxTom">Double Max Tom</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisReactApp.fieldTestEntity.bigDecimalRequiredTom">Big Decimal Required Tom</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisReactApp.fieldTestEntity.bigDecimalMinTom">Big Decimal Min Tom</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisReactApp.fieldTestEntity.bigDecimalMaxTom">Big Decimal Max Tom</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisReactApp.fieldTestEntity.localDateTom">Local Date Tom</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisReactApp.fieldTestEntity.localDateRequiredTom">Local Date Required Tom</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisReactApp.fieldTestEntity.instantTom">Instant Tom</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisReactApp.fieldTestEntity.instantRequiredTom">Instant Required Tom</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisReactApp.fieldTestEntity.zonedDateTimeTom">Zoned Date Time Tom</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisReactApp.fieldTestEntity.zonedDateTimeRequiredTom">Zoned Date Time Required Tom</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisReactApp.fieldTestEntity.durationTom">Duration Tom</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisReactApp.fieldTestEntity.durationRequiredTom">Duration Required Tom</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisReactApp.fieldTestEntity.booleanTom">Boolean Tom</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisReactApp.fieldTestEntity.booleanRequiredTom">Boolean Required Tom</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisReactApp.fieldTestEntity.enumTom">Enum Tom</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisReactApp.fieldTestEntity.enumRequiredTom">Enum Required Tom</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisReactApp.fieldTestEntity.uuidTom">Uuid Tom</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisReactApp.fieldTestEntity.uuidRequiredTom">Uuid Required Tom</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisReactApp.fieldTestEntity.byteImageTom">Byte Image Tom</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisReactApp.fieldTestEntity.byteImageRequiredTom">Byte Image Required Tom</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisReactApp.fieldTestEntity.byteImageMinbytesTom">Byte Image Minbytes Tom</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisReactApp.fieldTestEntity.byteImageMaxbytesTom">Byte Image Maxbytes Tom</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisReactApp.fieldTestEntity.byteAnyTom">Byte Any Tom</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisReactApp.fieldTestEntity.byteAnyRequiredTom">Byte Any Required Tom</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisReactApp.fieldTestEntity.byteAnyMinbytesTom">Byte Any Minbytes Tom</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisReactApp.fieldTestEntity.byteAnyMaxbytesTom">Byte Any Maxbytes Tom</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisReactApp.fieldTestEntity.byteTextTom">Byte Text Tom</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisReactApp.fieldTestEntity.byteTextRequiredTom">Byte Text Required Tom</Translate>
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {fieldTestEntityList.map((fieldTestEntity, i) => (
                  <tr key={`entity-${i}`}>
                    <td>
                      <Button tag={Link} to={`${match.url}/${fieldTestEntity.id}`} color="link" size="sm">
                        {fieldTestEntity.id}
                      </Button>
                    </td>
                    <td>{fieldTestEntity.stringTom}</td>
                    <td>{fieldTestEntity.stringRequiredTom}</td>
                    <td>{fieldTestEntity.stringMinlengthTom}</td>
                    <td>{fieldTestEntity.stringMaxlengthTom}</td>
                    <td>{fieldTestEntity.stringPatternTom}</td>
                    <td>{fieldTestEntity.integerTom}</td>
                    <td>{fieldTestEntity.integerRequiredTom}</td>
                    <td>{fieldTestEntity.integerMinTom}</td>
                    <td>{fieldTestEntity.integerMaxTom}</td>
                    <td>{fieldTestEntity.longTom}</td>
                    <td>{fieldTestEntity.longRequiredTom}</td>
                    <td>{fieldTestEntity.longMinTom}</td>
                    <td>{fieldTestEntity.longMaxTom}</td>
                    <td>{fieldTestEntity.floatTom}</td>
                    <td>{fieldTestEntity.floatRequiredTom}</td>
                    <td>{fieldTestEntity.floatMinTom}</td>
                    <td>{fieldTestEntity.floatMaxTom}</td>
                    <td>{fieldTestEntity.doubleRequiredTom}</td>
                    <td>{fieldTestEntity.doubleMinTom}</td>
                    <td>{fieldTestEntity.doubleMaxTom}</td>
                    <td>{fieldTestEntity.bigDecimalRequiredTom}</td>
                    <td>{fieldTestEntity.bigDecimalMinTom}</td>
                    <td>{fieldTestEntity.bigDecimalMaxTom}</td>
                    <td>
                      <TextFormat type="date" value={fieldTestEntity.localDateTom} format={APP_LOCAL_DATE_FORMAT} />
                    </td>
                    <td>
                      <TextFormat type="date" value={fieldTestEntity.localDateRequiredTom} format={APP_LOCAL_DATE_FORMAT} />
                    </td>
                    <td>
                      <TextFormat type="date" value={fieldTestEntity.instantTom} format={APP_DATE_FORMAT} />
                    </td>
                    <td>
                      <TextFormat type="date" value={fieldTestEntity.instantRequiredTom} format={APP_DATE_FORMAT} />
                    </td>
                    <td>
                      <TextFormat type="date" value={fieldTestEntity.zonedDateTimeTom} format={APP_DATE_FORMAT} />
                    </td>
                    <td>
                      <TextFormat type="date" value={fieldTestEntity.zonedDateTimeRequiredTom} format={APP_DATE_FORMAT} />
                    </td>
                    <td>{fieldTestEntity.durationTom}</td>
                    <td>{fieldTestEntity.durationRequiredTom}</td>
                    <td>{fieldTestEntity.booleanTom ? 'true' : 'false'}</td>
                    <td>{fieldTestEntity.booleanRequiredTom ? 'true' : 'false'}</td>
                    <td>
                      <Translate contentKey={`travisReactApp.EnumFieldClass.${fieldTestEntity.enumTom}`} />
                    </td>
                    <td>
                      <Translate contentKey={`travisReactApp.EnumRequiredFieldClass.${fieldTestEntity.enumRequiredTom}`} />
                    </td>
                    <td>{fieldTestEntity.uuidTom}</td>
                    <td>{fieldTestEntity.uuidRequiredTom}</td>
                    <td>
                      {fieldTestEntity.byteImageTom ? (
                        <div>
                          <a onClick={openFile(fieldTestEntity.byteImageTomContentType, fieldTestEntity.byteImageTom)}>
                            <img
                              src={`data:${fieldTestEntity.byteImageTomContentType};base64,${fieldTestEntity.byteImageTom}`}
                              style={{ maxHeight: '30px' }}
                            />
                            &nbsp;
                          </a>
                          <span>
                            {fieldTestEntity.byteImageTomContentType}, {byteSize(fieldTestEntity.byteImageTom)}
                          </span>
                        </div>
                      ) : null}
                    </td>
                    <td>
                      {fieldTestEntity.byteImageRequiredTom ? (
                        <div>
                          <a onClick={openFile(fieldTestEntity.byteImageRequiredTomContentType, fieldTestEntity.byteImageRequiredTom)}>
                            <img
                              src={`data:${fieldTestEntity.byteImageRequiredTomContentType};base64,${fieldTestEntity.byteImageRequiredTom}`}
                              style={{ maxHeight: '30px' }}
                            />
                            &nbsp;
                          </a>
                          <span>
                            {fieldTestEntity.byteImageRequiredTomContentType}, {byteSize(fieldTestEntity.byteImageRequiredTom)}
                          </span>
                        </div>
                      ) : null}
                    </td>
                    <td>
                      {fieldTestEntity.byteImageMinbytesTom ? (
                        <div>
                          <a onClick={openFile(fieldTestEntity.byteImageMinbytesTomContentType, fieldTestEntity.byteImageMinbytesTom)}>
                            <img
                              src={`data:${fieldTestEntity.byteImageMinbytesTomContentType};base64,${fieldTestEntity.byteImageMinbytesTom}`}
                              style={{ maxHeight: '30px' }}
                            />
                            &nbsp;
                          </a>
                          <span>
                            {fieldTestEntity.byteImageMinbytesTomContentType}, {byteSize(fieldTestEntity.byteImageMinbytesTom)}
                          </span>
                        </div>
                      ) : null}
                    </td>
                    <td>
                      {fieldTestEntity.byteImageMaxbytesTom ? (
                        <div>
                          <a onClick={openFile(fieldTestEntity.byteImageMaxbytesTomContentType, fieldTestEntity.byteImageMaxbytesTom)}>
                            <img
                              src={`data:${fieldTestEntity.byteImageMaxbytesTomContentType};base64,${fieldTestEntity.byteImageMaxbytesTom}`}
                              style={{ maxHeight: '30px' }}
                            />
                            &nbsp;
                          </a>
                          <span>
                            {fieldTestEntity.byteImageMaxbytesTomContentType}, {byteSize(fieldTestEntity.byteImageMaxbytesTom)}
                          </span>
                        </div>
                      ) : null}
                    </td>
                    <td>
                      {fieldTestEntity.byteAnyTom ? (
                        <div>
                          <a onClick={openFile(fieldTestEntity.byteAnyTomContentType, fieldTestEntity.byteAnyTom)}>
                            <Translate contentKey="entity.action.open">Open</Translate>
                            &nbsp;
                          </a>
                          <span>
                            {fieldTestEntity.byteAnyTomContentType}, {byteSize(fieldTestEntity.byteAnyTom)}
                          </span>
                        </div>
                      ) : null}
                    </td>
                    <td>
                      {fieldTestEntity.byteAnyRequiredTom ? (
                        <div>
                          <a onClick={openFile(fieldTestEntity.byteAnyRequiredTomContentType, fieldTestEntity.byteAnyRequiredTom)}>
                            <Translate contentKey="entity.action.open">Open</Translate>
                            &nbsp;
                          </a>
                          <span>
                            {fieldTestEntity.byteAnyRequiredTomContentType}, {byteSize(fieldTestEntity.byteAnyRequiredTom)}
                          </span>
                        </div>
                      ) : null}
                    </td>
                    <td>
                      {fieldTestEntity.byteAnyMinbytesTom ? (
                        <div>
                          <a onClick={openFile(fieldTestEntity.byteAnyMinbytesTomContentType, fieldTestEntity.byteAnyMinbytesTom)}>
                            <Translate contentKey="entity.action.open">Open</Translate>
                            &nbsp;
                          </a>
                          <span>
                            {fieldTestEntity.byteAnyMinbytesTomContentType}, {byteSize(fieldTestEntity.byteAnyMinbytesTom)}
                          </span>
                        </div>
                      ) : null}
                    </td>
                    <td>
                      {fieldTestEntity.byteAnyMaxbytesTom ? (
                        <div>
                          <a onClick={openFile(fieldTestEntity.byteAnyMaxbytesTomContentType, fieldTestEntity.byteAnyMaxbytesTom)}>
                            <Translate contentKey="entity.action.open">Open</Translate>
                            &nbsp;
                          </a>
                          <span>
                            {fieldTestEntity.byteAnyMaxbytesTomContentType}, {byteSize(fieldTestEntity.byteAnyMaxbytesTom)}
                          </span>
                        </div>
                      ) : null}
                    </td>
                    <td>{fieldTestEntity.byteTextTom}</td>
                    <td>{fieldTestEntity.byteTextRequiredTom}</td>
                    <td className="text-right">
                      <div className="btn-group flex-btn-group-container">
                        <Button tag={Link} to={`${match.url}/${fieldTestEntity.id}`} color="info" size="sm">
                          <FontAwesomeIcon icon="eye" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.view">View</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${fieldTestEntity.id}/edit`} color="primary" size="sm">
                          <FontAwesomeIcon icon="pencil-alt" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.edit">Edit</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${fieldTestEntity.id}/delete`} color="danger" size="sm">
                          <FontAwesomeIcon icon="trash" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.delete">Delete</Translate>
                          </span>
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <div className="alert alert-warning">
              <Translate contentKey="travisReactApp.fieldTestEntity.home.notFound">No Field Test Entities found</Translate>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ fieldTestEntity }: IRootState) => ({
  fieldTestEntityList: fieldTestEntity.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FieldTestEntity);
