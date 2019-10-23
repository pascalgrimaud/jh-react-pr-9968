package io.github.jhipster.travis.repository;
import io.github.jhipster.travis.domain.FieldTestServiceImplEntity;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the FieldTestServiceImplEntity entity.
 */
@SuppressWarnings("unused")
@Repository
public interface FieldTestServiceImplEntityRepository extends JpaRepository<FieldTestServiceImplEntity, Long> {

}
