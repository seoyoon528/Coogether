package coogether.backend.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;
import coogether.backend.domain.status.EnumMyIngredientManageFlag;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

import java.time.LocalDateTime;

import static javax.persistence.FetchType.LAZY;

@Entity
@Getter
@Setter
@NoArgsConstructor//(access = AccessLevel.PROTECTED)
@EntityListeners(AuditingEntityListener.class)
@Table(name = "my_ingredient_manage")
public class MyIngredientManage {
    @Id
    @GeneratedValue
    @Column(name = "my_ingredient_manage_id", nullable = false)
    private Long myIngredientManageId;

    @JsonIgnore
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @JsonIgnore
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "ingredient_id")
    private Ingredient ingredient;

    @LastModifiedDate // 최종 수정 시간
    @Column(name = "my_ingredient_manage_date", nullable = false)
    private LocalDateTime myIngredientManageDate;

    @Enumerated(EnumType.STRING)
    @Column(name = "my_ingredient_manage_flag", nullable = false)
    private EnumMyIngredientManageFlag myIngredientManageFlag;
}
