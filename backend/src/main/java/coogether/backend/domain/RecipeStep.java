package coogether.backend.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import coogether.backend.domain.status.EnumRecipeCategory;
import coogether.backend.domain.status.EnumRecipeType;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.FetchType.LAZY;

@Entity
@Getter
@Setter
@NoArgsConstructor//(access = AccessLevel.PROTECTED)
@Table(name = "recipe_step")
public class RecipeStep {

    @JsonIgnore
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "recipe_id")
    private Recipe recipe;


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "recipe_step_id", nullable = false)
    private Long recipeStepId;

    @Column(name = "recipe_step_num", nullable = false)
    private int recipeStepNum;

    @Column(name = "recipe_step_content", length = 1000, nullable = false)
    private String recipeStepContent;
}
