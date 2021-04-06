package com.module.Exceptions;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
@ResponseStatus(code = HttpStatus.FORBIDDEN)
public class NotValidUserException extends RuntimeException{

	public NotValidUserException() {
		super();
	}

	public NotValidUserException(String message) {
		super(message);
	}

}
