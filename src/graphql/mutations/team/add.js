import {GraphQLBoolean, GraphQLNonNull} from 'graphql';
import teamType from '../../types/team/insert-input-team';
import TeamSchema from '../../../models/TeamSchema';

export default {
    type: GraphQLBoolean,
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(teamType)
        }
    },
    async resolve (root, params, options) {
        const teamModel = new TeamSchema(params.data);
        const newTeam = await teamModel.save();

        if (!newTeam) {
            throw new Error('Error adding new team');
        }
        return true;
    }
};