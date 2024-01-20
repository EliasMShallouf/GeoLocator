package com.eliasmshallouf.examples.geo_locator.service;

import com.eliasmshallouf.examples.geo_locator.retrofit.AddressApiClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AddressApiService {
    @Bean
    public AddressApiClient addressApiClient() {
        return new AddressApiClient();
    }
}
