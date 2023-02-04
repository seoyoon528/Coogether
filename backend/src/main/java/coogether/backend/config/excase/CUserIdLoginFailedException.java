package coogether.backend.config.excase;

public class CUserIdLoginFailedException extends RuntimeException{
    public CUserIdLoginFailedException() {
        super();
    }

    public CUserIdLoginFailedException(String message) {
        super(message);
    }

    public CUserIdLoginFailedException(String message, Throwable cause) {
        super(message, cause);
    }
}
