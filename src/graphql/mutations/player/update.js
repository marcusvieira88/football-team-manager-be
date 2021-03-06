import {GraphQLBoolean, GraphQLNonNull} from 'graphql';
import playerType from '../../types/player/update-input-player';
import PlayerSchema from '../../../models/PlayerSchema';
import Helpers from '../../../utils/Helpers';

export default {
    type: GraphQLBoolean,
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(playerType)
        }
    },
    async resolve(root, params, options) {
        Helpers.checkUserUnauthorized(context);

        const updatedPlayer = await PlayerSchema.findOneAndUpdate(
            params.data.id, params.data);

        if (!updatedPlayer) {
            throw new Error('Error updating new player');
        }
        return true;
    }
};
