package com.module.Exceptions;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.CONFLICT)
public class DuplicateUserException extends RuntimeException{

	public DuplicateUserException() {
		super();
	}

	public DuplicateUserException(String arg0) {
		super(arg0);
	}

}
