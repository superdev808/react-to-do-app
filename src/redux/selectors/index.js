import { createSelector } from 'reselect'

const getVisibilityFilter = (state) => state.visibilityFilter
const getTodos = (state) => state.todos

export const getVisibleTodos = createSelector(
    [getVisibilityFilter, getTodos],
    (visibilityFilter, todos) => {
        switch (visibilityFilter) {
            case 'SHOW_FINISHED':
                return todos.filter(t => t.finished)
            case 'SHOW_ACTIVE':
                return todos.filter(t => !t.finished)
            default:
                return todos
        }
    }
)