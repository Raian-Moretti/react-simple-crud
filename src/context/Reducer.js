export default function Reducer(state, action) {
    switch (action.type) {
        case "SET_TITLE": // Pega o valor do payload com o novo usuário e retorna o state atualizado
            return {
                ...state,
                titles: action.payload,
            };
        case "CREATE_TITLE": // Pega o valor do payload com o novo usuário e retorna o state atualizado
            return {
                ...state,
                titles: [...state.titles, action.payload],
            };

        case "UPDATE_TITLE": // Pega o valor do payload e compara com o ID do usuário, se encontrar na lista de atualizados, retorna o usuário atualizado
            const updatedTitle = action.payload;

            const updatedTitles = state.titles.map((title) => {
                if (title.id === updatedTitle.id) {
                    return updatedTitle;
                }
                return title;
            });

            return {
                ...state,
                titles: updatedTitles,
            };

        case "DELETE_TITLE": // Pega o valor do payload e compara com o ID do usuário, se encontrar remove o usário e retorna o state atualizado
            return {
                ...state,
                titles: state.titles.filter((title) => title.id !== action.payload),
            };

        default:
            return state;
    }
}