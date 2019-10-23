import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Translate, ICrudGetAction, ICrudDeleteAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IEntityWithServiceImplPaginationAndDTO } from 'app/shared/model/entity-with-service-impl-pagination-and-dto.model';
import { IRootState } from 'app/shared/reducers';
import { getEntity, deleteEntity } from './entity-with-service-impl-pagination-and-dto.reducer';

export interface IEntityWithServiceImplPaginationAndDTODeleteDialogProps
  extends StateProps,
    DispatchProps,
    RouteComponentProps<{ id: string }> {}

export class EntityWithServiceImplPaginationAndDTODeleteDialog extends React.Component<
  IEntityWithServiceImplPaginationAndDTODeleteDialogProps
> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  confirmDelete = event => {
    this.props.deleteEntity(this.props.entityWithServiceImplPaginationAndDTOEntity.id);
    this.handleClose(event);
  };

  handleClose = event => {
    event.stopPropagation();
    this.props.history.goBack();
  };

  render() {
    const { entityWithServiceImplPaginationAndDTOEntity } = this.props;
    return (
      <Modal isOpen toggle={this.handleClose}>
        <ModalHeader toggle={this.handleClose}>
          <Translate contentKey="entity.delete.title">Confirm delete operation</Translate>
        </ModalHeader>
        <ModalBody id="travisReactApp.entityWithServiceImplPaginationAndDTO.delete.question">
          <Translate
            contentKey="travisReactApp.entityWithServiceImplPaginationAndDTO.delete.question"
            interpolate={{ id: entityWithServiceImplPaginationAndDTOEntity.id }}
          >
            Are you sure you want to delete this EntityWithServiceImplPaginationAndDTO?
          </Translate>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.handleClose}>
            <FontAwesomeIcon icon="ban" />
            &nbsp;
            <Translate contentKey="entity.action.cancel">Cancel</Translate>
          </Button>
          <Button id="my-prefix-confirm-delete-entityWithServiceImplPaginationAndDTO" color="danger" onClick={this.confirmDelete}>
            <FontAwesomeIcon icon="trash" />
            &nbsp;
            <Translate contentKey="entity.action.delete">Delete</Translate>
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = ({ entityWithServiceImplPaginationAndDTO }: IRootState) => ({
  entityWithServiceImplPaginationAndDTOEntity: entityWithServiceImplPaginationAndDTO.entity
});

const mapDispatchToProps = { getEntity, deleteEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EntityWithServiceImplPaginationAndDTODeleteDialog);
