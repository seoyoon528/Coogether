package coogether.backend.repository.recipe;

import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import coogether.backend.domain.Recipe;
import coogether.backend.dto.RecipeDto;
import coogether.backend.dto.simple.QSimpleRecipeDto;
import coogether.backend.dto.simple.SimpleRecipeDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.support.PageableExecutionUtils;

import static coogether.backend.domain.QRecipe.recipe;
import javax.persistence.EntityManager;
import java.util.List;

public class RecipeRepositoryImpl implements  RecipeRepositoryCustom{
    private final JPAQueryFactory queryFactory;

    public RecipeRepositoryImpl(EntityManager em) {
        this.queryFactory = new JPAQueryFactory(em);
    }

    @Override
    public Page<SimpleRecipeDto> allRecipePage(Pageable pageable) {
        List<SimpleRecipeDto> content = queryFactory
                .select(new QSimpleRecipeDto(recipe))
                .from(recipe)
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .fetch();

        JPAQuery<Recipe> countQuery = queryFactory
                .select(recipe)
                .from(recipe);

        return PageableExecutionUtils.getPage(content, pageable, countQuery::fetchCount);
    }

    @Override
    public Page<RecipeDto> searchRecipePage(Pageable pageable) {
        return null;
    }

    @Override
    public Page<SimpleRecipeDto> getRecipeListPagingByRecipeName(String recipeName, Pageable pageable) {
        List<SimpleRecipeDto> content = queryFactory
                .select(new QSimpleRecipeDto(recipe))
                .from(recipe)
                .where(recipe.recipeName.contains(recipeName))
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .fetch();

        JPAQuery<Recipe> countQuery = queryFactory
                .select(recipe)
                .from(recipe)
                .where(recipe.recipeName.contains(recipeName));

        return PageableExecutionUtils.getPage(content, pageable, countQuery::fetchCount);
    }
}
