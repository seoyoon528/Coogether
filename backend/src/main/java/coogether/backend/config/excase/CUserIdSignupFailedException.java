package coogether.backend.config.excase;

public class CUserIdSignupFailedException extends RuntimeException{
    public CUserIdSignupFailedException() {
        super();
    }

    public CUserIdSignupFailedException(String message) {
        super(message);
    }

    public CUserIdSignupFailedException(String message, Throwable cause) {
        super(message, cause);
    }
}