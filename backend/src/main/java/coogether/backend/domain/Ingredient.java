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

    @OneToMany(mappedBy = "ingredient_id", cascade = CascadeType.ALL)
    private List<MyIngredientManage> myIngredientManageList = new ArrayList<>();

    @OneToMany(mappedBy = "ingredient_id", cascade = CascadeType.ALL)
    private List<IngredientFav> ingredientFavList = new ArrayList<>();

    @OneToMany(mappedBy = "ingredient_id", cascade = CascadeType.ALL)
    private List<IngredientList> ingredientList = new ArrayList<>();


    @Id
    @GeneratedValue
    @Column(name = "ingredient_id", nullable = false)
    private int id;

    @Column(length = 30, nullable = false)
    private String ingredient_name;

    @NotNull
    @Enumerated(EnumType.STRING)
    private EnumIngredientCategory ingredient_category;
}
