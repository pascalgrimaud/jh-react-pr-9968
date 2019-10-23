package io.github.jhipster.travis.web.rest;

import io.github.jhipster.travis.TravisReactApp;
import io.github.jhipster.travis.domain.EntityWithServiceImplAndPagination;
import io.github.jhipster.travis.repository.EntityWithServiceImplAndPaginationRepository;
import io.github.jhipster.travis.service.EntityWithServiceImplAndPaginationService;
import io.github.jhipster.travis.web.rest.errors.ExceptionTranslator;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.Validator;

import javax.persistence.EntityManager;
import java.util.List;

import static io.github.jhipster.travis.web.rest.TestUtil.createFormattingConversionService;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Integration tests for the {@link EntityWithServiceImplAndPaginationResource} REST controller.
 */
@SpringBootTest(classes = TravisReactApp.class)
public class EntityWithServiceImplAndPaginationResourceIT {

    private static final String DEFAULT_HUGO = "AAAAAAAAAA";
    private static final String UPDATED_HUGO = "BBBBBBBBBB";

    @Autowired
    private EntityWithServiceImplAndPaginationRepository entityWithServiceImplAndPaginationRepository;

    @Autowired
    private EntityWithServiceImplAndPaginationService entityWithServiceImplAndPaginationService;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    @Autowired
    private Validator validator;

    private MockMvc restEntityWithServiceImplAndPaginationMockMvc;

    private EntityWithServiceImplAndPagination entityWithServiceImplAndPagination;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final EntityWithServiceImplAndPaginationResource entityWithServiceImplAndPaginationResource = new EntityWithServiceImplAndPaginationResource(entityWithServiceImplAndPaginationService);
        this.restEntityWithServiceImplAndPaginationMockMvc = MockMvcBuilders.standaloneSetup(entityWithServiceImplAndPaginationResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
            .setConversionService(createFormattingConversionService())
            .setMessageConverters(jacksonMessageConverter)
            .setValidator(validator).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static EntityWithServiceImplAndPagination createEntity(EntityManager em) {
        EntityWithServiceImplAndPagination entityWithServiceImplAndPagination = new EntityWithServiceImplAndPagination()
            .hugo(DEFAULT_HUGO);
        return entityWithServiceImplAndPagination;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static EntityWithServiceImplAndPagination createUpdatedEntity(EntityManager em) {
        EntityWithServiceImplAndPagination entityWithServiceImplAndPagination = new EntityWithServiceImplAndPagination()
            .hugo(UPDATED_HUGO);
        return entityWithServiceImplAndPagination;
    }

    @BeforeEach
    public void initTest() {
        entityWithServiceImplAndPagination = createEntity(em);
    }

    @Test
    @Transactional
    public void createEntityWithServiceImplAndPagination() throws Exception {
        int databaseSizeBeforeCreate = entityWithServiceImplAndPaginationRepository.findAll().size();

        // Create the EntityWithServiceImplAndPagination
        restEntityWithServiceImplAndPaginationMockMvc.perform(post("/api/entity-with-service-impl-and-paginations")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(entityWithServiceImplAndPagination)))
            .andExpect(status().isCreated());

        // Validate the EntityWithServiceImplAndPagination in the database
        List<EntityWithServiceImplAndPagination> entityWithServiceImplAndPaginationList = entityWithServiceImplAndPaginationRepository.findAll();
        assertThat(entityWithServiceImplAndPaginationList).hasSize(databaseSizeBeforeCreate + 1);
        EntityWithServiceImplAndPagination testEntityWithServiceImplAndPagination = entityWithServiceImplAndPaginationList.get(entityWithServiceImplAndPaginationList.size() - 1);
        assertThat(testEntityWithServiceImplAndPagination.getHugo()).isEqualTo(DEFAULT_HUGO);
    }

    @Test
    @Transactional
    public void createEntityWithServiceImplAndPaginationWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = entityWithServiceImplAndPaginationRepository.findAll().size();

        // Create the EntityWithServiceImplAndPagination with an existing ID
        entityWithServiceImplAndPagination.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restEntityWithServiceImplAndPaginationMockMvc.perform(post("/api/entity-with-service-impl-and-paginations")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(entityWithServiceImplAndPagination)))
            .andExpect(status().isBadRequest());

