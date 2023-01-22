package coogether.backend.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "recipe")
public class Recipe {

    @OneToMany(mappedBy = "recipe_id", cascade = CascadeType.ALL)
    private List<IngredientList> ingredientList = new ArrayList<>();

    @OneToMany(mappedBy = "recipe_id", cascade = CascadeType.ALL)
    private List<CookingRoom> cookingRoomList = new ArrayList<>();

    @Id
    @GeneratedValue
    @Column(name = "recipe_id", nullable = false)
    private int id;

    @Column(length = 2000, nullable = false)
    private String recipe_content;

    @Column(length = 50, nullable = false)
    private String recipe_name;
}
