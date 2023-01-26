package coogether.backend.domain;

import com.sun.istack.NotNull;
import coogether.backend.domain.status.EnumIngredientCategory;
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
@Table(name = "ingredient")
public class Ingredient {

    @OneToMany(mappedBy = "ingredientId", cascade = CascadeType.ALL)
    private List<MyIngredientManage> myIngredientManageList = new ArrayList<>();

    @OneToMany(mappedBy = "ingredientId", cascade = CascadeType.ALL)
    private List<IngredientFav> ingredientFavList = new ArrayList<>();

    @OneToMany(mappedBy = "ingredientId", cascade = CascadeType.ALL)
    private List<IngredientList> ingredientList = new ArrayList<>();


    @Id
    @GeneratedValue
    @Column(name = "ingredient_id", nullable = false)
    private int ingredientId;

    @Column(name = "ingredient_name", length = 30, nullable = false)
    private String ingredientName;

    @Enumerated(EnumType.STRING)
    @Column(name = "ingredient_category", nullable = false)
    private EnumIngredientCategory ingredientCategory;
}