        // Validate the EntityWithServiceImplAndPagination in the database
        List<EntityWithServiceImplAndPagination> entityWithServiceImplAndPaginationList = entityWithServiceImplAndPaginationRepository.findAll();
        assertThat(entityWithServiceImplAndPaginationList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllEntityWithServiceImplAndPaginations() throws Exception {
        // Initialize the database
        entityWithServiceImplAndPaginationRepository.saveAndFlush(entityWithServiceImplAndPagination);

        // Get all the entityWithServiceImplAndPaginationList
        restEntityWithServiceImplAndPaginationMockMvc.perform(get("/api/entity-with-service-impl-and-paginations?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(entityWithServiceImplAndPagination.getId().intValue())))
            .andExpect(jsonPath("$.[*].hugo").value(hasItem(DEFAULT_HUGO)));
    }
    
    @Test
    @Transactional
    public void getEntityWithServiceImplAndPagination() throws Exception {
        // Initialize the database
        entityWithServiceImplAndPaginationRepository.saveAndFlush(entityWithServiceImplAndPagination);

        // Get the entityWithServiceImplAndPagination
        restEntityWithServiceImplAndPaginationMockMvc.perform(get("/api/entity-with-service-impl-and-paginations/{id}", entityWithServiceImplAndPagination.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(entityWithServiceImplAndPagination.getId().intValue()))
            .andExpect(jsonPath("$.hugo").value(DEFAULT_HUGO));
    }

    @Test
    @Transactional
    public void getNonExistingEntityWithServiceImplAndPagination() throws Exception {
        // Get the entityWithServiceImplAndPagination
        restEntityWithServiceImplAndPaginationMockMvc.perform(get("/api/entity-with-service-impl-and-paginations/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateEntityWithServiceImplAndPagination() throws Exception {
        // Initialize the database
        entityWithServiceImplAndPaginationService.save(entityWithServiceImplAndPagination);

        int databaseSizeBeforeUpdate = entityWithServiceImplAndPaginationRepository.findAll().size();

        // Update the entityWithServiceImplAndPagination
        EntityWithServiceImplAndPagination updatedEntityWithServiceImplAndPagination = entityWithServiceImplAndPaginationRepository.findById(entityWithServiceImplAndPagination.getId()).get();
        // Disconnect from session so that the updates on updatedEntityWithServiceImplAndPagination are not directly saved in db
        em.detach(updatedEntityWithServiceImplAndPagination);
        updatedEntityWithServiceImplAndPagination
            .hugo(UPDATED_HUGO);

        restEntityWithServiceImplAndPaginationMockMvc.perform(put("/api/entity-with-service-impl-and-paginations")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedEntityWithServiceImplAndPagination)))
            .andExpect(status().isOk());

        // Validate the EntityWithServiceImplAndPagination in the database
        List<EntityWithServiceImplAndPagination> entityWithServiceImplAndPaginationList = entityWithServiceImplAndPaginationRepository.findAll();
        assertThat(entityWithServiceImplAndPaginationList).hasSize(databaseSizeBeforeUpdate);
        EntityWithServiceImplAndPagination testEntityWithServiceImplAndPagination = entityWithServiceImplAndPaginationList.get(entityWithServiceImplAndPaginationList.size() - 1);
        assertThat(testEntityWithServiceImplAndPagination.getHugo()).isEqualTo(UPDATED_HUGO);
    }

    @Test
    @Transactional
    public void updateNonExistingEntityWithServiceImplAndPagination() throws Exception {
        int databaseSizeBeforeUpdate = entityWithServiceImplAndPaginationRepository.findAll().size();

        // Create the EntityWithServiceImplAndPagination

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restEntityWithServiceImplAndPaginationMockMvc.perform(put("/api/entity-with-service-impl-and-paginations")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(entityWithServiceImplAndPagination)))
            .andExpect(status().isBadRequest());

        // Validate the EntityWithServiceImplAndPagination in the database
        List<EntityWithServiceImplAndPagination> entityWithServiceImplAndPaginationList = entityWithServiceImplAndPaginationRepository.findAll();
        assertThat(entityWithServiceImplAndPaginationList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteEntityWithServiceImplAndPagination() throws Exception {
        // Initialize the database
        entityWithServiceImplAndPaginationService.save(entityWithServiceImplAndPagination);

        int databaseSizeBeforeDelete = entityWithServiceImplAndPaginationRepository.findAll().size();

        // Delete the entityWithServiceImplAndPagination
        restEntityWithServiceImplAndPaginationMockMvc.perform(delete("/api/entity-with-service-impl-and-paginations/{id}", entityWithServiceImplAndPagination.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<EntityWithServiceImplAndPagination> entityWithServiceImplAndPaginationList = entityWithServiceImplAndPaginationRepository.findAll();
        assertThat(entityWithServiceImplAndPaginationList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(EntityWithServiceImplAndPagination.class);
        EntityWithServiceImplAndPagination entityWithServiceImplAndPagination1 = new EntityWithServiceImplAndPagination();
        entityWithServiceImplAndPagination1.setId(1L);
        EntityWithServiceImplAndPagination entityWithServiceImplAndPagination2 = new EntityWithServiceImplAndPagination();
        entityWithServiceImplAndPagination2.setId(entityWithServiceImplAndPagination1.getId());
        assertThat(entityWithServiceImplAndPagination1).isEqualTo(entityWithServiceImplAndPagination2);
        entityWithServiceImplAndPagination2.setId(2L);
        assertThat(entityWithServiceImplAndPagination1).isNotEqualTo(entityWithServiceImplAndPagination2);
        entityWithServiceImplAndPagination1.setId(null);
        assertThat(entityWithServiceImplAndPagination1).isNotEqualTo(entityWithServiceImplAndPagination2);
    }
}
