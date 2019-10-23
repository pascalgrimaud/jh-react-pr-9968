import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './entity-with-service-class-pagination-and-dto.reducer';
import { IEntityWithServiceClassPaginationAndDTO } from 'app/shared/model/entity-with-service-class-pagination-and-dto.model';
import { convertDateTimeFromServer, convertDateTimeToServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IEntityWithServiceClassPaginationAndDTOUpdateProps
  extends StateProps,
    DispatchProps,
    RouteComponentProps<{ id: string }> {}

export interface IEntityWithServiceClassPaginationAndDTOUpdateState {
  isNew: boolean;
}

export class EntityWithServiceClassPaginationAndDTOUpdate extends React.Component<
  IEntityWithServiceClassPaginationAndDTOUpdateProps,
  IEntityWithServiceClassPaginationAndDTOUpdateState
> {
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

  saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const { entityWithServiceClassPaginationAndDTOEntity } = this.props;
      const entity = {
        ...entityWithServiceClassPaginationAndDTOEntity,
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
    this.props.history.push('/entity-with-service-class-pagination-and-dto');
  };

  render() {
    const { entityWithServiceClassPaginationAndDTOEntity, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="travisReactApp.entityWithServiceClassPaginationAndDTO.home.createOrEditLabel">
              <Translate contentKey="travisReactApp.entityWithServiceClassPaginationAndDTO.home.createOrEditLabel">
                Create or edit a EntityWithServiceClassPaginationAndDTO
              </Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : entityWithServiceClassPaginationAndDTOEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="entity-with-service-class-pagination-and-dto-id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput
                      id="entity-with-service-class-pagination-and-dto-id"
                      type="text"
                      className="form-control"
                      name="id"
                      required
                      readOnly
                    />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="lenaLabel" for="entity-with-service-class-pagination-and-dto-lena">
                    <Translate contentKey="travisReactApp.entityWithServiceClassPaginationAndDTO.lena">Lena</Translate>
                  </Label>
                  <AvField id="entity-with-service-class-pagination-and-dto-lena" type="text" name="lena" />
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/entity-with-service-class-pagination-and-dto" replace color="info">
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
  entityWithServiceClassPaginationAndDTOEntity: storeState.entityWithServiceClassPaginationAndDTO.entity,
  loading: storeState.entityWithServiceClassPaginationAndDTO.loading,
  updating: storeState.entityWithServiceClassPaginationAndDTO.updating,
  updateSuccess: storeState.entityWithServiceClassPaginationAndDTO.updateSuccess
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EntityWithServiceClassPaginationAndDTOUpdate);
