package com.eliasmshallouf.examples.geo_locator.utils;

import jakarta.annotation.PostConstruct;
import org.apache.commons.mail.DefaultAuthenticator;
import org.apache.commons.mail.EmailException;
import org.apache.commons.mail.HtmlEmail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

public class EmailManager {
    @Value("${email.host}") private String host;
    @Value("#{T(Integer).valueOf('${email.port}')}") private Integer port;
    @Value("#{T(Boolean).valueOf('${email.use-ssl}')}") private Boolean useSSL;
    @Value("${email.account.user}") private String userAccount;
    @Value("${email.account.password}") private String userPassword;

    private HtmlEmail email;

    @PostConstruct
    public void init() {
        this.email = new HtmlEmail();
        this.email.setHostName(this.host);
        this.email.setSmtpPort(this.port);
        this.email.setAuthenticator(
                new DefaultAuthenticator(
                        this.userAccount,
                        this.userPassword
                )
        );
        this.email.setSSLOnConnect(this.useSSL);
        try {
            this.email.setFrom(this.userAccount);
        } catch (EmailException e) {
            throw new RuntimeException(e);
        }
    }

    public void sendEmail(String to, String subject, String content) {
        this.email.setSubject(subject);

        try {
            this.email.setHtmlMsg(content);
            this.email.addTo(to);
            this.email.send();
        } catch (EmailException e) {
            throw new RuntimeException(e);
        }
    }
}