package coogether.backend.domain;

import coogether.backend.domain.status.EnumIngredientCategory;
import coogether.backend.domain.status.EnumRecipeCategory;
import coogether.backend.domain.status.EnumRecipeType;
import lombok.AccessLevel;
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
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "recipe")
public class Recipe {

    @OneToMany(mappedBy = "recipeId", cascade = CascadeType.ALL)
    private List<IngredientList> ingredientList = new ArrayList<>();

    @OneToMany(mappedBy = "recipeId", cascade = CascadeType.ALL)
    private List<CookingRoom> cookingRoomList = new ArrayList<>();

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "user_id")
    private User userId;


    @Id
    @GeneratedValue
    @Column(name = "recipe_id", nullable = false)
    private int recipeId;

    @Enumerated(EnumType.STRING)
    @Column(name = "recipe_category", nullable = false)
    private EnumRecipeCategory recipeCategory;

    @Enumerated(EnumType.STRING)
    @Column(name = "recipe_type", nullable = false)
    private EnumRecipeType recipeType;

    @Column(name = "recipe_content", length = 2000, nullable = false)
    private String recipeContent;

    @Column(name = "recipe_name", length = 50, nullable = false)
    private String recipeName;

    @CreatedDate // 최초 생성 시간
    @Column(name = "recipe_created_date", updatable = false, nullable = false)
    private LocalDateTime recipeCreatedDate;
}
