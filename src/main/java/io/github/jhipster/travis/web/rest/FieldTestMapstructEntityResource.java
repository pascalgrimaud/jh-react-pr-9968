package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.service.FieldTestMapstructEntityService;
import io.github.jhipster.travis.web.rest.errors.BadRequestAlertException;
import io.github.jhipster.travis.service.dto.FieldTestMapstructEntityDTO;

import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing {@link io.github.jhipster.travis.domain.FieldTestMapstructEntity}.
 */
@RestController
@RequestMapping("/api")
public class FieldTestMapstructEntityResource {

    private final Logger log = LoggerFactory.getLogger(FieldTestMapstructEntityResource.class);

    private static final String ENTITY_NAME = "fieldTestMapstructEntity";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final FieldTestMapstructEntityService fieldTestMapstructEntityService;

    public FieldTestMapstructEntityResource(FieldTestMapstructEntityService fieldTestMapstructEntityService) {
        this.fieldTestMapstructEntityService = fieldTestMapstructEntityService;
    }

    /**
     * {@code POST  /field-test-mapstruct-entities} : Create a new fieldTestMapstructEntity.
     *
     * @param fieldTestMapstructEntityDTO the fieldTestMapstructEntityDTO to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new fieldTestMapstructEntityDTO, or with status {@code 400 (Bad Request)} if the fieldTestMapstructEntity has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/field-test-mapstruct-entities")
    public ResponseEntity<FieldTestMapstructEntityDTO> createFieldTestMapstructEntity(@Valid @RequestBody FieldTestMapstructEntityDTO fieldTestMapstructEntityDTO) throws URISyntaxException {
        log.debug("REST request to save FieldTestMapstructEntity : {}", fieldTestMapstructEntityDTO);
        if (fieldTestMapstructEntityDTO.getId() != null) {
            throw new BadRequestAlertException("A new fieldTestMapstructEntity cannot already have an ID", ENTITY_NAME, "idexists");
        }
        FieldTestMapstructEntityDTO result = fieldTestMapstructEntityService.save(fieldTestMapstructEntityDTO);
        return ResponseEntity.created(new URI("/api/field-test-mapstruct-entities/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /field-test-mapstruct-entities} : Updates an existing fieldTestMapstructEntity.
     *
     * @param fieldTestMapstructEntityDTO the fieldTestMapstructEntityDTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated fieldTestMapstructEntityDTO,
     * or with status {@code 400 (Bad Request)} if the fieldTestMapstructEntityDTO is not valid,
     * or with status {@code 500 (Internal Server Error)} if the fieldTestMapstructEntityDTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/field-test-mapstruct-entities")
    public ResponseEntity<FieldTestMapstructEntityDTO> updateFieldTestMapstructEntity(@Valid @RequestBody FieldTestMapstructEntityDTO fieldTestMapstructEntityDTO) throws URISyntaxException {
        log.debug("REST request to update FieldTestMapstructEntity : {}", fieldTestMapstructEntityDTO);
        if (fieldTestMapstructEntityDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        FieldTestMapstructEntityDTO result = fieldTestMapstructEntityService.save(fieldTestMapstructEntityDTO);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, fieldTestMapstructEntityDTO.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /field-test-mapstruct-entities} : get all the fieldTestMapstructEntities.
     *

     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of fieldTestMapstructEntities in body.
     */
    @GetMapping("/field-test-mapstruct-entities")
    public List<FieldTestMapstructEntityDTO> getAllFieldTestMapstructEntities() {
        log.debug("REST request to get all FieldTestMapstructEntities");
        return fieldTestMapstructEntityService.findAll();
    }

    /**
     * {@code GET  /field-test-mapstruct-entities/:id} : get the "id" fieldTestMapstructEntity.
     *
     * @param id the id of the fieldTestMapstructEntityDTO to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the fieldTestMapstructEntityDTO, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/field-test-mapstruct-entities/{id}")
    public ResponseEntity<FieldTestMapstructEntityDTO> getFieldTestMapstructEntity(@PathVariable Long id) {
        log.debug("REST request to get FieldTestMapstructEntity : {}", id);
        Optional<FieldTestMapstructEntityDTO> fieldTestMapstructEntityDTO = fieldTestMapstructEntityService.findOne(id);
        return ResponseUtil.wrapOrNotFound(fieldTestMapstructEntityDTO);
    }

    /**
     * {@code DELETE  /field-test-mapstruct-entities/:id} : delete the "id" fieldTestMapstructEntity.
     *
     * @param id the id of the fieldTestMapstructEntityDTO to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/field-test-mapstruct-entities/{id}")
    public ResponseEntity<Void> deleteFieldTestMapstructEntity(@PathVariable Long id) {
        log.debug("REST request to delete FieldTestMapstructEntity : {}", id);
        fieldTestMapstructEntityService.delete(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
