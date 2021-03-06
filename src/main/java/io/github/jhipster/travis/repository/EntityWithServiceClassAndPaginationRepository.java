package io.github.jhipster.travis.repository;
import io.github.jhipster.travis.domain.EntityWithServiceClassAndPagination;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the EntityWithServiceClassAndPagination entity.
 */
@SuppressWarnings("unused")
@Repository
public interface EntityWithServiceClassAndPaginationRepository extends JpaRepository<EntityWithServiceClassAndPagination, Long> {

}
