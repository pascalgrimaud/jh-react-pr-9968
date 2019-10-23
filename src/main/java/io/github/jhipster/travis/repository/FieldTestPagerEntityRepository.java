package io.github.jhipster.travis.repository;
import io.github.jhipster.travis.domain.FieldTestPagerEntity;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the FieldTestPagerEntity entity.
 */
@SuppressWarnings("unused")
@Repository
public interface FieldTestPagerEntityRepository extends JpaRepository<FieldTestPagerEntity, Long> {

}
