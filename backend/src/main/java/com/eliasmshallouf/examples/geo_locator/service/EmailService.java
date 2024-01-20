package com.eliasmshallouf.examples.geo_locator.service;

import com.eliasmshallouf.examples.geo_locator.utils.EmailManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class EmailService {
    @Bean
    public EmailManager emailManager() {
        return new EmailManager();
    }
}
