package coogether.backend.repository.recipe;

import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import coogether.backend.domain.QUser;
import coogether.backend.domain.Recipe;
import coogether.backend.domain.status.EnumRecipeType;
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
                .orderBy(recipe.recipeId.asc())
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
                .orderBy(recipe.recipeId.desc())
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .fetch();

        JPAQuery<Recipe> countQuery = queryFactory
                .select(recipe)
                .from(recipe)
                .where(recipe.recipeName.contains(recipeName));

        return PageableExecutionUtils.getPage(content, pageable, countQuery::fetchCount);
    }

    @Override
    public Page<SimpleRecipeDto> customRecipePage(Pageable pageable) {
        List<SimpleRecipeDto> content = queryFactory
                .select(new QSimpleRecipeDto(recipe))
                .from(recipe)
                .where(recipe.recipeType.eq(EnumRecipeType.CUSTOM))
                .orderBy(recipe.recipeId.desc())
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .fetch();

        JPAQuery<Recipe> countQuery = queryFactory
                .select(recipe)
                .from(recipe);

        return PageableExecutionUtils.getPage(content, pageable, countQuery::fetchCount);
    }

    @Override
    public Page<SimpleRecipeDto> baekRecipePage(Pageable pageable) {
        List<SimpleRecipeDto> content = queryFactory
                .select(new QSimpleRecipeDto(recipe))
                .from(recipe)
                .where(recipe.recipeType.eq(EnumRecipeType.BAEK))
                .orderBy(recipe.recipeId.desc())
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .fetch();

        JPAQuery<Recipe> countQuery = queryFactory
                .select(recipe)
                .from(recipe);

        return PageableExecutionUtils.getPage(content, pageable, countQuery::fetchCount);
    }

    @Override
    public Page<SimpleRecipeDto> getRecipeCustomListPagingByRecipeName(String recipeName, Pageable pageable) {
        List<SimpleRecipeDto> content = queryFactory
                .select(new QSimpleRecipeDto(recipe))
                .from(recipe)
                .where(recipe.recipeName.contains(recipeName).and(recipe.recipeType.eq(EnumRecipeType.CUSTOM)))
                .orderBy(recipe.recipeId.desc())
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .fetch();

        JPAQuery<Recipe> countQuery = queryFactory
                .select(recipe)
                .from(recipe)
                .where(recipe.recipeName.contains(recipeName));

        return PageableExecutionUtils.getPage(content, pageable, countQuery::fetchCount);
    }

    @Override
    public Page<SimpleRecipeDto> getRecipeBaekListPagingByRecipeName(String recipeName, Pageable pageable) {
        List<SimpleRecipeDto> content = queryFactory
                .select(new QSimpleRecipeDto(recipe))
                .from(recipe)
                .where(recipe.recipeName.contains(recipeName).and(recipe.recipeType.eq(EnumRecipeType.BAEK)))
                .orderBy(recipe.recipeId.desc())
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
