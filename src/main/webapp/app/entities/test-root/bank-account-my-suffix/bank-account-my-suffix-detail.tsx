import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction, openFile, byteSize, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './bank-account-my-suffix.reducer';
import { IBankAccountMySuffix } from 'app/shared/model/test-root/bank-account-my-suffix.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IBankAccountMySuffixDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class BankAccountMySuffixDetail extends React.Component<IBankAccountMySuffixDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { bankAccountEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="travisReactApp.testRootBankAccount.detail.title">BankAccount</Translate> [<b>{bankAccountEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="name">
                <Translate contentKey="travisReactApp.testRootBankAccount.name">Name</Translate>
              </span>
            </dt>
            <dd>{bankAccountEntity.name}</dd>
            <dt>
              <span id="guid">
                <Translate contentKey="travisReactApp.testRootBankAccount.guid">Guid</Translate>
              </span>
            </dt>
            <dd>{bankAccountEntity.guid}</dd>
            <dt>
              <span id="bankNumber">
                <Translate contentKey="travisReactApp.testRootBankAccount.bankNumber">Bank Number</Translate>
              </span>
            </dt>
            <dd>{bankAccountEntity.bankNumber}</dd>
            <dt>
              <span id="agencyNumber">
                <Translate contentKey="travisReactApp.testRootBankAccount.agencyNumber">Agency Number</Translate>
              </span>
            </dt>
            <dd>{bankAccountEntity.agencyNumber}</dd>
            <dt>
              <span id="lastOperationDuration">
                <Translate contentKey="travisReactApp.testRootBankAccount.lastOperationDuration">Last Operation Duration</Translate>
              </span>
            </dt>
            <dd>{bankAccountEntity.lastOperationDuration}</dd>
            <dt>
              <span id="meanOperationDuration">
                <Translate contentKey="travisReactApp.testRootBankAccount.meanOperationDuration">Mean Operation Duration</Translate>
              </span>
            </dt>
            <dd>{bankAccountEntity.meanOperationDuration}</dd>
            <dt>
              <span id="meanQueueDuration">
                <Translate contentKey="travisReactApp.testRootBankAccount.meanQueueDuration">Mean Queue Duration</Translate>
              </span>
            </dt>
            <dd>{bankAccountEntity.meanQueueDuration}</dd>
            <dt>
              <span id="balance">
                <Translate contentKey="travisReactApp.testRootBankAccount.balance">Balance</Translate>
              </span>
            </dt>
            <dd>{bankAccountEntity.balance}</dd>
            <dt>
              <span id="openingDay">
                <Translate contentKey="travisReactApp.testRootBankAccount.openingDay">Opening Day</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={bankAccountEntity.openingDay} type="date" format={APP_LOCAL_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="lastOperationDate">
                <Translate contentKey="travisReactApp.testRootBankAccount.lastOperationDate">Last Operation Date</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={bankAccountEntity.lastOperationDate} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="active">
                <Translate contentKey="travisReactApp.testRootBankAccount.active">Active</Translate>
              </span>
            </dt>
            <dd>{bankAccountEntity.active ? 'true' : 'false'}</dd>
            <dt>
              <span id="accountType">
                <Translate contentKey="travisReactApp.testRootBankAccount.accountType">Account Type</Translate>
              </span>
            </dt>
            <dd>{bankAccountEntity.accountType}</dd>
            <dt>
              <span id="attachment">
                <Translate contentKey="travisReactApp.testRootBankAccount.attachment">Attachment</Translate>
              </span>
            </dt>
            <dd>
              {bankAccountEntity.attachment ? (
                <div>
                  <a onClick={openFile(bankAccountEntity.attachmentContentType, bankAccountEntity.attachment)}>
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                  <span>
                    {bankAccountEntity.attachmentContentType}, {byteSize(bankAccountEntity.attachment)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="description">
                <Translate contentKey="travisReactApp.testRootBankAccount.description">Description</Translate>
              </span>
            </dt>
            <dd>{bankAccountEntity.description}</dd>
            <dt>
              <Translate contentKey="travisReactApp.testRootBankAccount.user">User</Translate>
            </dt>
            <dd>{bankAccountEntity.userLogin ? bankAccountEntity.userLogin : ''}</dd>
          </dl>
          <Button tag={Link} to="/bank-account-my-suffix" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>
          &nbsp;
          <Button tag={Link} to={`/bank-account-my-suffix/${bankAccountEntity.id}/edit`} replace color="primary">
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

const mapStateToProps = ({ bankAccount }: IRootState) => ({
  bankAccountEntity: bankAccount.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BankAccountMySuffixDetail);
