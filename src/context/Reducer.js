export default function Reducer(state, action){
    switch(action.type){
        case "CREATE_USER": // Pega o valor do payload com o novo usuário e retorna o state atualizado
            return {
                ...state,
                users: [...state.user, action.payload],
            };
        //case "READ_USER":

        case "UPDATE_USER": // Pega o valor do payload e compara com o ID do usuário, se encontrar na lista de atualizados, retorna o usuário atualizado
            const updatedUser = action.payload;

            const updatedUsers = state.user.map((user) => {
                if (user.id === updatedUser.id) {
                    return updatedUser;
                }
                return user;
            });

            return {
                ...state,
                users: updatedUsers,
            };

        case "DELETE_USER": // Pega o valor do payload e compara com o ID do usuário, se encontrar remove o usário e retorna o state atualizado
            return {
                ...state,
                users: state.user.filer((user) => user.id !== action.payload),
            };

        default:
                return state;
    }
}