package com.eliasmshallouf.examples.geo_locator.controller.exception_handler;

import com.eliasmshallouf.examples.geo_locator.exception.BadAddressException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class RestExceptionHandler extends ResponseEntityExceptionHandler {
    @ExceptionHandler({BadAddressException.class})
    protected ResponseEntity<Object> handleBadAddress(Exception ex, WebRequest request) {
        return handleExceptionInternal(
            ex,
            "Bad IP Address !",
            new HttpHeaders(),
            HttpStatus.BAD_REQUEST,
            request
        );
    }

    @ExceptionHandler({RuntimeException.class})
    protected ResponseEntity<Object> handleGeneralError(Exception ex, WebRequest request) {
        return handleExceptionInternal(
                ex,
                "An error has occurred !",
                new HttpHeaders(),
                HttpStatus.NOT_FOUND,
                request
        );
    }
}