package io.github.jhipster.travis.config;

import java.time.Duration;

import org.ehcache.config.builders.*;
import org.ehcache.jsr107.Eh107Configuration;

import org.hibernate.cache.jcache.ConfigSettings;
import io.github.jhipster.config.JHipsterProperties;

import org.springframework.boot.autoconfigure.cache.JCacheManagerCustomizer;
import org.springframework.boot.autoconfigure.orm.jpa.HibernatePropertiesCustomizer;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.*;

@Configuration
@EnableCaching
public class CacheConfiguration {

    private final javax.cache.configuration.Configuration<Object, Object> jcacheConfiguration;

    public CacheConfiguration(JHipsterProperties jHipsterProperties) {
        JHipsterProperties.Cache.Ehcache ehcache = jHipsterProperties.getCache().getEhcache();

        jcacheConfiguration = Eh107Configuration.fromEhcacheCacheConfiguration(
            CacheConfigurationBuilder.newCacheConfigurationBuilder(Object.class, Object.class,
                ResourcePoolsBuilder.heap(ehcache.getMaxEntries()))
                .withExpiry(ExpiryPolicyBuilder.timeToLiveExpiration(Duration.ofSeconds(ehcache.getTimeToLiveSeconds())))
                .build());
    }

    @Bean
    public HibernatePropertiesCustomizer hibernatePropertiesCustomizer(javax.cache.CacheManager cacheManager) {
        return hibernateProperties -> hibernateProperties.put(ConfigSettings.CACHE_MANAGER, cacheManager);
    }

    @Bean
    public JCacheManagerCustomizer cacheManagerCustomizer() {
        return cm -> {
            createCache(cm, io.github.jhipster.travis.repository.UserRepository.USERS_BY_LOGIN_CACHE);
            createCache(cm, io.github.jhipster.travis.repository.UserRepository.USERS_BY_EMAIL_CACHE);
            createCache(cm, io.github.jhipster.travis.domain.User.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.Authority.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.User.class.getName() + ".authorities");
            createCache(cm, io.github.jhipster.travis.domain.BankAccount.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.BankAccount.class.getName() + ".operations");
            createCache(cm, io.github.jhipster.travis.domain.Label.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.Label.class.getName() + ".operations");
            createCache(cm, io.github.jhipster.travis.domain.Operation.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.Operation.class.getName() + ".labels");
            createCache(cm, io.github.jhipster.travis.domain.FieldTestEntity.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.FieldTestServiceImplEntity.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.FieldTestServiceClassEntity.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.FieldTestPaginationEntity.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.FieldTestPagerEntity.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.FieldTestMapstructEntity.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.FieldTestInfiniteScrollEntity.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.EntityWithDTO.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.EntityWithServiceClass.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.EntityWithServiceImpl.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.EntityWithPagination.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.EntityWithServiceClassAndPagination.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.EntityWithServiceImplAndPagination.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.EntityWithServiceClassAndDTO.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.EntityWithServiceImplAndDTO.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.EntityWithPaginationAndDTO.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.EntityWithServiceClassPaginationAndDTO.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.EntityWithServiceImplPaginationAndDTO.class.getName());
            createCache(cm, io.github.jhipster.travis.domain.MapsIdUserProfileWithDTO.class.getName());
            // jhipster-needle-ehcache-add-entry
        };
    }

    private void createCache(javax.cache.CacheManager cm, String cacheName) {
        javax.cache.Cache<Object, Object> cache = cm.getCache(cacheName);
        if (cache != null) {
            cm.destroyCache(cacheName);
        }
        cm.createCache(cacheName, jcacheConfiguration);
    }

}
