package com.eliasmshallouf.examples.geo_locator;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories("com.eliasmshallouf.examples.geo_locator.persistence.repo")
@EntityScan("com.eliasmshallouf.examples.geo_locator.persistence.model")
@SpringBootApplication
public class GeoLocatorAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(GeoLocatorAppApplication.class, args);
	}

}
