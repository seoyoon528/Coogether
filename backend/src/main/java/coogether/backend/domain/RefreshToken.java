package coogether.backend.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@Setter
@NoArgsConstructor
@Table(name = "refresh_token")
@Entity
public class RefreshToken {
    @Id
    @Column(name = "token_user_id")
    private String userId;

    @Column(name = "token_value")
    private String token;

    @Builder
    public RefreshToken(String userId, String token) {
        this.userId = userId;
        this.token = token;
    }

    public RefreshToken updateToken(String token) {
        this.token = token;
        return this;
    }
}
