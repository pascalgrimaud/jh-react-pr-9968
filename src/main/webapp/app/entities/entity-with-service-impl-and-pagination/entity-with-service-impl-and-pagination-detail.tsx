import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './entity-with-service-impl-and-pagination.reducer';
import { IEntityWithServiceImplAndPagination } from 'app/shared/model/entity-with-service-impl-and-pagination.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IEntityWithServiceImplAndPaginationDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class EntityWithServiceImplAndPaginationDetail extends React.Component<IEntityWithServiceImplAndPaginationDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { entityWithServiceImplAndPaginationEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="travisReactApp.entityWithServiceImplAndPagination.detail.title">
              EntityWithServiceImplAndPagination
            </Translate>{' '}
            [<b>{entityWithServiceImplAndPaginationEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="hugo">
                <Translate contentKey="travisReactApp.entityWithServiceImplAndPagination.hugo">Hugo</Translate>
              </span>
            </dt>
            <dd>{entityWithServiceImplAndPaginationEntity.hugo}</dd>
          </dl>
          <Button tag={Link} to="/entity-with-service-impl-and-pagination" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>
          &nbsp;
          <Button
            tag={Link}
            to={`/entity-with-service-impl-and-pagination/${entityWithServiceImplAndPaginationEntity.id}/edit`}
            replace
            color="primary"
          >
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

const mapStateToProps = ({ entityWithServiceImplAndPagination }: IRootState) => ({
  entityWithServiceImplAndPaginationEntity: entityWithServiceImplAndPagination.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EntityWithServiceImplAndPaginationDetail);
